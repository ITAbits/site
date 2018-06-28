using System;
using System.Runtime.InteropServices;

namespace Gameloop
{
    public class ConsoleCanvas
    {
        private ConsoleCharInfo[,] _buff;
        private readonly IntPtr _handle;

        private readonly int _width, _height;

        public ConsoleCanvas(int width, int height)
        {
            _width = width;
            _height = height;


            int GENERIC_READ = unchecked((int)0x80000000);
            int GENERIC_WRITE = 0x40000000;
            int FILE_SHARE_READ = 1;
            int FILE_SHARE_WRITE = 2;
            int CONSOLE_TEXTMODE_BUFFER = 1;

            _handle = CreateConsoleScreenBuffer(
                GENERIC_READ | GENERIC_WRITE,
                FILE_SHARE_READ | FILE_SHARE_WRITE,
                null,
                CONSOLE_TEXTMODE_BUFFER,
                IntPtr.Zero);
            SetConsoleActiveScreenBuffer(_handle);
            Clear();
        }

        public void Clear()
        {
            _buff = new ConsoleCharInfo[_height, _width];
        }

        public void Draw(char c, int x, int y, ConsoleColor foreground = ConsoleColor.White, ConsoleColor background = ConsoleColor.Black)
        {
            if (x < 0 || x > _width - 1) return;
            if (y < 0 || y > _height - 1) return;

            // NOTE: Not working with all ascii
            _buff[y, x].UnicodeChar = c;
            _buff[y, x].Foreground = foreground;
            _buff[y, x].Background = background;
        }

        public void Render()
        {
            var bufferSize = new Coord((short)(_width), (short)(_height));
            var bufferPos = new Coord(0, 0);
            var writeRegion = new SmallRect(0, 0, (short)(_width - 1), (short)(_height - 1));
            WriteConsoleOutput(_handle, _buff, bufferSize, bufferPos, writeRegion);
            Clear();
        }

        // Thanks to Mischel.ConsoleDotNet for better understanding of using WinApi
        #region DLLImports

        [DllImport("kernel32.dll", SetLastError = true)]
        public static extern IntPtr CreateConsoleScreenBuffer(
            int dwDesiredAccess,
            int dwShareMode,
            [In, Out][MarshalAs(UnmanagedType.LPStruct)] SecurityAttributes lpSecurityAttributes,
            int dwFlags,
            IntPtr lpScreenBufferData);

        [DllImport("kernel32.dll", SetLastError = true)]
        public static extern bool SetConsoleActiveScreenBuffer(IntPtr hConsoleOutput);

        [DllImport("kernel32.dll", SetLastError = true)]
        public static extern bool WriteConsoleOutput(
            IntPtr hConsoleOutput,
            [In][MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)]ConsoleCharInfo[,] lpBuffer,
            Coord dwBufferSize,
            Coord dwBufferCoord,
            [In, Out][MarshalAs(UnmanagedType.LPStruct)]SmallRect lpWriteRegion);

        #endregion

        #region WinApi Structs

        [StructLayout(LayoutKind.Sequential)]
        public class SecurityAttributes
        {
            public int nLength;
            public IntPtr lpSecurityDescriptor;
            public bool bInheritHandle;
        }

        /// <summary>
        /// Defines the coordinates of a character cell in a console window.
        /// </summary>
        [StructLayout(LayoutKind.Explicit)]
        public struct Coord
        {
            [FieldOffset(0)]
            private short x;
            [FieldOffset(2)]
            private short y;
            /// <summary>
            /// Creates a new instance of the Coord structure.
            /// </summary>
            /// <param name="mx">The column position in the window.</param>
            /// <param name="my">The row position in the window.</param>
            public Coord(short mx, short my)
            {
                x = mx;
                y = my;
            }

            /// <summary>
            /// Gets or sets the column position.
            /// </summary>
            public short X
            {
                get { return x; }
                set { x = value; }
            }

            /// <summary>
            /// Gets or sets the row position.
            /// </summary>
            public short Y
            {
                get { return y; }
                set { y = value; }
            }
        }

        /// <summary>
        /// Defines the coordinates of the upper left and lower right corners of
        /// a rectangle.
        /// </summary>
        [StructLayout(LayoutKind.Sequential)]
        public class SmallRect
        {
            public short left;
            public short top;
            public short right;
            public short bottom;

            /// <summary>
            /// Creates a new instance of the SmallRect structure.
            /// </summary>
            /// <param name="mLeft">Column position of top left corner.</param>
            /// <param name="mTop">Row position of the top left corner.</param>
            /// <param name="mRight">Column position of the bottom right corner.</param>
            /// <param name="mBottom">Row position of the bottom right corner.</param>
            public SmallRect(short mLeft, short mTop, short mRight, short mBottom)
            {
                left = mLeft;
                top = mTop;
                right = mRight;
                bottom = mBottom;
            }

            /// <summary>
            /// Gets or sets the column position of the top left corner of a rectangle.
            /// </summary>
            public short Left
            {
                get { return left; }
                set { left = value; }
            }

            /// <summary>
            /// Gets or sets the row position of the top left corner of a rectangle.
            /// </summary>
            public short Top
            {
                get { return top; }
                set { top = value; }
            }

            /// <summary>
            /// Gets or sets the column position of the bottom right corner of a rectangle.
            /// </summary>
            public short Right
            {
                get { return right; }
                set { right = value; }
            }

            /// <summary>
            /// Gets or sets the row position of the bottom right corner of a rectangle.
            /// </summary>
            public short Bottom
            {
                get { return bottom; }
                set { bottom = value; }
            }

            /// <summary>
            /// Gets or sets the width of a rectangle.  When setting the width, the
            /// column position of the bottom right corner is adjusted.
            /// </summary>
            public short Width
            {
                get { return (short)(right - left + 1); }
                set { right = (short)(left + value - 1); }
            }

            /// <summary>
            /// Gets or sets the height of a rectangle.  When setting the height, the
            /// row position of the bottom right corner is adjusted.
            /// </summary>
            public short Height
            {
                get { return (short)(bottom - top + 1); }
                set { bottom = (short)(top + value - 1); }
            }
        }

        /// <summary>
        /// Helper class that simplifies working with foreground and background colors.
        /// </summary>
        [StructLayout(LayoutKind.Sequential)]
        public struct ConsoleCharAttribute
        {
            private short attr;

            /// <summary>
            /// Creates a new instance of the ConsoleCharAttribute structure
            /// </summary>
            /// <param name="fg">The foreground color.</param>
            /// <param name="bg">The background color.</param>
            public ConsoleCharAttribute(ConsoleColor fg, ConsoleColor bg)
            {
                attr = (short)(((ushort)bg << 4) | (ushort)fg);
            }

            /// <summary>
            /// Creates a new instance of the ConsoleCharAttribute structure.
            /// </summary>
            /// <param name="wAttr">The combined foreground/background attribute.</param>
            public ConsoleCharAttribute(short wAttr)
            {
                attr = wAttr;
            }

            /// <summary>
            /// Gets or sets the foreground color attribute.
            /// </summary>
            public ConsoleColor Foreground
            {
                get { return (ConsoleColor)(attr & 0x0f); }
                set { attr = (short)((attr & 0xfff0) | (ushort)value); }
            }

            /// <summary>
            /// Gets or sets the background color attribute.
            /// </summary>
            public ConsoleColor Background
            {
                get { return (ConsoleColor)((attr >> 4) & 0x0f); }
                set { attr = (short)((attr & 0xff0f) | ((ushort)value << 4)); }
            }

            /// <summary>
            /// Gets or sets the attribute (combined foreground/background color).
            /// </summary>
            public short Attribute
            {
                get { return attr; }
                set { attr = value; }
            }
        }

        /// <summary>
        /// Specifies a Unicode or ASCII character and its attributes.
        /// </summary>
        [StructLayout(LayoutKind.Explicit)]
        public struct ConsoleCharInfo
        {
            [FieldOffset(0)]
            private char cUnicodeChar;
            [FieldOffset(0)]
            private byte bAsciiChar;
            [FieldOffset(2)]
            private ConsoleCharAttribute attr;

            /// <summary>
            /// Creates a new instance of the ConsoleCharInfo structure.
            /// </summary>
            /// <param name="uChar">The Unicode character.</param>
            /// <param name="attr">Character attributes.</param>
            public ConsoleCharInfo(char uChar, ConsoleCharAttribute attr)
            {
                bAsciiChar = 0;
                cUnicodeChar = uChar;
                this.attr = attr;
            }

            /// <summary>
            /// Creates a new instance of the ConsoleCharInfo structure.
            /// </summary>
            /// <param name="aChar">The ASCII character.</param>
            /// <param name="attr">Character attributes.</param>
            public ConsoleCharInfo(byte aChar, ConsoleCharAttribute attr)
            {
                cUnicodeChar = '\x0';
                bAsciiChar = aChar;
                this.attr = attr;
            }

            /// <summary>
            /// Gets or sets the Unicode character represented by this ConsoleCharInfo structure.
            /// </summary>
            public char UnicodeChar
            {
                get { return cUnicodeChar; }
                set { cUnicodeChar = value; }
            }

            /// <summary>
            /// Gets or sets the ASCII character represented by this ConsoleCharInfo structure.
            /// </summary>
            public byte AsciiChar
            {
                get { return bAsciiChar; }
                set { bAsciiChar = value; }
            }

            /// <summary>
            /// Gets or sets the attributes for this character.
            /// </summary>
            public ConsoleCharAttribute Attribute
            {
                get { return attr; }
                set { attr = value; }
            }

            /// <summary>
            /// Gets or sets the foreground color attribute.
            /// </summary>
            public ConsoleColor Foreground
            {
                get { return attr.Foreground; }
                set { attr.Foreground = value; }
            }

            /// <summary>
            /// Gets or sets the background color attribute.
            /// </summary>
            public ConsoleColor Background
            {
                get { return attr.Background; }
                set { attr.Background = value; }
            }
        }

        #endregion
    }
}

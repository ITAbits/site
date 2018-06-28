using System;
using System.IO;
using System.Text;
using System.Collections;
using System.Runtime.InteropServices;

namespace ConsoleDotNet
{
	/// <summary>
	/// More complete interface to the Windows Console API
	/// </summary>
	public sealed class JConsole
	{

		private JConsole()
		{
			// private constructor prevents instantiation
		}

		#region Attaching and detaching

		public static void AllocConsole()
		{
			if (!WinCon.AllocConsole())
			{
				throw new IOException("Unable to allocate console", Marshal.GetLastWin32Error());
			}
		}

		/// <summary>
		/// Process ID to pass to AttachConsole in order to attach to parent console.
		/// </summary>
		public static int AttachParent = -1;

		public static void AttachConsole(int processId)
		{
			if (!WinCon.AttachConsole(processId))
			{
				throw new IOException(String.Format("Unable to attach console 0x{0,8:X}", processId), Marshal.GetLastWin32Error());
			}
		}

		public static void FreeConsole()
		{
			if (!WinCon.FreeConsole())
			{
				throw new IOException("Unable to free console", Marshal.GetLastWin32Error());
			}
		}
		#endregion

		#region Miscellaneous

		/// <summary>
		/// Gets the window handle of the attached console
		/// </summary>
		public static IntPtr WindowHandle
		{
			get
			{
				return WinCon.GetConsoleWindow();
			}
		}

		public static ConsoleDisplayMode DisplayMode
		{
			get
			{
				int dMode = 0;
				if (!WinCon.GetConsoleDisplayMode(ref dMode))
				{
					throw new IOException("Unable to get display mode", Marshal.GetLastWin32Error());
				}
				return (ConsoleDisplayMode)dMode;
			}
			set
			{
				Coord newSize = new Coord(0, 0);
				if (!WinCon.SetConsoleDisplayMode(ScreenBuffer.Handle, (int)value, ref newSize))
				{
					throw new ApplicationException("Unable to set display mode.");
				}
			}
		}

		public static int[] GetProcessList(IntPtr handle)
		{
			int[] processes = new int[10];
			do
			{
				int rslt = WinCon.GetConsoleProcessList(processes, processes.Length);
				if (rslt == 0)
				{
					throw new IOException("Unable to get process list", Marshal.GetLastWin32Error());
				}
				if (rslt <= processes.Length)
				{
					// if the array is exactly the right size, return it
					if (rslt == processes.Length)
					{
						return processes;
					}

					// otherwise create a new array of the required length
					int[] newProcesses = new int[rslt];
					Array.Copy(processes, newProcesses, rslt);
					return newProcesses;
				}
				else
				{
					// The initial array was too small.
					// Allocate more space and try again.
					processes = new int[rslt];
				}
			} while (true);
		}

		#endregion

		#region Aliases
		public static void AddAlias(string Source, string Target, string ExeName)
		{
			if (!WinCon.AddConsoleAlias(Source, Target, ExeName))
			{
				throw new IOException("Unable to add alias", Marshal.GetLastWin32Error());
			}
		}

		private static int GetAliasesLength(string ExeName)
		{
			return WinCon.GetConsoleAliasesLength(ExeName);
		}

		public static string GetAlias(string Source, string ExeName)
		{
			// The only reliable way to allocate enough space is to the
			// combined length for all aliases.
			int length = GetAliasesLength(ExeName);
			if (length == 0)
			{
				return string.Empty;
			}

			char[] buff = new char[length];
			int rslt = WinCon.GetConsoleAlias(Source, buff, buff.Length, ExeName);
			if (rslt == 0)
			{
				throw new IOException("Unable to get alias", Marshal.GetLastWin32Error());
			}
			return new string(buff);
		}

		private static string[] CharBufferToStringArray(char[] buff, int length)
		{
			ArrayList list = new ArrayList();
			// we have a buffer of nul-terminated strings
			// create individual strings
			int startIndex = 0;
			for (int i = 0; i < length; i++)
			{
				if (buff[i] == '\0')
				{
					string s = new string(buff, startIndex, i-startIndex);
					list.Add (s);
					startIndex = i+1;
				}
			}
			// now generate the string array
			string[] items = new string[list.Count];
			for (int i = 0; i < list.Count; i++)
			{
				items[i] = (string)list[i];
			}
			return items;
		}

		public static string[] GetAliases(string ExeName)
		{
			int length = GetAliasesLength(ExeName);
			if (length > 0)
			{
				char[] buff = new char[length];
				if (WinCon.GetConsoleAliases(buff, length, ExeName) == 0)
				{
					throw new IOException("Unable to retrieve alias strings", Marshal.GetLastWin32Error());
				}
				return CharBufferToStringArray(buff, length);
			}
			return new string[0];
		}
		
		public static string[] GetAliasExes()
		{
			int length = GetAliasExesLength();
			if (length > 0)
			{
				char[] buff = new char[length];
				if (WinCon.GetConsoleAliasExes(buff, length) == 0)
				{
					throw new IOException("Unable to get alias exes", Marshal.GetLastWin32Error());
				}
				return CharBufferToStringArray(buff, length);
			}
			return new string[0];
		}

		public static int GetAliasExesLength()
		{
			return WinCon.GetConsoleAliasExesLength();
		}
		#endregion
/*
		#region Standard streams
		// Important note:  I manage the streams, but I don't write to or
		// read from them.
		// To write to the console:
		//  JConsole.Out.Write()
		//  JConsole.Error.Write()
		// To read from the console:
		//  JConsole.In.Read()

		// TODO: Other stream types
		// I'd really like to support other than FileStream.  NetworkStream, for example,
		// could be really cool.  The problem is that the Stream class doesn't have a
		// Handle property, so there's no way that I could reliably redirect the I/O.
		// I guess I could write it so that it could identify FileStream and NetworkStream.
		// If it sees either of those, then it calls SetStdHandle and does all that.
		// Otherwise it just goes about its merry way, ignoring SetStdHandle.
		//
		// This isn't a problem for the .NET 1.1 or 2.0 Console class because it probably
		// doesn't worry about sharing.

		// TODO: Sharing
		// The Windows Console API allows sharing the console among processes.
		// Many different processes can be talking to a single console,
		// and apparently any of those processes can change the input, output, or error handles
		// at any time.
		//
		// As currently written, this does not allow for that.  Another process changing the
		// handle will not affect the program that's using this class.
		//
		// I could check the STDIN handle every time it's accessed, to ensure that
		// it hasn't been changed by another process.  If it's been changed, I abandon
		// the current stream and open a new one.
		//
		// I can't Close() the current stream because I don't know if other parts of the
		// program are using it.
		//
		// One problem:  programs that assign a variable to JConsole.In will then be
		// writing to the wrong file.  Do I just document that and go on?
		// I think so.  People who will use this class will have to understand that
		// the rug can be pulled out from underneath them at any time.
		//
		// Another solution would be to create ConsoleInputStream and ConsoleOutputStream
		// classes that allow the underlying file to change.  I resist that because
		// then I wouldn't be able to use FileStream descendants.
		//
		private static FileStream stdIn = null;
		private static FileStream stdOut = null;
		private static FileStream stdErr = null;

		private static StreamReader inputReader = null;
		private static StreamWriter outputWriter = null;
		private static StreamWriter errorWriter = null;

		private static bool ownsInput = false;
		private static bool ownsOutput = false;
		private static bool ownsError = false;

		public static StreamReader In
		{
			get
			{
				if (stdIn == null)
				{
					IntPtr handle = WinCon.GetStdHandle(WinCon.STD_INPUT_HANDLE);
					if (handle.ToInt32() == WinApi.INVALID_HANDLE_VALUE)
					{
						throw new IOException("Unable to get standard input handle", Marshal.GetLastWin32Error());
					}
					stdIn = new FileStream(handle, FileAccess.ReadWrite, false);
					inputReader = new StreamReader(stdIn);
					ownsInput = true;
				}
				return inputReader;
			}
		}

		public static void SetIn(FileStream aStream)
		{
			if (!WinCon.SetStdHandle(WinCon.STD_INPUT_HANDLE, aStream.Handle))
			{
				throw new IOException("Unable to set standard input handle", Marshal.GetLastWin32Error());
			}
			if (inputReader != null)
			{
				inputReader.Close();
			}
			if (ownsInput && stdIn != null)
			{
				stdIn.Close();
			}
			stdIn = aStream;
			inputReader = new StreamReader(stdIn);
			ownsInput = false;
		}

		public static void SetIn(string Filename)
		{
			SetIn(new FileStream(Filename, FileMode.Open, FileAccess.Read, FileShare.ReadWrite));
			ownsInput = true;
		}

		private static StreamWriter CreateWriter(FileStream fs)
		{
			StreamWriter sw = new StreamWriter(fs);
			sw.AutoFlush = true;
			return sw;
		}

		public static StreamWriter Out
		{
			get
			{
				if (stdOut == null)
				{
					Console.Out.Close();
					IntPtr handle = WinCon.GetStdHandle(WinCon.STD_OUTPUT_HANDLE);
					if (handle.ToInt32() == WinApi.INVALID_HANDLE_VALUE)
					{
						throw new IOException("Unable to get standard output handle", Marshal.GetLastWin32Error());
					}
					stdOut = new FileStream(handle, FileAccess.Write, false);
					outputWriter = CreateWriter(stdOut);
					ownsOutput = true;
				}
				return outputWriter;
			}
		}

		public static void SetOut(FileStream aStream)
		{
			if (!WinCon.SetStdHandle(WinCon.STD_OUTPUT_HANDLE, aStream.Handle))
			{
				throw new IOException("Unable to set standard output handle", Marshal.GetLastWin32Error());
			}
			if (outputWriter != null)
			{
				outputWriter.Close();
			}
			if (ownsOutput && stdOut != null)
			{
				stdOut.Close();
			}
			stdOut = aStream;
			outputWriter = CreateWriter(stdOut);
			ownsOutput = false;
		}

		public static void SetOut(string Filename)
		{
			SetOut(new FileStream(Filename, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite));
			ownsOutput = true;
		}

		public static StreamWriter Error
		{
			get
			{
				if (stdErr == null)
				{
					IntPtr handle = WinCon.GetStdHandle(WinCon.STD_ERROR_HANDLE);
					if (handle.ToInt32() == WinApi.INVALID_HANDLE_VALUE)
					{
						throw new IOException("Unable to get standard error handle", Marshal.GetLastWin32Error());
					}
					stdErr = new FileStream(handle, FileAccess.Write, false);
					errorWriter = CreateWriter(stdErr);
					ownsError = true;
				}
				return errorWriter;
			}
		}

		public static void SetError(FileStream aStream)
		{
			if (!WinCon.SetStdHandle(WinCon.STD_ERROR_HANDLE, aStream.Handle))
			{
				throw new IOException("Unable to set standard error handle", Marshal.GetLastWin32Error());
			}
			if (errorWriter != null)
			{
				errorWriter.Close();
			}
			if (ownsError && stdErr != null)
			{
				stdErr.Close();
			}
			stdErr = aStream;
			errorWriter = CreateWriter(stdErr);
			ownsError = false;
		}

		public static void SetError(string Filename)
		{
			SetError(new FileStream(Filename, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite));
			ownsError = true;
		}

		#endregion
*/
		public static void GenerateCtrlEventType(ConsoleControlEventType eventId, int processGroupId)
		{
			if (!WinCon.GenerateConsoleCtrlEvent((int)eventId, processGroupId))
			{
				throw new IOException("Error generating event.", Marshal.GetLastWin32Error());
			}
		}

		public static void AddCtrlHandler(ConsoleCtrlHandlerDelegate HandlerRoutine)
		{
			SetCtrlHandler(HandlerRoutine, true);
		}

		public static void RemoveCtrlHandler(ConsoleCtrlHandlerDelegate HandlerRoutine)
		{
			SetCtrlHandler(HandlerRoutine, false);
		}

		private static void SetCtrlHandler(ConsoleCtrlHandlerDelegate HandlerRoutine, bool bAdd)
		{
			if (!WinCon.SetConsoleCtrlHandler(HandlerRoutine, bAdd))
			{
				throw new IOException("Unable to set handler routine.", Marshal.GetLastWin32Error());
			}
		}

		private static IntPtr OpenConIn()
		{
			IntPtr inHandle = WinApi.CreateFile("CONIN$",
				WinApi.GENERIC_READ, 
				WinApi.FILE_SHARE_READ | WinApi.FILE_SHARE_WRITE,
				null,
				WinApi.OPEN_EXISTING,
				0,
				IntPtr.Zero);
			if (inHandle.ToInt32() == WinApi.INVALID_HANDLE_VALUE)
			{
				throw new IOException("Unable to open CONIN$", Marshal.GetLastWin32Error());
			}
			return inHandle;
		}

		private static IntPtr OpenConOut()
		{
			IntPtr outHandle = WinApi.CreateFile("CONOUT$",
				WinApi.GENERIC_WRITE, 
				WinApi.FILE_SHARE_READ | WinApi.FILE_SHARE_WRITE,
				null,
				WinApi.OPEN_EXISTING,
				0,
				IntPtr.Zero);
			if (outHandle.ToInt32() == WinApi.INVALID_HANDLE_VALUE)
			{
				throw new IOException("Unable to open CONOUT$", Marshal.GetLastWin32Error());
			}
			return outHandle;
		}

		private static ConsoleInputBuffer currentInputBuffer = null;

		/// <summary>
		/// Get the currently active console input buffer
		/// </summary>
		public static ConsoleInputBuffer InputBuffer
		{
			get
			{
				if (currentInputBuffer == null)
				{
					IntPtr handle = WinCon.GetStdHandle(WinCon.STD_INPUT_HANDLE);
					if (WinApi.GetFileType(handle) == WinApi.FILE_TYPE_CHAR)
					{
						currentInputBuffer = new ConsoleInputBuffer(handle);
					}
					else
					{
						// Call CreateFile on CONIN$
						IntPtr inHandle = OpenConIn();
						currentInputBuffer = new ConsoleInputBuffer(inHandle);
						currentInputBuffer.ownsHandle = true;
					}
				}
				return currentInputBuffer;
			}
		}

		private static ConsoleScreenBuffer currentScreenBuffer = null;

		/// <summary>
		/// Gets or sets the currently active console screen buffer.
		/// </summary>
		public static ConsoleScreenBuffer ScreenBuffer
		{
			get
			{
				// @TODO: This works for the single process case.
				// However, if other processes change the active screen buffer,
				// this isn't going to work.  I think we'll need some kind of cooperation.
				// Perhaps everybody always writes to the CONOUT$ buffer?
				if (currentScreenBuffer == null)
				{
					// If the standard output handle is a screen buffer,
					// then use it as the currently active buffer.
					IntPtr handle = WinCon.GetStdHandle(WinCon.STD_OUTPUT_HANDLE);
					if (WinApi.GetFileType(handle) == WinApi.FILE_TYPE_CHAR)
					{
						currentScreenBuffer = new ConsoleScreenBuffer(handle);
					}
					else
					{
						// Otherwise open CONOUT$ as a screen buffer
						IntPtr outHandle = OpenConOut();
						currentScreenBuffer = new ConsoleScreenBuffer(outHandle);
						currentScreenBuffer.ownsHandle = true;
					}
				}
				return currentScreenBuffer;
			}

			set { currentScreenBuffer = value; }
		}

		#region Public Properties

		// @TODO:
		// Error property
		// In property
		// Out property
		// TreatControlCAsInput property
	
		#region Foreground and background colors
		public static ConsoleColor BackgroundColor
		{
			get { return ScreenBuffer.BackgroundColor; }
			set { ScreenBuffer.BackgroundColor = value; }
		}

		public static ConsoleColor ForegroundColor
		{
			get { return ScreenBuffer.ForegroundColor; }
			set { ScreenBuffer.ForegroundColor = value; }
		}
		#endregion

		#region Screen buffer size
		public static int BufferHeight
		{
			get { return ScreenBuffer.Height; }
			set { ScreenBuffer.Height = value; }
		}

		public static int BufferWidth
		{
			get { return ScreenBuffer.Width; }
			set { ScreenBuffer.Width = value; }
		}
		#endregion

		#region Cursor
		public static int CursorLeft
		{
			get { return ScreenBuffer.CursorLeft; }
			set { ScreenBuffer.CursorLeft = value; }
		}

		public static int CursorTop
		{
			get { return ScreenBuffer.CursorTop; }
			set { ScreenBuffer.CursorTop = value; }
		}

		public static int CursorSize
		{
			get { return ScreenBuffer.CursorSize; }
			set { ScreenBuffer.CursorSize = value; }
		}

		public static bool CursorVisible
		{
			get { return ScreenBuffer.CursorVisible; }
			set { ScreenBuffer.CursorVisible = value; }
		}
		#endregion

		#region Keyboard state
		// Have to use GetKeyState because nothing in the Console API
		// will give us the key states unless we get an input event.
		public static bool NumberLock
		{
			get { return ((WinApi.GetKeyState(WinApi.VK_NUMLOCK) & 1) != 0); }
		}

		public static bool CapsLock
		{
			get { return ((WinApi.GetKeyState(WinApi.VK_CAPITAL) & 1) != 0); }
		}

		public static bool KeyAvailable
		{
			get { return InputBuffer.KeyAvailable; }
		}
		#endregion

		#region Largest window
		public static int LargestWindowHeight
		{
			get { return ScreenBuffer.LargestWindowHeight; }
		}

		public static int LargestWindowWidth
		{
			get { return ScreenBuffer.LargestWindowWidth; }
		}
		#endregion

		#region Window size and position

		public static int WindowHeight
		{
			get { return ScreenBuffer.WindowHeight; }
			set { ScreenBuffer.WindowHeight = value; }
		}

		public static int WindowWidth
		{
			get { return ScreenBuffer.WindowWidth; }
			set { ScreenBuffer.WindowWidth = value; }
		}

		public static int WindowTop
		{
			get { return ScreenBuffer.WindowTop; }
			set { ScreenBuffer.WindowTop = value; }
		}

		public static int WindowLeft
		{
			get { return ScreenBuffer.WindowLeft; }
			set { ScreenBuffer.WindowLeft = value; }
		}

		#endregion
		
		#region Encodings
		public static Encoding InputEncoding
		{
			get
			{
				return Encoding.GetEncoding(WinCon.GetConsoleCP());
			}
			set
			{
				if (!WinCon.SetConsoleCP(value.CodePage))
				{
					throw new IOException("Unable to set input encoding", Marshal.GetLastWin32Error());
				}
			}
		}

		public static Encoding OutputEncoding
		{
			get
			{
				return Encoding.GetEncoding(WinCon.GetConsoleOutputCP());
			}
			set
			{
				if (!WinCon.SetConsoleOutputCP(value.CodePage))
				{
					throw new IOException("Unable to set output encoding", Marshal.GetLastWin32Error());
				}
			}
		}
		#endregion

		#region Title
		/// <summary>
		/// Gets or sets the title bar string
		/// </summary>
		public static string Title
		{
			get
			{
				// documentation says that the title won't be longer than 64K
				StringBuilder title = new StringBuilder(65536);
				int length = WinCon.GetConsoleTitle(title, title.Length);
				if (length == 0)
				{
					throw new IOException("Unable to read console title", Marshal.GetLastWin32Error());
				}
				return title.ToString();
			}
			set
			{
				if (!WinCon.SetConsoleTitle(value))
				{
					throw new IOException("Unable to set console title", Marshal.GetLastWin32Error());
				}
			}
		}
		#endregion

		#endregion


		#region Public methods

		public static void Beep()
		{
			WinApi.MessageBeep(-1);
		}

		public static void Beep(int freq, int duration)
		{
			WinApi.Beep(freq, duration);
		}

		public static void Clear()
		{
			ScreenBuffer.Clear();
		}

		/*
			@TODO:
		  	MoveBufferArea
			OpenStandardError
			OpenStandardInput
			OpenStandardOutput
		*/

        public static ConsoleKeyInfo ReadKey()
        {
            return InputBuffer.ReadKey();
        }

		static private string readBuffer = null;
		static private int iBuff = 0;
		public static int Read()
		{
			if (readBuffer == null || iBuff >= readBuffer.Length)
			{
				readBuffer = ReadLine();
				iBuff = 0;
			}
			if (iBuff > readBuffer.Length)
				return -1;
			
			return Convert.ToInt32(readBuffer[iBuff++]);
		}

		// @TODO: ReadLine probably has to change for reading from anything but console screen buffer.
		// For the screen buffer, we can assume line input mode.
		// We can't assume that from a file, can we?
		/*
		 * Actually, the code to check whether or not it's a console input buffer handle
		 * should be here.  If the handle is the console input buffer, then we'll call
		 * InputBuffer.Read.  Otherwise we'll read the FileStream.
		 * Something to note, however, is that the FileStream can change between
		 * read calls because somebody else can change it.  This can get interesting.
		 */
		public static String ReadLine()
		{
			// Magic number 26608 determined by trial and error.
			char[] buff = new char[26608];
			int charsRead = InputBuffer.Read(buff, buff.Length);

			// check for cr/lf at end
			if (charsRead > 1)
			{
				if ((buff[charsRead-2] == '\r') && (buff[charsRead-1] == '\n'))
					charsRead -= 2;
			}
			// Read maximum characters, up to cr/lf (only in Line Input mode)
			return new String(buff, 0, charsRead);
		}

		public static void ResetColor()
		{
			ScreenBuffer.ResetColor();
		}

		public static void SetBufferSize(int width, int height)
		{
			ScreenBuffer.SetBufferSize(width, height);
		}

		public static void SetCursorPosition(int x, int y)
		{
			ScreenBuffer.SetCursorPosition(x, y);
		}

		/*
			@TODO:
			SetError
			SetIn
			SetOut
		*/

		public static void SetWindowPosition(int left, int top)
		{
			ScreenBuffer.SetWindowPosition(left, top);
		}

		public static void SetWindowSize(int width, int height)
		{
			ScreenBuffer.SetWindowSize(width, height);
		}

		#region Write
		public static void Write(Boolean b)
		{
			Write(b.ToString());
		}

		public static void Write(Char c)
		{
			Write(c.ToString());
		}

		public static void Write(Decimal d)
		{
			Write(d.ToString());
		}

		public static void Write(Double d)
		{
			Write(d.ToString());
		}

		public static void Write(Int32 i)
		{
			Write(i.ToString());
		}

		public static void Write(Int64 i)
		{
			Write(i.ToString());
		}

		public static void Write(Object o)
		{
			Write(o.ToString());
		}

		public static void Write(Single s)
		{
			Write(s.ToString());
		}

		public static void Write(String s)
		{
			ScreenBuffer.Write(s);
		}

		public static void Write(UInt32 u)
		{
			Write(u.ToString());
		}

		public static void Write(UInt64 u)
		{
			Write(u.ToString());
		}

		public static void Write(String fmt, Object o)
		{
			Write(String.Format(fmt, o));
		}

		public static void Write(String fmt, Object[] o)
		{
			Write(String.Format(fmt, o));
		}

		public static void Write(Char[] buffer, int index, int count)
		{
			Write(new String(buffer, index, count));
		}

		public static void Write(String fmt, Object o1, Object o2)
		{
			Write(String.Format(fmt, o1, o2));
		}

		public static void Write(String fmt, Object o1, Object o2, Object o3)
		{
			Write(String.Format(fmt, o1, o2, o3));
		}

		public static void Write(String fmt, Object o1, Object o2, Object o3, Object o4)
		{
			Write(String.Format(fmt, o1, o2, o3, o4));
		}

		#endregion

		#region WriteLine
		public static void WriteLine(Boolean b)
		{
			WriteLine(b.ToString());
		}

		public static void WriteLine(Char c)
		{
			WriteLine(c.ToString());
		}

		public static void WriteLine(Decimal d)
		{
			WriteLine(d.ToString());
		}

		public static void WriteLine(Double d)
		{
			WriteLine(d.ToString());
		}

		public static void WriteLine(Int32 i)
		{
			WriteLine(i.ToString());
		}

		public static void WriteLine(Int64 i)
		{
			WriteLine(i.ToString());
		}

		public static void WriteLine(Object o)
		{
			WriteLine(o.ToString());
		}

		public static void WriteLine(Single s)
		{
			WriteLine(s.ToString());
		}

		public static void WriteLine(String s)
		{
			Write(s+"\r\n");
		}

		public static void WriteLine(UInt32 u)
		{
			WriteLine(u.ToString());
		}

		public static void WriteLine(UInt64 u)
		{
			WriteLine(u.ToString());
		}

		public static void WriteLine(String fmt, Object o)
		{
			WriteLine(String.Format(fmt, o));
		}

		public static void WriteLine(String fmt, Object[] o)
		{
			WriteLine(String.Format(fmt, o));
		}

		public static void WriteLine(Char[] buffer, int index, int count)
		{
			WriteLine(new String(buffer, index, count));
		}

		public static void WriteLine(String fmt, Object o1, Object o2)
		{
			WriteLine(String.Format(fmt, o1, o2));
		}

		public static void WriteLine(String fmt, Object o1, Object o2, Object o3)
		{
			WriteLine(String.Format(fmt, o1, o2, o3));
		}

		public static void WriteLine(String fmt, Object o1, Object o2, Object o3, Object o4)
		{
			WriteLine(String.Format(fmt, o1, o2, o3, o4));
		}

		#endregion

		#endregion

	}
}

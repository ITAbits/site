using System.Windows.Input;

namespace Gameloop
{
    public class Game
    {
        public const int Fps = 60;
        public const int ScreenWidth = 50;
        public const int ScreenHeight = 50;

        public bool Over { get; }

        public Game()
        {
            Over = false;
        }

        public void Initialize()
        {
            // Game initialization logic
        }

        internal void Update()
        {
            // Game update logic
        }

        public void Draw(ConsoleCanvas canvas)
        {
            // Game draw logic
        }


    }
}

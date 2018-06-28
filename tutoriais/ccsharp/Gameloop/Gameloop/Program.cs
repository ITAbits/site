using System;

namespace Gameloop
{
    public class Program
    {
        [STAThread]
        private static void Main()
        {
            var canvas = new ConsoleCanvas(GameSettings.ScreenWidth, GameSettings.ScreenHeight);
            var game = new Game();

            game.Initialize();

            while (!game.Over)
            {
                var start = DateTime.Now.Ticks / TimeSpan.TicksPerMillisecond;
                
                // Very simple game loop
                game.Update();
                game.Draw(canvas);
                canvas.Render();

                // Make fps constant
                var deltaTime = start - DateTime.Now.Ticks / TimeSpan.TicksPerMillisecond;
                System.Threading.Thread.Sleep((int)(1000.0f / GameSettings.Fps - deltaTime));
            }
        }
    }
    
}

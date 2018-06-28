using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            int variavel1 = 5;
            int variavel2 = 10;
            Console.WriteLine(variavel1);
            Console.WriteLine(5);
            Console.WriteLine("A variável 1 vale " + variavel1);
            
            // Ainda é possível aplicar formatação.
            Console.WriteLine("{1:g} {0:n}", variavel1, variavel2);
            Console.Read();
        }
    }
}

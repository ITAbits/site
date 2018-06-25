## Indice
* [Tipos](#tipos)
* [Entrada e Saida](#entrada-e-saida)
* [Controle de Fluxo](#controle-de-fluxo)
* [Variaveis Indexadas](#variaveis-indexadas)
* [List](#list)
* [Funcoes](#funcoes)
* [Struct](#struct)

## Tipos

C# é uma linguagem fortemente tipada. Isso significa que qualquer variavel declarada terá um tipo e não será possivel alterá-lo. Os tipos primitivos de C tem todos equivalentes em C#. Em C# as precisões são bem-definidas, diferente de C, em que estas dependem do compilador. Seguem os tipos já conhecidos:

Tipo | Espaco em Memória | Como declarar em código
-----|-------------------|------------------------
_char_ | 16 bits (Unicode) | _char_ v = 'a';
_int_  | 32 bits           | _int_ v = 1;
_long_ | 64 bits           | _long_ v = 1L;
_float_| 32 bits           | _float_ v = 1.0f
_double_| 64 bits          | _double_ v = 1.0

Note que o char do C# tem 16 bits e usa o padrão Unicode. Nesse padrão, os 256 primeiros caracteres continuam sendo os mesmos do ASCII

Note tambem que a representaçao de numeros reais padrão do C# é o double, sendo necessário colocar o 'f' no final quando se deseja usar variaveis do tipo float. (Lembre-se disso quando estiver usando o Unity, cujo padrão é float).

Todas as operações conhecidas para esses tipos continuam as mesmas.

Além desses, temos novos tipos (que são emprestados do C++):

_bool_: é um tipo booleano, que pode assumir os valores lógicos de _true_ e _false_, em vez de usar 0 e 1.

_string_: que representa uma cadeia infinita de caracteres, com memória alocada dinamicamente). Esse tipo facilita muito por que deixa de lado o uso de um array de _char_'s para strings. Trabalhar com _string_ de C# é muito intuitivo: para concatenar, basta somá-las, com +.  No código _string_ são variaveis declaradas entre "".

## Entrada e Saida

Como foi visto no HelloWorld.cs existe o comando _Console.Write()_ que escreve uma string no console. Existe tambem (que pode ser visto como sugestão ao se escrever o comando anterior) o _Console.WriteLine()_, esse basicamente adiciona um "\n" no final.

Diferentemente do _printf()_, não é necessário dizer qual o tipo de variável quando se quer concatenar na string. Basta colocá-la imediatamente ou somá-la com outra string. Exemplo:

```cs
int variavel1 = 5;
int variavel2 = 10;
Console.WriteLine(variavel1);
Console.WriteLine(5);
Console.WriteLine("A variável 1 vale " + variavel1);
// Ainda é possível aplicar formatação.
Console.WriteLine("{1:g} {0:n}", variavel1, variavel2);
Console.Read();
```

Saída:
![](img/saidawrite.png)

Assim, o uso do Console.Write() é mais confortável. Para os casos em que se deseja aplicar a formatação, pode-se usar o estilo de formatação do C#, como feito no ultimo _Console.WriteLine_.

Quanto ao input, existem algumas opções:

```cs
// Análogo a um scanf("%c", &caractere).
// Percebe-se que o Console.Read() precisa ser 'castado' (transformado) em char.
// Para castar uma variável para outro tipo, basta colocar o tipo novo entre parentesis antes da variável.
char c = (char) Console.Read();

// Análogo a um gets(), isto é, lê uma linha até encontrar um "/n"
string str = Console.ReadLine();
```

Para ler algo que não seja um _char_ ou uma _string_ você deve converter deles para outros tipos usando os métodos _Parse_. Exemplos:

```cs
float f = float.Parse(Console.ReadLine());
int i = int.Parse(Console.ReadLine());
// Para ir de qualquer tipo para string basta fazer:
string si = i.ToString();
string sf = f.ToString();
```

## Controle de Fluxo

Os comandos _if_, _else_, _switch_, _while_ e _for_ funcionam da mesma forma que em C.

## Variaveis Indexadas

A forma de se declarar variaveis indexadas é um pouco diferente:

```cs
// Isso é o equivalente em cs de
// int array[100];
int[] array = new int[100];
```
Em C#, arrays são alocados dinamicamente (esse _new_ é análogo ao de C++). _int[] array_ é apenas a declaração de uma variável do tipo array de inteiros. _new int[100]_ é o que cria o array na memória (assim como o malloc). Esse array é análogo a um ponteiro, mas é chamado de referencia, pois a principio C# não trabalha com ponteiros.

Ponteiros são uma fonte muito comum de bugs, por isso linguagens mais modernas abandonaram tal conceito pelo de referência. Referências são no fundo ponteiros, mas que não permitem acesso direto à memoria, a diferença entre o que é o ponteiro e a variável em si fica escondida do programador. Com o uso, a diferença ficará mais clara. O C# se encarrega de buscar o que for preciso no lugar certo da memória.

A forma de acessar posições de um _array_ continua a mesma. Para declarar um _array_ com valores no meio do código, basta fazer:

```cs
string[] a = new string[] {"bla", "lalala", "vvvvvv"};
```

Para iterar sobre arrays, C# tem um tipo especial de _for_ , o _foreach_. O _foreach_ vai se mostrar cada vez mais util com o uso de C#, pois serve para iterar sobre todo tipo de coleção nessa linguagem. Coleções são tipos que guardam conjuntos de variáveis, sendo o _array_ uma delas. A sintaxe do _foreach_ é:

```cs
foreach(int inteiro in arrayInteiros) // Itera sobre cada elemento arrayInteiros[i]
{
  /* Aqui dentro a váriavel de iteração assume o nome que foi dado (inteiro) */
  Console.Write(inteiro);
}
```

A declaração de matrizes pode ser feita de duas formas:

```cs
// Variável indexada multidimensional

// Inicialização
int[,] matriz = new int[3, 3];

// Acesso a elemento:
matriz[2, 2] = 0;
```

```cs
// Array de arrays

// Inicialização
int[][] matriz = new int[3][];
for(int i = 0; i matrix.Length; i++) 
{
  matriz[i] = new int[3];
}

// Acesso a elemento:
matriz[2][2] = 0;
```

As variáveis indexadas multidimensionais também podem ser iteradas com _foreach_.

## List

Muitas vezes existem arrays num programa que se beneficiariam muito de não ter um tamanho constante. Por exemplo, em um jogo, poderia haver uma lista de inimigos, que aparecem e desaparecem. Normalmente a solução é fazer um array com um tamanho suficientemente grande para não estourar, que muitas vezes é um desperdício de memória. Para resolver isso, C# tem o tipo _List_.

Para que o compilador saiba do que se trata a palavra _List_ é necessário adicionar, logo no começo do código a seguinte linha:

```cs
using System.Collections.Generic;
```

É muito provavel que a propria IDE dê como sugestão a adição dessa linha quando se escrever a palavra List. _using_ é como um link para onde está a implementação de alguma biblioteca ou _framework_.

Para criar e usar uma list, segue um exemplo:

```cs
// Declara e inicializa uma list de inteiros:
List<int> inteiros = new List<int>();

// Adicionar elementos:
inteiros.Add(1);
inteiros.Add(2);
inteiros.Add(3);

// Remover elementos:
inteiros.Remove(1); // Remove o primeiro 1 que encontrar
inteiros.RemoveAt(0); // Remove o elemento na posição 0
```

Por enquanto é preciso "aceitar" que a lista de um tipo qualquer é definida com List\<Tipo\>. O significado dessa notação é bastante complexo, e provavelmente só será tratado em algum tutorial futuro de C# avançado, no entanto o seu uso é bem simples, e relativamente intuitivo.

## Funcoes

Sintaxe semelhante à de C:

```cs
static void Main(string[] args)
{
  PrintaCoisa(2.0f);
  PrintaCoisa(10);
  PrintaCoisa();
}

static void PrintaCoisa(float f)
{
  Console.WriteLine("float: " + f);
}

static void PrintaCoisa(int i)
{
  Console.WriteLine("int: " + i);
}

static void PrintaCoisa()
{
  Console.WriteLine("nada");
}
```

Para usar os métodos de C# de forma análoga ao que é conhecido de C, é preciso colocar a palavra _static_ antes da declaração de cada método. Isso é mais uma das coisas que fará mais sentido após o entendimento de POO.

Em C# é possível tambem declarar vários métodos com o mesmo nome, desde que a lista de argumentos( em termos da ordem tos tipos de argumentos) sejam diferentes. Isso se chama _overload_ de métodos. O compilador descobre qual método deve chamar a partir dos parametros passados.

## Struct

C# dá suporte a _structs_, que são muito semelhantes às de C. Exemplo de uso:

```cs
struct Coordenadas
{
  public int X; // public para ser visível externamente
  public int Y;
}

static void Main()
{
  Coordenadas c;
  c.X = 2;
  c.Y = 3;
}
```

As variáveis que precisam ser acessadas fora da struct tem que ser marcadas com _public_. Dado que o conceito de classe (_class_) amplia o de _struct_, você na prática usará mais class, deixando para _struct_ casos de estruturas bem simples, como coordenadas bidimensionais.

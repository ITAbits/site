
Website ITABits
==========

Esse é o repositório relativo ao website da ITABits, onde busca-se desenvolver uma boa imagem do grupo, divulgando os membros, os projetos desenvolvidos pela equipe, eventos participados e materiais de estudo produzidos por nós mesmos.

O frontend do site foi construído em torno de ReactJS, utilizando de suporte a biblioteca de design [Semantic UI](https://semantic-ui.com/) ou, mais precisamente, a sua interface com React, [Semantic UI React](https://react.semantic-ui.com/introduction).

A administração de rotas por componentes React foi feita por meio da biblioteca [React-Router](https://reacttraining.com/react-router/), retirando do backend a responsabilidade de conexão entre links da camada de View e as URLs de requisição do servidor. Desse modo, é possível ter o site lançado sem backend, se necessário, pelo sistema GitHub-Pages.

O backend, por sua vez, foi feito em Python utilizando-se a framework [Flask](http://flask.pocoo.org/), a qual serve ao frontend estático buildado previamente antes do deploy. O backend foi projetado como uma RESTful API e tem como endpoints o cadastro de membros e a query de membros da ITA Bits, por exemplo. O salvamento de imagens é feito em um bucket Amazon S3 para não pesar o banco de dados hospedado no Heroku.

O projeto está no ar e pode ser acessado em www.itabits.com.br

Backend - Flask
==========
O backend foi feito em Flask e foi construído como uma RESTful API, a qual recebe e envia arquivos em formato json (JavaScript Object Notation). Um dos endpoints disponíveis na API é
> itabits.com.br/getmembers

em que se pode consultar os membros da iniciativa. A comunicação com o frontend é feita via requisições Ajax em ReactJS e tem a seguinte forma
```
     fetch('/getmembers')
       .then(res => res.json())
       .then(
         (result) => {
         ...
         },
         (error) => {
         ...
         }
       )
```

Em seguida, o response do request acima é injetado em cards (componentes customizados de React) e podem ser visualizados em
> itabits.com.br/members

Para armazenamento de dados, como os dados dos membros, optou-se por PostgreSQL, armazenado em servidores [Heroku](https://www.heroku.com) e a interação com o banco de dados foi feita por meio da biblioteca [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/), a qual fornece um mapeamento objeto-relacional SQL e torna queries SQL mais simples e práticas. Para o armazenamento de imagens, optou-se por salvá-las em Buckets da [Amazon S3](https://docs.aws.amazon.com/pt_br/AmazonS3/latest/dev/Welcome.html), já que salvar imagens em banco de dados não é uma boa prática. Para a interação com os buckets da Amazon, utilizou-se a biblioteca  [boto3](https://boto3.readthedocs.io/).  

Além disso, para se fazer o processo de deploy do site (colocar no ar), faz-se a build do frontend por meio de
```
$ npm run build
```
Pode-se dizer que o processo acima trata-se da compilação do código ReactJS em HTML, CSS e JavaScript nativo, de forma a servir estaticamente o backend em Flask fornecendo todo o frontend pronto, com todas as rotas e funcionalidades.

Por fim, o frontend serve estaticamente o backend em Flask, de forma que o Flask renderiza o frontend caso a rota buscada exista no código em ReactJS e acessa a rota do próprio backend em Flask caso ela seja um endpoint da RESTful API.


Contribuindo
==========

Atualmente apenas suportamos o *npm*(Node Package Manager) como serviço gerenciador de pacotes e dependências. O site foi desenvolvido com a versão **6.0.1** do *npm* e a versão **10.1.0** de *Node*. Para iniciar o desenvolvimento basta clonar esse repositório e fazer o download dos pacotes de dependência com

```sh
git clone https://github.com/ITAbits/site.git
cd site
npm install
```

Deploy
=========
Os deploys do frontend em Github-Pages devem acontecer exclusivamente da master. Basta utilizar o comando

```sh
npm run deploy
```

Dependendo de suas configurações de permissão e ownership você precisará executar como _root_ por meio de

```sh
sudo npm run deploy
```

E nesse caso provavelmente serão necessárias configurações padrão globais do git para executar o deploy.
Configure essas condições utilizando:

```sh
sudo git config --global user.email "your@email.com"
sudo git config --global user.name "YourName"
```

Recomendamos que ponha um email falso qualquer por questões de segurança e privacidade, uma vez que essas informaçãoes são públicas mas pode ser útil um nome não aleatório em que outros desenvolvedores possam identificá-lo se conhecê-lo no _name_.

Principais Dependencias
============

* [React](https://reactjs.org/)

* [Semantic UI React](https://react.semantic-ui.com/introduction)

* [React-Router](https://reacttraining.com/react-router/)

* [Flask](http://flask.pocoo.org/)

* [Webpack](https://webpack.js.org/)

Disclaimer
============
###### Parte desse projeto foi desenvolvido como projeto final da disciplina de CES22 ministrada pelo Professor [ Edgar Toshiro Yano](http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4798593T1&idiomaExibicao=2)
###### *CES22 é a disciplina do ITA de programação orientada a objetos em Python :snake: :snake:*

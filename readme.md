
Website ITABits
==========

Esse é o repositório relativo ao website da ITABits, onde desenvolvemos uma boa imagem do grupo, divulgando os membros, os projetos desenvolvidos pela equipe, eventos participados e materiais de estudo produzidos por nós mesmos.

O frontend do site foi contruído em torno de ReactJS, utilizando de suporte a biblioteca de design [Semantic UI](https://semantic-ui.com/) ou mais precisamente a sua interface com React, [Semantic UI React](https://react.semantic-ui.com/introduction).

A administração de rotas por componentes React foi feita usando a biblioteca [React-Router](https://reacttraining.com/react-router/) retirando do backend a responsabilidade de conexão entre links da camada de View e as URLs de requisição do servidor. Desse modo, é possível ter o site lançado sem backend se necessário, pelo sistema de GitHub-Pages.

Possuímos um banco de dados de membros e projetos em PostgreSQL e para gerenciá-lo e também ter uma alternativa de administração de rotas foi feito um backend com a framework [Flask](http://flask.pocoo.org/) para Python. Dessa maneira, também podemos subir o site em serviços de hospedagem mantendo o front bem desacoplado com o back.

O domínio alugado do nosso site é www.itabits.com.br

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
Os deploys devem acontecer exclusivamente da master. Basta utilizar o comando

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

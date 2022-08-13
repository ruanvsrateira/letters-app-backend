<h1>backend stundents manager</h1>
<br>

<div
    align="center"
>
    <img 
            height="70%"
        width="70%"
    src="https://nodejs.org/static/images/logo.svg"/>
</div>


<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d1.png" />  Sobre o projeto</h2>
<p>Consiste no backend de uma aplicação mobile responsável por armazenar e manipular tablaturas e cifras músicais.</p>

<br />

<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png" /> Técnologias usadas no projeto</h2>

<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://expressjs.com/">Express</a></li>
<li><a href="https://www.prisma.io/">Prisma</a></li>
<li><a href="https://www.docker.com/">Docker</a></li>
<li><a href="https://www.postgresql.org/">PostegreSQL</a></li>
<li><a href="https://www.typescriptlang.org/">Typescript</a></li>

<br>

<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/2139.png" />  Pré-requisitos: </h2>
<li><a href="https://git-scm.com/">Git</a></li>
<li><a href="https://www.docker.com/products/docker-desktop/">Docker Desktop</a></li>
<li><a href="https://nodejs.org/en/">Node.js</a></li>


<br>

```bash
    # clonar repositório
    git clone https://github.com/ruanvsrateira/letters-app-backend.git

    # Entrar no repositório
    cd letters-app-backend

    # Instalação de dependencias
    npm i 
    # ou
    yarn i 

    # Iniciar Container com banco de dados
    docker-compose up -d
    
    # Criar estrutura do banco de dados
    npm run migration
    # ou
    yarn run migration

    # Rodar api
    npm run dev
    # ou
    yarn run dev
```
<hr>

Desenvolvido por <a href="https://www.linkedin.com/in/ruanvsrateira" target="__blank">Ruan Victor</a>

# ProjetoSemana14


Turma Online 11 - Todas em Tech | Back-end | 2021 | Semana 14: Projeto Guiado - CRUD com BD


Sobre o Projeto
O FavMovies é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar.

Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criador.

📁 Arquitetura
 📁 Projeto Guiado
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 tituloRoutes.js 
   |         |- 📄 estudioRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js



Requisitos
 "/titulos/marvel" Deverá retornar todos os títulos com o estudio Marvel

 "/titulos/ghibli" Deverá retornar todos os títulos com o estudio Ghibli

 "/titulos/pixar" Deverá retornar todos os títulos com o estudio Pixar

 "/estudios" Deverá retornar todos os estudios cadastrados

 "/titulos" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

 "/estudios" Deverá criar um estudio

 "/titulos" Deverá criar um título

 "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável

 "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

 "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado

 "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado

Regras de negócio
 Não deverá ser possível criar estudio com o mesmo nome
 Não deverá ser possível criar título com o mesmo nome
 Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema


Dados para Collection Estudios
id: autogerado e obrigatório
nome: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório
API deve retornar seguinte JSON:
[
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad38c8c299c285d2685e7",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Pixar",
    "__v": 0
  }
]


Dados para Collection Titulos
id: autogerado e obrigatório
nome: texto e obrigatório
genero: texto e obrigatório
descricao: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório
estudio: referencia do estudio cadastrado previamente obrigatório
API deve retornar seguinte JSON:
[
  {
    "criadoEm": "2021-06-05T01:27:40.892Z",
    "_id": "60bad3568c299c286d2685e6",
    "nome": "Amor Amor",
    "genero": "drama",
    "descricao": "exemplo": {
      "criadoEm": "2021-06-05T01:27:40.886Z",
      "_id": "60bad35d8c299c285d2685e5",
      "nome": "Ghibli",
    }
  }
]


Nayara Almeida
instagram - https://www.instagram.com/nayara__b__almeida__/
linkedin - https://www.linkedin.com/in/nayaraba/
GitHub - https://github.com/NayaraWakewski

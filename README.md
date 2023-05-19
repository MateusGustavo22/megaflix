## Megaflix
Este é um projeto de front-end de um serviço de streaming de filmes e séries chamado Megaflix. O aplicativo apresenta seções de categorias, como ação, ficção científica e outros gêneros populares, com uma navegação suave usando um scroll horizontal. Ele também possui um sistema de busca para pesquisar filmes e séries, utilizando a API do [TMDB](https://developer.themoviedb.org/docs).

Confira o projeto clicando [aqui](https://megaflix-gamma.vercel.app/).

## Capturas de tela do projeto

![Screenshot]()
![Screenshot]()
![Screenshot]()
![Screenshot]()

## Executando o projeto em sua máquina

Clone o projeto
```bash
git clone https://github.com/MateusGustavo22/megaflix.git
```
Configure sua chave de API
1. Acesse o site do TMDB clicando [aqui](https://developer.themoviedb.org/docs) e criei uma chave.
2. Cole sua chave no arquivo `.env` no espaço reservado:
```javascript
NEXT_PUBLIC_API_KEY= <<API KEY>>
```

Instale as depedências
```bash
# Com yarn
yarn install
# Ou com npm
npm install
```
Execulte o projeto
```bash
yarn dev
# Ou
npm run dev
```
Depois acesse [https://localhost:3000](https://localhost:3000)
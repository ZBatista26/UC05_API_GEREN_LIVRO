# UC05_API_GEREN_LIVRO
# Gerenciamento de Livros

## Descrição

Este projeto é uma API para gerenciamento de livros, desenvolvida como atividade da UC05 no dia 07/02/2025. A API permite listar e adicionar livros em um banco de dados.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Dotenv

## Instalação

Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:

   ```sh
   npm install express dotenv
   ```

3. Crie um arquivo `.env` na raiz do projeto e defina suas variáveis de ambiente, se necessário.

4. Para iniciar o servidor, execute:

   ```sh
   node server.js
   ```

## Endpoints

A API possui os seguintes endpoints:

### Listar Livros

```http
GET /livros
```

Retorna a lista de livros cadastrados.

### Adicionar um Livro

```http
POST /livros
```

**Parâmetros (JSON):**

```json
{
  "id":1,
  "titulo": "Nome do Livro",
  "autor": "Autor do Livro",
  "ano": 2025,
  "genero":"",
  "sinopse":""
  
}
```

Adiciona um novo livro ao banco de dados.

## Contribuição

Sinta-se à vontade para contribuir com melhorias e novas funcionalidades!

## Licença

Este projeto está sob a licença MIT.


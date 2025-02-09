// Importando o Expressd
const express = require('express');
// Inmportar a biblioteca dotenv
const dotenv = require('dotenv');
//criando as variaveis de ambiente
dotenv.config();
// criando um objeto chamado aplicativo ou app
const aplicativo = express();
//Criando uma porta
const port = process.env.PORTA;
// Middlewarse
aplicativo.use(express.json())

const banco_dados = [];
// Rota de (listar) os livros
aplicativo.get('/livros', (req, res) => {
    res.json(banco_dados)
})
// Rota de (postagem) dos livros 
 // passando na requisição o id, titulo, autor, publicacao, genero, sinopse
aplicativo.post('/livros', (req, res) => {
    const{id, titulo, autor, publicacao, genero, sinopse} = req.body;

     //  Adicionando a variavel novoProduto os dados que enviei no body(corpo)
    const novoLivro = {id, titulo, autor, publicacao, genero, sinopse};

    // Adicionando ao array banco_dados
    banco_dados.push(novoLivro)

    // Adicionando uma resposta de sucesso se o recurso ou o produto for criado 
    res.status(201).json({mensage: "Livro adicionado com sucesso!"})
  })

aplicativo.listen(port, () => {
  console.log(`Servidor rodando em hum http://localhost:${port}`)
})


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
    try {
      if(banco_dados.length == 0){
        return res.status(200).json({mensage: "Não há livros cadastrados!"})
      }
      res.status(200).json(banco_dados)
    } catch (error) {
      res.status(500).json({mensage: "Erro ao listar os livros!"})
    }
})

// Rota de (postagem) dos livros 
 // passando na requisição o id, titulo, autor, publicacao, genero, sinopse
aplicativo.post('/livros', (req, res) => {
  try {
    const{id, titulo, autor, publicacao, genero, sinopse} = req.body;

    //  Adicionando a variavel novoProduto os dados que enviei no body(corpo)
    const novoLivro = {id, titulo, autor, publicacao, genero, sinopse};

    // Adicionando ao array banco_dados
    banco_dados.push(novoLivro);

    // Adicionando uma resposta de sucesso se o recurso ou o produto for criado 
    res.status(201).json({mensage: "Livro adicionado com sucesso!"})

  } catch (error) {
    res.status(500).json({mensage: "Erro ao cadastrar os livros!"})
  }
  })
  // Rota para editar o produto

  aplicativo.put('/:id', (req, res) => {
    try {
      const id = req.params;

      const livro = livros.find(livros => livros.id === id)
      if(!livro){
        return res.status(404).json({msg: "Produto não encontrado"})
      }
      const {novoTitulo, novoAutor, novoPublicacao, NovoGenero, novoSinopse} = req.body;
      if(livro){
        livro.titulo = novoTitulo;
        livro.autor = novoAutor;
        livro.publicacao = novoPublicacao;
        livro.genero = NovoGenero;
        livro.sinopse = novoSinopse;
      }
      res.status(200).json(livro)
    } catch (error) {
      res.status(500).json({mensage: "Erro ao atualizar os livros!"})
    }
  })

aplicativo.listen(port, () => {
  console.log(`Servidor rodando em hum http://localhost:${port}`)
})


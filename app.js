import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';

//Colocar a variavel PORT dentro de uma variavel de ambiente
const app = express();

const livros = [{
  'id': "1",
  'titulo': "Senhor dos Aneis",
  'editora': 'Classicos'
}];

app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log("Servidor Escutando...");
});

app.get('/livros', (request, response) => {
  response.status(200).send(livros);
});

app.get('/livros:id', (request, response) => {

  response.status(200).send(livros[parseInt(request.params.id)]);
});

app.post('/livros', (request, response) => {
  livros.unshift(request.body)
  response.status(201).send("Dados adicionados com sucesso!")
})
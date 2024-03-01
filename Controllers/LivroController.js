/* eslint-disable no-unused-vars */
import livro from "./Models/Livro.js";

class Controller {
    
  static async mostarLivros(request, response) {

    const listaLivros = await livro.find({});

    response.status(200).json(listaLivros)
        
  }

  static async mostrarUMLivro(request, response) {

    const id = request.params.id;
    
    const livroPesquisado = await livro.findByID({id});

    response.status(200).json(livroPesquisado)
  }

  static async registarLivro(request, response) {

    const livroCadastro = request.body;
    const livroCadastrado = await livro.create(livroCadastro);

    response.status(200).send("Livro Cadastrado com sucesso")
  }

  static async atualizarLivro(request, response){

    const id = request.params.id;
    const livroAtualizado = await livro.findByIDAndUpdate(id, request.body);
    response.status(200).json(request.body)
  }

  static async deletarLivro(request, response){
    
    const livroRemovido = await livro.findByIDAndDelete(request.params.id);
    response.status(200).send("Livro removido com sucesso!")
  }
}



export default Controller
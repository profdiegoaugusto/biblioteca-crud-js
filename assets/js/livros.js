import { LivrosService } from "../../services/livro-service.js";

const livroService = new LivrosService();

async function gerenciarLivros() {
  /*  
  // Obter todos os livros
  const livros = await livroService.getLivros();
  console.log("Livros:", livros);

  const livro = await livroService.getLivro(2);
  console.log(livro);
   */

  /*
  // Criar um novo livro
  const novoLivro = {
    titulo: "HTML and CSS: Design and Build Websites",
    autor: "Jon Duckett",
    ano: 2011,
  };

  const livroCriado = await livroService.criarLivro(novoLivro);
  console.log("Livro Criado:", livroCriado);
  */
  

  /*
  // Atualizar um livro
  const livroAtualizado = await livroService.atualizarLivro(livroCriado.id, {
    titulo: "HTML and CSS: Design and Build Websites",
    autor: "Jon Duckett",
    ano: 2012,
  });
  console.log("Livro Atualizado:", livroAtualizado);
  */

  /*
  // Deletar um livro
  const livroExcluido = await livroService.excluirLivro(livroCriado.id);
  console.log("Livro Deletado:", livroExcluido);
  */
}

window.addEventListener("load", gerenciarLivros);

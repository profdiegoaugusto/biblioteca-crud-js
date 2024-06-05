export class LivrosService {

  constructor() {
    this.urlBase = "http://localhost:3000/livros";
  }

  async getLivros() {
    const resposta = await fetch(this.urlBase);
    return resposta.json();
  }

  async getLivro(id) {
    const resposta = await fetch(`${this.urlBase}/${id}`);
    return resposta.json();
  }

  async criarLivro(livro) {
    const resposta = await fetch(this.urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livro),
    });
    return resposta.json();
  }

  async atualizarLivro(id, livro) {
    const resposta = await fetch(`${this.urlBase}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livro),
    });
    return resposta.json();
  }

  async excluirLivro(id) {
    const resposta = await fetch(`${this.urlBase}/${id}`, {
      method: "DELETE",
    });
    return resposta.json();
  }
}

export class EmprestimoService {
  
    constructor() {
      this.urlBase = "http://localhost:3000/emprestimos";
    }
  
    async getEmprestimos() {
      const resposta = await fetch(this.urlBase);
      return resposta.json();
    }
  
    async getEmprestimo(id) {
      const resposta = await fetch(`${this.urlBase}/${id}`);
      return resposta.json();
    }
  
    async criarEmprestimo(emprestimo) {
      const resposta = await fetch(this.urlBase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emprestimo)
      });
      return resposta.json();
    }
  
    async atualizarEmprestimo(id, emprestimo) {
      const resposta = await fetch(`${this.urlBase}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emprestimo)
      });
      return resposta.json();
    }
  
    async excluirEmprestimo(id) {
      const resposta = await fetch(`${this.urlBase}/${id}`, {
        method: 'DELETE'
      });
      return resposta.json();
    }
  }
  
export class UsuarioService {
  
    constructor() {
      this.urlBase = "http://localhost:3000/usuarios";
    }
  
    async getUsuarios() {
      const resposta = await fetch(this.urlBase);
      return resposta.json();
    }
  
    async getUsuario(id) {
      const resposta = await fetch(`${this.urlBase}/${id}`);
      return resposta.json();
    }
  
    async criarUsuario(usuario) {
      const resposta = await fetch(this.urlBase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      return resposta.json();
    }
  
    async atualizarUsuario(id, usuario) {
      const resposta = await fetch(`${this.urlBase}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      return resposta.json();
    }
  
    async excluirUsuario(id) {
      const resposta = await fetch(`${this.urlBase}/${id}`, {
        method: 'DELETE'
      });
      return resposta.json();
    }
  }
  
export class Cliente {
    //nome; inicializamos as varíaveis direto no construtor.
    //_cpf;

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
    }

    autenticar(senha) {
        return senha == this._senha;
    }
    cadastrarSenha(senha) {
        return this._senha = senha;
    }
}

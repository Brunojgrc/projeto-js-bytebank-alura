export class Funcionario {
    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this._salrio = salario;

        this._bonificacao = 1;
        this.senha;
    }

    autenticar(senha) {
        return senha == this._senha;
    }

    cadastrarSenha(senha) {
        return this._senha = senha;

    }
}

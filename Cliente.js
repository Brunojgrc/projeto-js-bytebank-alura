export class Cliente {
    //nome; inicializamos as varíaveis direto no construtor.
    //_cpf;

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }

    get cpf() {
        return this._cpf;
    }

}
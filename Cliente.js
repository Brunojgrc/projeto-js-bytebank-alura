export class Cliente { // class é como se fosse o molde...
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

}
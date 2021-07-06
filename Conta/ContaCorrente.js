import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(cliente, agencia, 0)
        ContaCorrente.numeroDeContas += 1;
    }


    /*Como esse sacar tem uma taxa 
    diferente da minha taxa da conta normal, ele sobrescreve e ignora o sacar que existe na Conta*/
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa)
    }
}

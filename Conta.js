export class Conta {

    constructor(cliente, agencia, saldoInicial) {
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }

        //Privados

    //_cliente; declaração dos atibutos no construtor.
    //_saldo = 0; 
    /*#saldo = 0 variavel privado, mas ainda não foi homologado. 
    Então a comunidade JS utiliza _ para notificar que é privado, apenas como informação.*/




    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this.saldo;
    }


    sacar(valor) {
        let taxa = 1;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor; /* o retorno de um método (return) pode ter duas funções: 
            parar a execução antecipadamente ao nos depararmos com uma condição indesejada, 
            algo que chamamos de early return; ou realmente retornar um valor para que 
            o sistema continue trabalhando com ele de alguma forma.*/
        }
    }
    depositar(valor) {
        if (valor <= 0) { /* utilizou-se a técnica early return para testar o que não se quer na operação, 
                        e após isso aplicas-se o que quer.*/
            return;
        }
        this._saldo += valor;
        console.log("Valor Depositado: ", valor)
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
/*Classe abstrata: Ela só funciona para ser herdada, uma classe abstrata nunca pode ser 
construída diretamente, nunca podemos dar um new nela, nunca vai ter uma instância dessa 
própria classe, mas ela pode ser herdada, assim como temos nossa ContaCorrente que herda daquela classe abstrata chamada Conta.*/
export class Conta {

    constructor(cliente, agencia, saldoInicial) {
        if (this.constructor == Conta) {
            throw new Erro("Não poderá instanciar um objeto do tipo Conta, pois essa é uma Classe Abstrata!")
        }

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

    //Método abstrato
    sacar(valor) {
        throw new Erro("Deverá ser criado o método em todo tipo de conta específica, pois o método sacar da conta é abstrato")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado; /* o retorno de um método (return) pode ter duas funções: 
            parar a execução antecipadamente ao nos depararmos com uma condição indesejada, 
            algo que chamamos de early return; ou realmente retornar um valor para que 
            o sistema continue trabalhando com ele de alguma forma.*/
        }
        return 0;

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
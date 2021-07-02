export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0; /*#saldo = 0 variavel privado, mas ainda não foi homologado. 
                Então a comunidade JS utiliza _ para notificar que é privado, apenas como informação.*/
    sacar(valor){
        if(this._saldo >= valor){ 
            this._saldo -= valor;
            return valor; /* o retorno de um método (return) pode ter duas funções: 
            parar a execução antecipadamente ao nos depararmos com uma condição indesejada, 
            algo que chamamos de early return; ou realmente retornar um valor para que 
            o sistema continue trabalhando com ele de alguma forma.*/
        }
    }
    depositar(valor){
        if(valor<=0){ /* utilizou-se a técnica early return para testar o que não se quer na operação, 
                        e após isso aplicas-se o que quer.*/
            return;
        }
        this._saldo +=valor;
        console.log("Valor Depositado: ", valor) 
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
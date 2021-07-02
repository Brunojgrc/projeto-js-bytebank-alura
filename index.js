import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); // instanciando um objeto...
cliente1.nome = "Bruno";
cliente1.cpf = 88822233309;

const cliente2 = new Cliente();
cliente2.nome = "Georgea";
cliente2.cpf = 11122233309;


const contaCorrenteBruno = new ContaCorrente();
contaCorrenteB.agencia = 1001;
contaCorrenteB.cliente = cliente1;
contaCorrenteB.depositar(1000);

const contaCorrenteG = new ContaCorrente();
contaCorrenteG.agencia = 1002;
contaCorrenteG.cliente = cliente2;
contaCorrenteB.transferir(300, contaCorrenteGeorgea);

//Sacar:
//const valorSacado = contaCorrenteBruno.sacar();
//console.log("valor Sacado: ",valorSacado);

console.log(contaCorrenteB);
console.log(contaCorrenteG);
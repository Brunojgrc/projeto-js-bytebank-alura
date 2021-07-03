import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Bruno", 88822233309 ); // instanciando um objeto...
const cliente2 = new Cliente("Georgea", 11122233309);

const contaCorrenteB = new ContaCorrente(cliente1, 1001);

contaCorrenteB.depositar(1000);

const contaCorrenteG = new ContaCorrente(cliente2, 1002);

let valor = 200;
contaCorrenteB.transferir(valor, contaCorrenteG);

//Sacar:
//const valorSacado = contaCorrenteBruno.sacar();
//console.log("valor Sacado: ",valorSacado);

console.log(contaCorrenteB);
console.log(contaCorrenteG);
console.log("Total de número de contas abertas: ", ContaCorrente.numeroDeContas);
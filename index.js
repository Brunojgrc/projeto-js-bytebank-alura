import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Bruno", 88822233309); // instanciando um objeto...
const cliente2 = new Cliente("Georgea", 11122233309);

//cliente1:
const contaCorrenteB = new ContaCorrente(cliente1, 1001);
contaCorrenteB.depositar(1000);
contaCorrenteB.sacar(100);
console.log(contaCorrenteB);

const contaPoupanca = new ContaPoupanca(cliente1, 1001, 50);
console.log(contaPoupanca);

const testeSalario = new ContaSalario(cliente1, 1001);
testeSalario.depositar(100);
testeSalario.sacar(10);
console.log(testeSalario);

//cliente2:
//const contaCorrenteG = new ContaCorrente(cliente2, 1002);
//console.log(contaCorrenteG);


//transferir:
//let valor = 200;
//contaCorrenteB.transferir(valor, contaCorrenteG);

//sacar:
//const valorSacado = contaCorrenteBruno.sacar();
//console.log("valor Sacado: ",valorSacado);

//número de Contas abertas:
//console.log("Total de número de contas abertas: ", ContaCorrente.numeroDeContas);
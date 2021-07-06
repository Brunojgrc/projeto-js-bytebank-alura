//import { Gerente } from "./Funcionario/Gerente.js";
//import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";


//const diretor = new Diretor("Bruno", 123456789800, 10000);
//diretor.cadastrarSenha("1234");

const cliente = new Cliente("Victor", 12345678901, 5000);
cliente.cadastrarSenha("1234");
//const estaLogado = SistemaAutenticacao.login(diretor, "1234");
const estaLogado = SistemaAutenticacao.login(cliente, "1234");
console.log(estaLogado);




//onst cliente1 = new Cliente("Bruno", 88822233309); // instanciando um objeto...
//const cliente2 = new Cliente("Georgea", 11122233309);

//cliente1:
//const contaCorrenteB = new ContaCorrente(cliente1, 1001);
//contaCorrenteB.depositar(1000);
//contaCorrenteB.sacar(100);
//console.log(contaCorrenteB);

//const contaPoupanca = new ContaPoupanca(cliente1, 1001, 50);
//console.log(contaPoupanca);

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
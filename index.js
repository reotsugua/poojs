import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('renan', '39913800803');
const contaCorrente1 = new ContaCorrente(cliente1, '6858-6');



console.log(ContaCorrente.numeroDeContas);
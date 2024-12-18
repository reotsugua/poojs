import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    #saldo = 0;
    #cliente;
    
    constructor(cliente, ag) {
        this.agencia = ag;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas ++;
    }

    get saldo() {
        return this.#saldo;
    }

    get cliente(){
        return this.#cliente;
    }
    set cliente(novoValor){
        if (novoValor instanceof Cliente) this.#cliente = novoValor;
    }
    

    sacar(valor){
        if (this.#saldo < valor) return "Saldo insuficiente";

        this.#saldo -= valor;
        return valor; 
    }

    depositar(valor){
        if (valor <= 0) return "Depósito inválido";

        this.#saldo += valor;
        return valor;
    }

    transferir(valor, contaDestino){
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }
}
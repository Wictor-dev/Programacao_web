class Comissao{
    constructor(private _valor: number){}
    get valor(){
        return this._valor;
    }
    comissao() : number{
        if (this.valor<=5000){
            return 0
        }
        else if (this.valor > 5000 && this.valor <= 10000){
            return this.calcular_porcentagem(5000, this.valor)
        }
        else if (this.valor > 10000 && this.valor <= 30000){
            let valor2:number = this.calcular_porcentagem(5000, 10000); 
            return this.calcular_porcentagem(10000, this.valor) + valor2;
        }
        else if (this.valor > 30000){
            let valor4:number = this.valor * 0.2;
            return valor4;
        }
    }
    //10000 - 100000 - 150000
    //2     - 10     - 5
    calcular_porcentagem(minValor: number, valor_dado: number){
        let valor = valor_dado - minValor;
        if(minValor == 5000){
            return valor * 0.05;
        } else if (minValor == 10000){
            return valor * 0.1;
        }
    }


}


class Vendedor{
    salario : number = 1100;
    constructor (private _nome:string, private _vendas: number){}

    get nome(): string{
        return this._nome;
    }

    get vendas(): number{
        return this._vendas;
    }

    comissao(): number{
        let valor_vendas: Comissao = new Comissao(this.vendas);
        return valor_vendas.comissao();
    }

    salarioFinal(): number{
        return this.salario + this.comissao();
    }
}


export {Comissao, Vendedor}
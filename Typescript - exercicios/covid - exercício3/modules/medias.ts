// class MediaDeCasosHoje{
//     media : number = 0;
//     constructor(private _num_casos: number[]){}
    
//     get num_casos():number[]{
//         return this._num_casos;
//     }
    
//     mediaHoje(): any{
//         for (let i : number = 0; i < this.num_casos.length; i++){
//             this.media += this.num_casos[i];
//         }
//         this.media /= this.num_casos.length;
//         return this.media;
//     }

// }

class VariacaoCovid{
    variacao: number = 0;
    constructor(private _media_hoje: number, private _media_14_dias: number){}

    get media_hoje(): number{
        return this._media_hoje;
    }

    get media_14_dias(): number{
        return this._media_14_dias;
    }
    calculaVariacao(): number{
        this.variacao = (this.media_hoje * 100)/this.media_14_dias;
        return this.variacao;
    }

    toString(): string{
        let variacao_porcentagem: number = this.calculaVariacao();
        if (this.media_hoje < this.media_14_dias){
            if((this.media_14_dias- variacao_porcentagem) <= 15){
                return 'Em estabilidade!';
            }
            else{
                return 'Em queda!';
            }

        } else{
            if((variacao_porcentagem - this.media_14_dias) <= 15){
                return 'Em estabilidade!';
            }
            else{
                return 'Em alta!';
            }
        }

    }
}


export {VariacaoCovid}
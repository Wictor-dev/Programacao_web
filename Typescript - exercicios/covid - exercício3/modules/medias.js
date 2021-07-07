"use strict";
// class MediaDeCasosHoje{
//     media : number = 0;
//     constructor(private _num_casos: number[]){}
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariacaoCovid = void 0;
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
var VariacaoCovid = /** @class */ (function () {
    function VariacaoCovid(_media_hoje, _media_14_dias) {
        this._media_hoje = _media_hoje;
        this._media_14_dias = _media_14_dias;
        this.variacao = 0;
    }
    Object.defineProperty(VariacaoCovid.prototype, "media_hoje", {
        get: function () {
            return this._media_hoje;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VariacaoCovid.prototype, "media_14_dias", {
        get: function () {
            return this._media_14_dias;
        },
        enumerable: false,
        configurable: true
    });
    VariacaoCovid.prototype.calculaVariacao = function () {
        this.variacao = (this.media_hoje * 100) / this.media_14_dias;
        return this.variacao;
    };
    VariacaoCovid.prototype.toString = function () {
        var variacao_porcentagem = this.calculaVariacao();
        if (this.media_hoje < this.media_14_dias) {
            if ((this.media_14_dias - variacao_porcentagem) <= 15) {
                return 'Em estabilidade!';
            }
            else {
                return 'Em queda!';
            }
        }
        else {
            if ((variacao_porcentagem - this.media_14_dias) <= 15) {
                return 'Em estabilidade!';
            }
            else {
                return 'Em alta!';
            }
        }
    };
    return VariacaoCovid;
}());
exports.VariacaoCovid = VariacaoCovid;

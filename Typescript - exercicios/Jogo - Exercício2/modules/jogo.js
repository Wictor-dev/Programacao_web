"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var personagens_1 = require("./personagens");
var Jogo = /** @class */ (function () {
    function Jogo() {
        this._personagens = [];
    }
    Jogo.prototype.incluir = function (p) {
        if (this.consultar(p.id) == null) {
            this.personagens.push(p);
        }
        else {
            console.log("N\u00E3o foi poss\u00EDvel adicionar o personagem " + p.nome + ", pois j\u00E1 existe id no vetor!");
        }
    };
    Jogo.prototype.consultar = function (id) {
        for (var i = 0; i < this.personagens.length; i++) {
            if (id == this.personagens[i].id) {
                return this.personagens[i];
            }
        }
        return null;
    };
    Jogo.prototype.atacar = function (id1, id2) {
        if (id1 == id2) {
            console.log('O personagem não pode atacar a si mesmo!');
        }
        else {
            if (this.consultar(id1) instanceof personagens_1.Soldado == true) {
                if (this.consultar(id1) instanceof personagens_1.Cavaleiro == true) {
                    var c = this.consultar(id1);
                    c.atacar(this.consultar(id2));
                }
                else {
                    var s = this.consultar(id1);
                    s.atacar(this.consultar(id2));
                }
            }
            else {
                console.log("N\u00E3o foi poss\u00EDvel efetuar o ataque!");
            }
        }
    };
    Jogo.prototype.avaliarBatalha = function () {
        for (var i = 0; i < this.personagens.length; i++) {
            console.log(this.personagens[i].toString());
        }
    };
    Object.defineProperty(Jogo.prototype, "personagens", {
        get: function () {
            return this._personagens;
        },
        enumerable: false,
        configurable: true
    });
    return Jogo;
}());
exports.Jogo = Jogo;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Montaria = exports.Cavaleiro = exports.Soldado = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(_id, _nome, _energia) {
        this._id = _id;
        this._nome = _nome;
        this._energia = _energia;
    }
    Personagem.prototype.estaVivo = function () {
        if (this.energia == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Personagem.prototype.defenderAtaque = function (valor) {
        if (valor >= this._energia) {
            this._energia = 0;
        }
        else {
            this._energia -= valor;
        }
        return this._energia;
    };
    Personagem.prototype.toString = function () {
        return "ID: " + this.id + ", nome: " + this.nome + ", Energia: " + this.energia + ", Est\u00E1 vivo? " + this.estaVivo();
    };
    Object.defineProperty(Personagem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "energia", {
        get: function () {
            return this._energia;
        },
        set: function (valor) {
            this._energia = valor;
        },
        enumerable: false,
        configurable: true
    });
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = /** @class */ (function (_super) {
    __extends(Soldado, _super);
    function Soldado(_id, _nome, _energia, _forca_ataque) {
        var _this = _super.call(this, _id, _nome, _energia) || this;
        _this._forca_ataque = _forca_ataque;
        _this._forca_ataque = _forca_ataque;
        return _this;
    }
    Soldado.prototype.atacar = function (p) {
        p.defenderAtaque(this.forca_ataque);
    };
    Soldado.prototype.defenderAtaque = function (valor) {
        // super.defenderAtaque(valor);
        if (valor / 2 >= this.energia) {
            this.energia = 0;
        }
        else {
            this.energia -= valor / 2;
        }
        return this.energia;
    };
    Object.defineProperty(Soldado.prototype, "forca_ataque", {
        get: function () {
            return this._forca_ataque;
        },
        set: function (valor) {
            this._forca_ataque = valor;
        },
        enumerable: false,
        configurable: true
    });
    return Soldado;
}(Personagem));
exports.Soldado = Soldado;
var Montaria = /** @class */ (function () {
    function Montaria(_id, _name, _velocidade, _vigor) {
        this._id = _id;
        this._name = _name;
        this._velocidade = _velocidade;
        this._vigor = _vigor;
    }
    Object.defineProperty(Montaria.prototype, "velocidade", {
        get: function () {
            return this._velocidade;
        },
        set: function (valor) {
            this._velocidade = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Montaria.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Montaria.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Montaria.prototype, "vigor", {
        get: function () {
            return this._vigor;
        },
        set: function (valor) {
            this._vigor = valor;
        },
        enumerable: false,
        configurable: true
    });
    Montaria.prototype.estaVivo = function (energia, energiaLimite) {
        if (energia < energiaLimite || this.vigor <= 0) {
            return false;
        }
        return true;
    };
    Montaria.prototype.correr = function () {
        this.velocidade += 0.2 * this.velocidade;
        this.cansar();
    };
    Montaria.prototype.cansar = function () {
        this.vigor -= 0.1 * this.vigor;
    };
    return Montaria;
}());
exports.Montaria = Montaria;
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro(_id, _nome, _energia, _forca_ataque, _montaria) {
        var _this = _super.call(this, _id, _nome, _energia, _forca_ataque) || this;
        _this._montaria = _montaria;
        _this._montaria = _montaria;
        return _this;
    }
    Cavaleiro.prototype.atacar = function (p) {
        p.defenderAtaque(this.ajustarAtaque());
        this.montaria.correr();
    };
    Cavaleiro.prototype.defenderAtaque = function (valor) {
        if (valor / 3 >= this.energia) {
            this.energia = 0;
        }
        else {
            this.energia -= valor / 3;
        }
        return this.energia;
    };
    Object.defineProperty(Cavaleiro.prototype, "montaria", {
        get: function () {
            return this._montaria;
        },
        set: function (montaria) {
            this.montaria = montaria;
        },
        enumerable: false,
        configurable: true
    });
    Cavaleiro.prototype.temMontaria = function () {
        if (this.montaria.estaVivo(this.energia, 100)) {
            return true;
        }
        return false;
    };
    Cavaleiro.prototype.ajustarAtaque = function () {
        if (this.temMontaria) {
            this.forca_ataque += 0.1 * this.montaria.velocidade;
        }
        return this.forca_ataque;
    };
    return Cavaleiro;
}(Soldado));
exports.Cavaleiro = Cavaleiro;

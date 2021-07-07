"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = exports.Comissao = void 0;
var Comissao = /** @class */ (function () {
    function Comissao(_valor) {
        this._valor = _valor;
    }
    Object.defineProperty(Comissao.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        enumerable: false,
        configurable: true
    });
    Comissao.prototype.comissao = function () {
        if (this.valor <= 5000) {
            return 0;
        }
        else if (this.valor > 5000 && this.valor <= 10000) {
            return this.calcular_porcentagem(5000, this.valor);
        }
        else if (this.valor > 10000 && this.valor <= 30000) {
            var valor2 = this.calcular_porcentagem(5000, 10000);
            return this.calcular_porcentagem(10000, this.valor) + valor2;
        }
        else if (this.valor > 30000) {
            var valor4 = this.valor * 0.2;
            return valor4;
        }
    };
    //10000 - 100000 - 150000
    //2     - 10     - 5
    Comissao.prototype.calcular_porcentagem = function (minValor, valor_dado) {
        var valor = valor_dado - minValor;
        if (minValor == 5000) {
            return valor * 0.05;
        }
        else if (minValor == 10000) {
            return valor * 0.1;
        }
    };
    return Comissao;
}());
exports.Comissao = Comissao;
var Vendedor = /** @class */ (function () {
    function Vendedor(_nome, _vendas) {
        this._nome = _nome;
        this._vendas = _vendas;
        this.salario = 1100;
    }
    Object.defineProperty(Vendedor.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedor.prototype, "vendas", {
        get: function () {
            return this._vendas;
        },
        enumerable: false,
        configurable: true
    });
    Vendedor.prototype.comissao = function () {
        var valor_vendas = new Comissao(this.vendas);
        return valor_vendas.comissao();
    };
    Vendedor.prototype.salarioFinal = function () {
        return this.salario + this.comissao();
    };
    return Vendedor;
}());
exports.Vendedor = Vendedor;

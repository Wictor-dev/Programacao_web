"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jogo_1 = require("./modules/jogo");
var personagens_1 = require("./modules/personagens");
var jogo = new jogo_1.Jogo();
var p = new personagens_1.Personagem(1, 'wictor', 200);
var s = new personagens_1.Soldado(2, 'gabriel', 200, 100);
var s2 = new personagens_1.Soldado(3, 'Mourao', 200, 5);
var m = new personagens_1.Montaria(1, 'Cavalo', 10, 5);
var c = new personagens_1.Cavaleiro(4, 'Crampbell', 200, 8, m);
jogo.VerificarInclusao(p);
jogo.VerificarInclusao(s);
jogo.VerificarInclusao(s);
jogo.VerificarInclusao(c);
// jogo.incluir(p)
// jogo.incluir(s)
// jogo.incluir(s2)
// jogo.incluir(c)
jogo.verificarAtaque(c.id, p.id)
console.log(c.forca_ataque)
jogo.verificarAtaque(s.id, c.id)
jogo.verificarAtaque(s.id, c.id)
jogo.verificarAtaque(s.id, c.id)
console.log(c.forca_ataque)
jogo.verificarAtaque(c.id, p.id)
console.log(c.forca_ataque)
// jogo.atacar(s2.id, s.id);
// jogo.atacar(c.id, s2.id);
// jogo.avaliarBatalha();

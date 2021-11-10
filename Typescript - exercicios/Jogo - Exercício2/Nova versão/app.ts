import {Jogo} from './modules/jogo';
import { Cavaleiro, Personagem, Soldado, Montaria} from './modules/personagens';

let jogo : Jogo = new Jogo();
let p : Personagem = new Personagem(1,'wictor',200);
let s : Soldado = new Soldado(2,'gabriel',200,5);
let s2 : Soldado = new Soldado(3,'Mourao',200,5);
let m: Montaria = new Montaria(1,'Cavalo', 10,5)
let c : Cavaleiro = new Cavaleiro(4,'Crampbell',200,8, m);

jogo.VerificarInclusao(p)
jogo.VerificarInclusao(s)
jogo.VerificarInclusao(s)
jogo.VerificarInclusao(c)
// jogo.incluir(p)
// jogo.incluir(s)
// jogo.incluir(s2)
// jogo.incluir(c)



// jogo.atacar(s2.id, s.id);
// jogo.atacar(c.id, s2.id);

// jogo.avaliarBatalha();

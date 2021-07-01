import {Cavaleiro, Personagem, Soldado} from './personagens'
class Jogo {
    private _personagens : Personagem[] = [];

    incluir(p : Personagem){
        if (this.consultar(p.id) == null){
            this.personagens.push(p);
        } else{
            console.log(`Não foi possível adicionar o personagem ${p.nome}, pois já existe id no vetor!`)
        }

    }
    consultar(id: number) : any{
        for (let i = 0; i< this.personagens.length; i++){
            if (id == this.personagens[i].id){
                return this.personagens[i];
            }
        }
        return null;
    }
    
    atacar(id1 : number, id2: number){
        if (id1 == id2){
            console.log('O personagem não pode atacar a si mesmo!');
        }else{
            if (this.consultar(id1) instanceof Soldado == true){
                if (this.consultar(id1) instanceof Cavaleiro == true){
                    let c : Cavaleiro = this.consultar(id1);
                    c.atacar(this.consultar(id2));
                } else{
                    let s : Soldado = this.consultar(id1);
                    s.atacar(this.consultar(id2));
                }
            }
            else{
                console.log(`Não foi possível efetuar o ataque!`);
            }   
        }
    }

    avaliarBatalha(){
        for (let i: number = 0; i< this.personagens.length; i++){
            console.log(this.personagens[i].toString());
        }
    }
    get personagens(){
        return this._personagens; 
    }

}

export {Jogo}
import {Cavaleiro, Personagem, Soldado} from './personagens'
class Jogo {
    private _personagens : Personagem[] = [];

    incluir(personagem : Personagem): boolean{
        if (this.consultar(personagem.id) == null){
            this.personagens.push(personagem);
            return true
        } 

        return false;

    }

    VerificarInclusao(personagem: Personagem): void {
        if (this.incluir(personagem)){
            console.log("Personagem incluído com sucesso")
        }else {

            console.log(`Não foi possível adicionar o personagem ${personagem.nome}!`)
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
    
    atacar(id1 : number, id2: number): boolean{
        if (id1 == id2){
            return false
        }else{
            if (this.consultar(id1) instanceof Soldado == true){
                if (this.consultar(id1) instanceof Cavaleiro == true){
                    let c : Cavaleiro = this.consultar(id1);
                    c.atacar(this.consultar(id2));
                    return true
                } else{
                    let s : Soldado = this.consultar(id1);
                    s.atacar(this.consultar(id2));
                    return true
                }
            }
            else{
                return false
            }   
        }
    }

    verificarAtaque(id1: number, id2: number): string{
        this.atacar(id1, id2)
        if(this.atacar(id1,id2)){
            return "Ataque feito com sucesso!"
        }

        return "Ataque falhou!"
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

class Personagem{
    
    constructor (protected _id: number, private _nome: string,  private _energia: number){}

    estaVivo() : boolean{
        if (this.energia == 0){
            return false;
        } else {
            return true;
        }
    }

    defenderAtaque(valor:number) : number{
        if (valor >= this._energia){
            this._energia = 0;
        }
        else{
            this._energia -= valor;
        }

        return this._energia;
    }
    toString(){
        return `ID: ${this.id}, nome: ${this.nome}, Energia: ${this.energia}, Está vivo? ${this.estaVivo()}`;
    }
    get id() : number{
        return this._id;
    }
    get nome() : string{
        return this._nome;
    }

    get energia() : number{
        return this._energia;
    }

    set energia(valor: number){
        this._energia = valor;
    }
}

class Soldado extends Personagem{
    constructor( _id: number,_nome: string, _energia: number, private _forca_ataque:number){
        super(_id,_nome,_energia);
        this._forca_ataque = _forca_ataque;
    }
    atacar(p : Personagem){
        p.defenderAtaque(this.forca_ataque);
    }

    defenderAtaque(valor:number) : number{
        // super.defenderAtaque(valor);
        if (valor/2 >= this.energia){
            this.energia = 0;
        }
        else{
            this.energia -= valor/2;
        }

        return this.energia;
    }
    get forca_ataque(){
        return this._forca_ataque;
    }

    set forca_ataque(valor:number){
        this._forca_ataque = valor;
    }
}

class Cavaleiro extends Soldado{
    atacar(p: Personagem){
        this.forca_ataque *= 2;
        p.defenderAtaque(this.forca_ataque)
    }

    defenderAtaque(valor:number): number{
        if (valor/3 >= this.energia){
            this.energia = 0;
        }
        else{
            this.energia -= valor/3;
        }

        return this.energia;
    }
}
export {Personagem, Soldado, Cavaleiro}
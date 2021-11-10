
interface Montaria{
    constructor(_id: number, _name: string, _velocidade: number, _vigor: number)
    estaVivo(energia: number, energiaLimite: number) : boolean
    cansar()
}

interface Personagem{
    constructor(_id: number, _name:string, _energia: number)
    estaVivo()
    defenderAtaque(valor:number)
}


class Personagem implements Personagem{
    
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

class Montaria implements Montaria{
    constructor (private _id: number, private _name :string, private _velocidade: number, private _vigor: number){}

    get velocidade(): number{
        return this._velocidade;
    }

    set velocidade(valor: number){
        this._velocidade=valor;
    }
    get id():number{
        return this._id;
    }

    get name():string{
        return this._name;
    }

    get vigor(): number{
        return this._vigor;
    }
    set vigor(valor: number){
        this._vigor = valor;
    }
    estaVivo(energia: number, energiaLimite: number): boolean{
        if (energia < energiaLimite || this.vigor <= 0){
            return false;
        }

        return true;
    }

    correr(){
        this.velocidade+= 0.2 * this.velocidade
        this.cansar()
    }
    cansar(){
        this.vigor-= 0.1 * this.vigor;
    }
}

class Cavaleiro extends Soldado{

    constructor( _id: number,_nome: string, _energia: number, _forca_ataque:number, private _montaria: Montaria){
        super(_id,_nome,_energia,_forca_ataque);
        this._montaria = _montaria;
    }

    atacar(p: Personagem){
        p.defenderAtaque(this.ajustarAtaque())
        this.montaria.correr()
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
    get montaria(){
        return this._montaria
    }
    set montaria(montaria: Montaria){
        this.montaria = montaria
    }
    temMontaria(): boolean{
        if(this.montaria.estaVivo(this.energia, 100)){
            return true
        }

        return false;
    }

    ajustarAtaque(): number{
        if(this.temMontaria){
            this.forca_ataque+= 0.1 * this.montaria.velocidade;
        } 
        
        return this.forca_ataque
    }

}
export {Personagem, Soldado, Cavaleiro, Montaria}
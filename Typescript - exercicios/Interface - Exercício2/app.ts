interface Iteravel<T>{
    atual();
    proximo();
    isPrimeiro();
    isUltimo();
    irParaPrimeiro();
}

class ColecaoArray<T> implements Iteravel<T>{
    private _data : T[] = [];
    atual() {
        for (let i: number; i<this.getData().length; i++){
            if ()
        }
    }
    proximo() {
        throw new Error("Method not implemented.");
    }
    isPrimeiro() {
        throw new Error("Method not implemented.");
    }
    isUltimo() {
        throw new Error("Method not implemented.");
    }
    irParaPrimeiro() {
        throw new Error("Method not implemented.");
    }

    adiciona(){
        this.getData().push()
    }

    getData(){
        return this._data;
    }

}
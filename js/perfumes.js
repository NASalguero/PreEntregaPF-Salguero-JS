class Perfume {
    constructor ( nombre, diseñador, precio, imagen){
       
        this._nombre = nombre;
        this._diseñador = diseñador;
        this._precio = precio;
        this._imagen = imagen;
    }
    
    setID(){
        this._id = Math.round(Math.random() *100)
    }

    getID(){
        return this._id
    }

    mostrarDescripcion(){
        alert( `#${this._id} \n ${this._nombre} \n ${this._diseñador} \n $${this._precio}`)
    }
    
    getPrecio(){
        return this._precio
    }

    setStock(){

        this._stock = Math.round(Math.random() *10)
        // let disponiblidad = ""
        if (this._stock < 5){
            this._stock = "Sin stock"
        }else{
            this._stock = "Disponible"
        }
    }

    getStock(){
        return this._stock
    }


}

const perfume0 = new Perfume("Acqua di Gio", "Giorgio Armani", 45500, "../resources/fragancias/masculinas/acqua-di-gio.png");
const perfume1 = new Perfume("Eros", "Versace", 42000, "../resources/fragancias/masculinas/eros-versace.png");
const perfume2 = new Perfume("One Million", "Paco Rabanne", 50000, "../resources/fragancias/masculinas/one-million.png");
const perfume3 = new Perfume("Bad Boy", "Carolina Herrera", 47000, "../resources/fragancias/masculinas/bad-boy-classic.jpg");
const perfume4 = new Perfume("Bleu", "Channel", 48200, "../resources/fragancias/masculinas/bleu-channel.png");
const perfume5 = new Perfume("Le Male", "Jean Paul Gaultier", 43700, "../resources/fragancias/masculinas/le-male.png");

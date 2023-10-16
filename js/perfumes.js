class Perfume {
    constructor ( nombre, diseñador, precio, imagen, id){
       
        this._nombre = nombre;
        this._diseñador = diseñador;
        this._precio = precio;
        this._imagen = imagen;
        this._id = id;
    };
    
    // setID(){
    //     this._id = Math.round(Math.random() *100)
    // }

    getID(){
        return this._id
    };

    mostrarDescripcion(){
        alert( `#${this._id} \n ${this._nombre} \n ${this._diseñador} \n $${this._precio}`)
    };
    
    getPrecio(){
        return this._precio
    };

    // setStock(){

    //     this._stock = Math.round(Math.random() *10)
    //     // let disponiblidad = ""
    //     if (this._stock < 5){
    //         this._stock = "Sin stock"
    //     }else{
    //         this._stock = "Disponible"
    //     }
    // }

    getStock(){
        return this._stock
    };


};

const perfume0 = new Perfume("Acqua di Gio", "Giorgio Armani", 45500, "../resources/fragancias/masculinas/acqua-di-gio.png",1);
const perfume1 = new Perfume("Eros", "Versace", 42000, "../resources/fragancias/masculinas/eros-versace.png",2);
const perfume2 = new Perfume("One Million", "Paco Rabanne", 50000, "../resources/fragancias/masculinas/one-million.png",3);
const perfume3 = new Perfume("Bad Boy", "Carolina Herrera", 47000, "../resources/fragancias/masculinas/bad-boy-classic.jpg",4);
const perfume4 = new Perfume("Bleu", "Channel", 48200, "../resources/fragancias/masculinas/bleu-channel.png",5);
const perfume5 = new Perfume("Le Male", "Jean Paul Gaultier", 43700, "../resources/fragancias/masculinas/le-male.png",6);
const perfume6 = new Perfume("212 VIP Black", "Carolina Herrera", 51120, "../resources/fragancias/masculinas/212vip-black-CH.webp", 7);
const perfume7 = new Perfume("212 VIP Men", "Carolina Herrera", 56710, "../resources/fragancias/masculinas/212vip-men-CH.png", 8);
const perfume8 = new Perfume("Stronger With You", "Giorgio Armani", 56650, "../resources/fragancias/masculinas/armani-stronger-with-you-intensely-edp.jpg", 9);
const perfume9 = new Perfume("Wanted", "Azzaro", 51950, "../resources/fragancias/masculinas/azzaro-wanted.png", 10);
const perfume10 = new Perfume("Azzaro Pour Homme", "Azzaro", 58200, "../resources/fragancias/masculinas/azzaro.png", 11);
const perfume11 = new Perfume("Bad Boy Eau De Toilette", "Carolina Herrera", 49300, "../resources/fragancias/masculinas/bad-boy-edt.png", 12);
const perfume12 = new Perfume("Bad Boy Le Parfum", "Carolina Herrera", 61520, "../resources/fragancias/masculinas/bad-boy-leparfum.png", 13);
const perfume13 = new Perfume("Bleu Noir", "Narciso Rodriguez", 48900, "../resources/fragancias/masculinas/bleu-noir-narciso..png", 14);
const perfume14 = new Perfume("Eros Flame", "Versace", 60350, "../resources/fragancias/masculinas/eros-flame-versace.png", 15);
const perfume15 = new Perfume("La Nuit Del Homme", "Yves Saint Laurent", 51550, "../resources/fragancias/masculinas/la-nuit-del-homme-ysl.webp", 16);
const perfume16 = new Perfume("Scandal", "Jean Paul Gaultier", 51600, "../resources/fragancias/masculinas/scandal-jpg.webp", 17);
const perfume17 = new Perfume("Ultra Male", "Jean Paul Gaultier", 60300, "../resources/fragancias/masculinas/ultra-male-jpg.png", 18);




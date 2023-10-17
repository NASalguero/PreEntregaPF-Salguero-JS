class Perfume {
    constructor ( nombre, diseñador, precio, imagen, id, cantidad){
       
        this._nombre = nombre;
        this._diseñador = diseñador;
        this._precio = precio;
        this._imagen = imagen;
        this._id = id;
        this._cantidad = cantidad;
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


// PERFUMES MASCULINOS

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

// PERFUMES FEMENINOS

const perfume20 = new Perfume("Flower", "Kenzo", 54160, "../resources/fragancias/femeninas/flower-kenzo.png",19);
const perfume21 = new Perfume("Eros Femme", "Versace", 58750, "../resources/fragancias/femeninas/eros-femme.png",20);
const perfume22 = new Perfume("Goldea", "Bvlgari", 56400, "../resources/fragancias/femeninas/goldea.png",21);
const perfume23 = new Perfume("Good Girl", "Carolina Herrera", 53650, "../resources/fragancias/femeninas/good-girl.png",22);
const perfume24 = new Perfume("My Way", "Giorgio Armani", 57200, "../resources/fragancias/femeninas/my-way.png",23);
const perfume25 = new Perfume("Libre Femme", "Yves Saint Laurent", 55100, "../resources/fragancias/femeninas/libre-femme.png",24);
const perfume26 = new Perfume("212 VIP Rose", "Carolina Herrera", 58960, "../resources/fragancias/femeninas/212-vip-rose-CH.png",25);
const perfume27 = new Perfume("Acquia di Gioia", "Giorgio Armani", 51300, "../resources/fragancias/femeninas/acqua-di-gioia-giorgio-armani.webp",26);
const perfume28 = new Perfume("Amarige", "Givenchy", 60000, "../resources/fragancias/femeninas/amarige-givenchy.webp",27);
const perfume29 = new Perfume("Black Opium", "Yves Sain Laurent", 52100, "../resources/fragancias/femeninas/black-opium-ysl.png",28);
const perfume30 = new Perfume("Coco Mademoiselle", "Channel", 61600, "../resources/fragancias/femeninas/coco madmoiselle-chanel.webp",29);
const perfume31 = new Perfume("Fame", "Paco Rabanne", 55100, "../resources/fragancias/femeninas/fame-paco-rabanne.jpg",30);
const perfume32 = new Perfume("J'adore", "Dior", 50390, "../resources/fragancias/femeninas/j'adore-Dior.webp",31);
const perfume33 = new Perfume("L'interdit", "Gyvenchy", 56900, "../resources/fragancias/femeninas/l'interdit-givenchy.png",32);
const perfume34 = new Perfume("Miss Dior", "Dior", 59600, "../resources/fragancias/femeninas/miss-dior-dior.png",33);
const perfume35 = new Perfume("Mon Paris", "Yves Saint Laurent", 53650, "../resources/fragancias/femeninas/mon-paris-ysl.webp",34);
const perfume36 = new Perfume("Omnia Coral", "Bvlgari", 49900, "../resources/fragancias/femeninas/Omnia-coral-Bvlgari.webp",35);
const perfume37 = new Perfume("Scandal Femme", "Jean Paul Gaultier", 62300, "../resources/fragancias/femeninas/scandal-femme-jpg.png",36);


// let arrayPerfumes = [];


// arrayPerfumes.push(perfume0);
// arrayPerfumes.push(perfume1);
// arrayPerfumes.push(perfume2);
// arrayPerfumes.push(perfume3);
// arrayPerfumes.push(perfume4);
// arrayPerfumes.push(perfume5);
// arrayPerfumes.push(perfume6);
// arrayPerfumes.push(perfume7);
// arrayPerfumes.push(perfume8);
// arrayPerfumes.push(perfume9);
// arrayPerfumes.push(perfume10);
// arrayPerfumes.push(perfume11);
// arrayPerfumes.push(perfume12);
// arrayPerfumes.push(perfume13);
// arrayPerfumes.push(perfume14);
// arrayPerfumes.push(perfume15);
// arrayPerfumes.push(perfume16);
// arrayPerfumes.push(perfume17);


// function saveStorage () {

//     localStorage.setItem( "carrito" , JSON.stringify(carrito));

// };


// function pushearPerfumesHTML(arr,cat){

//     arr.forEach((perfume) => {

//         carrito.innerHTML = "";
//         let contenido = document.createElement("div");
//         contenido.setAttribute("data-aos", "fade-up")
//         contenido.className = "frag-grid";
//         contenido.innerHTML = `
//             <h3>${perfume._nombre} - ${perfume._diseñador}</h3>
//             <img src="${perfume._imagen}">   
//             <h4>$${perfume._precio}</h4>
        
//         `;

//         cat.appendChild(contenido);

//         let agregarCarrito = document.createElement("button");
//         agregarCarrito.innerText = "Agregar al carrito";
//         agregarCarrito.className = "btn2 hover2";

//         contenido.append(agregarCarrito);

//         agregarCarrito.addEventListener("click", () => {
//             carrito.push({
//                 nombre: perfume._nombre,
//                 imagen: perfume._imagen,
//                 diseñador: perfume._diseñador,
//                 precio: perfume._precio,
//                 id: perfume._id,
//             })
//             saveStorage();

//         });
        


//     });
// };
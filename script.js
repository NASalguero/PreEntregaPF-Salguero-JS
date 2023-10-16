const catalogoM1 = document.getElementById("catalogoM1");

const carritoCompras = document.getElementById("carritoCompras");
const navCart = document.getElementById("nav-cart");
const totalCompras = document.getElementById("totalCompras");
const welcome = document.getElementById("welcome");

let imgCart = 0;

const projectName = "Le Parfum d'Ange";



let arrayPerfumes = [];


arrayPerfumes.push(perfume0);
arrayPerfumes.push(perfume1);
arrayPerfumes.push(perfume2);
arrayPerfumes.push(perfume3);
arrayPerfumes.push(perfume4);
arrayPerfumes.push(perfume5);
arrayPerfumes.push(perfume6);
arrayPerfumes.push(perfume7);
arrayPerfumes.push(perfume8);
arrayPerfumes.push(perfume9);
arrayPerfumes.push(perfume10);
arrayPerfumes.push(perfume11);
arrayPerfumes.push(perfume12);
arrayPerfumes.push(perfume13);
arrayPerfumes.push(perfume14);
arrayPerfumes.push(perfume15);
arrayPerfumes.push(perfume16);
arrayPerfumes.push(perfume17);

//STORAGE***********************************************************



function saveStorage () {

    localStorage.setItem( "carrito" , JSON.stringify(carrito));

};

// function loadStorage () {

//     if (localStorage.getItem( "carrito" )){
//     let carrito = JSON.parse( localStorage.getItem( "carrito" ));
//     }
// };

// let carrito = [];
// loadStorage()
let carrito = JSON.parse( localStorage.getItem( "carrito" )) || [];



function pushearPerfumesHTML(arr,cat){

    arr.forEach((perfume) => {

        carrito.innerHTML = "";
        let contenido = document.createElement("div");
        contenido.setAttribute("data-aos", "fade-up")
        contenido.className = "frag-grid";
        contenido.innerHTML = `
            <h3>${perfume._nombre} - ${perfume._diseñador}</h3>
            <img src="${perfume._imagen}">   
            <h4>$${perfume._precio}</h4>
        
        `;

        cat.appendChild(contenido);

        let agregarCarrito = document.createElement("button");
        agregarCarrito.innerText = "Agregar al carrito";
        agregarCarrito.className = "btn2 hover2";

        contenido.append(agregarCarrito);

        agregarCarrito.addEventListener("click", () => {
            carrito.push({
                nombre: perfume._nombre,
                imagen: perfume._imagen,
                diseñador: perfume._diseñador,
                precio: perfume._precio,
                id: perfume._id,
            })
            // imgCart += 1;
            saveStorage();

        });
        


    });
};

const masc1 = arrayPerfumes.slice(0,6);
pushearPerfumesHTML(masc1,catalogoM1);

// const masc2 = arrayPerfumes.slice(7,13);
// pushearPerfumesHTML(masc2,catalogoM2);









// PROMESAS - "NOTIFICACIONES" (BIBLIOTECAS) - FETCH - INICIO SESION








// carrito.forEach((perfume) => {
// });



/*









arrayPerfumes.forEach((perfume) => {(perfume.setID())});
arrayPerfumes.forEach((perfume) => {(perfume.setStock())});
console.log(arrayPerfumes);



let sumaTotal = 0;



function catalogo() {
    let prodElegido = prompt(`Ingrese el producto que desea comprar según su número de Id.`);
    switch (prodElegido) {
        case "1":
            sumaTotal += perfume0._precio;
            break;
        case "2":
            sumaTotal += perfume1._precio;
            break;
        case "3":
            sumaTotal += perfume2._precio;
            break;
        case "4":
            sumaTotal += perfume3._precio;
            break;
        case "5":
            sumaTotal += perfume4._precio;
            break;
        case "6":
            sumaTotal += perfume5._precio;
            break;
        default:
            alert(`Ingrese un código válido`);
    }
}

function oferta() {
    if (confirm(`Desea comprar algun producto?`)) {
        catalogo();
        while (confirm(`¿Desea comprar otro producto?`)) {
            catalogo();
        }
    }
}
let medioPago = "";
let cuotas = 0;


function fnMedioPago() {
    alert(`Si usted paga en efectivo tiene un 25% de descuento, si usted paga con transferencia tiene un 20% de descuento, y si lo hace con credito tiene un recargo del 15% y puede hacerlo en hasta 12 cuotas`);
    medioPago = prompt(`Ingrese el medio de pago seleccionado:`);
    if (medioPago == "efectivo"){
        sumaTotal -= (sumaTotal *25 /100);
        alert(`Con el 25% de descuento, usted debe abonar un total de: $ ${sumaTotal}`);
    }else if (medioPago == "transferencia"){
        sumaTotal -= (sumaTotal *20 /100);
        alert(`Con el 20% de descuento, usted debe abonar un total de: $ ${sumaTotal}`);
    }else if ( medioPago == "credito"){
        sumaTotal += (sumaTotal *15/100);
        alert(`Con el recargo del 15%, el monto total a abonar es de ${sumaTotal}`)
        fnCuotas();
        alert(`Usted debe abonar un total de ${cuotas} cuotas de ${sumaTotal} `);
    }else {
        alert(`El medio de pago seleccionado no es correcto, ingrese un medio de pago válido`);
        fnMedioPago();
    }

}


function fnCuotas() {
    cuotas = prompt(`Ingrese la cantidad de cuotas deseadas, cuotas disponibles: 1, 3, 6, 9, 12`);
    switch (cuotas) {
        case "1":
            sumaTotal /= 1
            break;
        case "3":
            sumaTotal /= 3
            break;
        case "6":
            sumaTotal /= 6
            break;
        case "9":
            sumaTotal /= 9
            break;
        case "12":
            sumaTotal /= 12
            break;
        default:
            alert(`Las cantidad de cuotas seleccionada no es válida`)
            fnCuotas()
    }
}



const fecha = new Date();


alert(`Bienvenido a ${projectName}. \nLa fecha de hoy es ${fecha.toLocaleString()}. \nAl final del día los precios se actualizarán.`);



function recomendar(){
function Recomendados(name,designer){
    this.name = name;
    this.designer = designer;
}

let name = prompt(`Ingrese el nombre del perfume`);
let designer = prompt(`Ingrese el diseñador del prefume`);

const nuevoPerfume = new Recomendados(name,designer)
console.log(nuevoPerfume)




}


let suma = 0
let cond = true;
while (cond) {

    let menu = `¿Qué desea realizar el día de hoy?`;
    menu += `\n1.- Ver todos los perfumes`;
    menu += `\n2.- Filtrar los perfumes disponibles`;
    menu += `\n3.- Sumar uno o mas productos antes de comprar`;
    menu += `\n4.- Agregar un perfume al carrito`;
    menu += `\n5.- Ver monto total del carrito`;
    menu += `\n6.- Elegir medio de pago`;
    menu += `\n7.- Recomendar un nuevo perfume para vender`;
    menu += `\n8.- Salir`;
    
    let eleccion = prompt(menu);

    switch (eleccion){
        case "1":
            alert(arrayPerfumes.forEach((perfume) => {(perfume.mostrarDescripcion())}));
            break;
        case "2":
            const filtro = arrayPerfumes.filter((perfume) => perfume._stock === "Disponible");
            console.log(filtro)
            break;
        case "3": 
            sumar()
            alert(suma)
            break;
        case "4": 
            oferta();
            break;
        case "5": 
            alert(sumaTotal);
            break;
        case "6": 
            fnMedioPago();
            break;
        case "7":
            recomendar();
            break;
        case "8": 
            alert(`Gracias por comprar en ${projectName}. Lo esperamos pronto`);
            cond = false;
            break;
        case null:
            alert(`Gracias por comprar en ${projectName}. Lo esperamos pronto`);
            cond = false;
            break;
        default:
            alert(`No se ingresó una opción disponible`);



    }

}


function sumar(a){
    a = prompt(`Ingrese el precio del producto que desea sumar`)
    a = Number(a)
    return a = suma += a

}


const actualizarPrecios = arrayPerfumes.map((perfume) => {
    return {
        nombre: perfume._nombre,
        precio: perfume._precio *1.8,
    }
})

console.log(actualizarPrecios);



*/




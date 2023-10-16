const catalogoM2 = document.getElementById("catalogoM2");


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
            })
            // imgCart += 1;
            saveStorage();

        });
        


    });
};


const masc2 = arrayPerfumes.slice(7,13);
pushearPerfumesHTML(masc2,catalogoM2);
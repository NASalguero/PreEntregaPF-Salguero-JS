let arrayFetch = [];
// fetch("../perfumesFetch.json")
//         .then(r => r.json())
//         .then(data => {
//             arrayFetch = data;
//             pushearPerfumesHTML(arrayFetch,)
//         });



asignarCantidad(arrayFetch);



let arrayPerfumesM = [];
let arrayPerfumesF = [];


arrayPerfumesM.push(perfume0);
arrayPerfumesM.push(perfume1);
arrayPerfumesM.push(perfume2);
arrayPerfumesM.push(perfume3);
arrayPerfumesM.push(perfume4);
arrayPerfumesM.push(perfume5);
arrayPerfumesM.push(perfume6);
arrayPerfumesM.push(perfume7);
arrayPerfumesM.push(perfume8);
arrayPerfumesM.push(perfume9);
arrayPerfumesM.push(perfume10);
arrayPerfumesM.push(perfume11);
arrayPerfumesM.push(perfume12);
arrayPerfumesM.push(perfume13);
arrayPerfumesM.push(perfume14);
arrayPerfumesM.push(perfume15);
arrayPerfumesM.push(perfume16);
arrayPerfumesM.push(perfume17);

arrayPerfumesF.push(perfume20);
arrayPerfumesF.push(perfume21);
arrayPerfumesF.push(perfume22);
arrayPerfumesF.push(perfume23);
arrayPerfumesF.push(perfume24);
arrayPerfumesF.push(perfume25);
arrayPerfumesF.push(perfume26);
arrayPerfumesF.push(perfume27);
arrayPerfumesF.push(perfume28);
arrayPerfumesF.push(perfume29);
arrayPerfumesF.push(perfume30);
arrayPerfumesF.push(perfume31);
arrayPerfumesF.push(perfume32);
arrayPerfumesF.push(perfume33);
arrayPerfumesF.push(perfume34);
arrayPerfumesF.push(perfume35);
arrayPerfumesF.push(perfume36);
arrayPerfumesF.push(perfume37);

function asignarCantidad(arr){
    arr.forEach(perfume => {perfume._cantidad = 1});
}

asignarCantidad(arrayPerfumesF);
asignarCantidad(arrayPerfumesM);


function saveStorage () {

    localStorage.setItem( "carrito" , JSON.stringify(carrito));

};


let arrayControl = [];

function pushearPerfumesHTML(arr,cat,v){

    arr.forEach((perfume) => {

        v.innerHTML = "";
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

            let control = v.some((producto) => producto.id === perfume._id);
            if(control) {
                v.map((e) =>{
                    if (e.id === perfume._id){
                        e.cantidad++;
                    };
                });
            }else{
                v.push({
                    nombre: perfume._nombre,
                    imagen: perfume._imagen,
                    diseñador: perfume._diseñador,
                    precio: perfume._precio,
                    id: perfume._id,
                    cantidad: perfume._cantidad,
                }); 
            };
            
            Toastify({
                text: `${perfume._nombre} de ${perfume._diseñador} fue agregado al carrito (${perfume._cantidad})`,
                className: "info",
                style: {
                  background: `linear-gradient(to right, #09203f, #537895)`,
                },
                gravity: "bottom",
              }).showToast();

            saveStorage();

        });
        


    });
};





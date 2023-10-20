



const catalogoF3 = document.getElementById("catalogoF3");

let carrito = JSON.parse( localStorage.getItem( "carrito" )) || [];


fetch("../perfumesFetch.json")
        .then(r => r.json())
        .then(data => {
            arrayFetch = data;
            asignarCantidad(arrayFetch);
            const fem3 = arrayFetch.slice(6,12);
            pushearPerfumesHTML(fem3,catalogoF3,carrito)
            
        });

// const fem3 = arrayFetch.slice(6,12);
// pushearPerfumesHTML(fem3,catalogoF3,carrito);


// CODIGO ORIGINAL FUNCIONAL SIN UTILIZACION DE FETCH 
// const fem3 = arrayPerfumesF.slice(12,18);
// pushearPerfumesHTML(fem3,catalogoF3,carrito);
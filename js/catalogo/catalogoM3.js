


const catalogoM3 = document.getElementById("catalogoM3");



let carrito = JSON.parse( localStorage.getItem( "carrito" )) || [];

fetch("../perfumesFetch.json")
        .then(r => r.json())
        .then(data => {
            arrayFetch = data;
            asignarCantidad(arrayFetch);
            const masc3 = arrayFetch.slice(0,6);
            pushearPerfumesHTML(masc3,catalogoM3,carrito)
        });

// const masc3 = arrayFetch.slice(0,6);
// pushearPerfumesHTML(masc3,catalogoM3,carrito);



// CODIGO ORIGINAL FUNCIONAL SIN UTILIZACION DE FETCH
// const masc3 = arrayPerfumesM.slice(12,18);
// pushearPerfumesHTML(masc3,catalogoM3,carrito);
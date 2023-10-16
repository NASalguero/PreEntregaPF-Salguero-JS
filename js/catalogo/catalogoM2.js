const catalogoM2 = document.getElementById("catalogoM2");



let carrito = JSON.parse( localStorage.getItem( "carrito" )) || [];


const masc2 = arrayPerfumes.slice(6,12);
pushearPerfumesHTML(masc2,catalogoM2);
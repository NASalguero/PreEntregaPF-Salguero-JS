const catalogoM3 = document.getElementById("catalogoM3");



let carrito = JSON.parse( localStorage.getItem( "carrito" )) || [];


const masc3 = arrayPerfumes.slice(12,18);
pushearPerfumesHTML(masc3,catalogoM3);
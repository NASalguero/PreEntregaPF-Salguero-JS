const catalogoF2 = document.getElementById("catalogoF2");

let carrito = JSON.parse( localStorage.getItem( "carrito" )) || [];

const fem2 = arrayPerfumesF.slice(6,12);
pushearPerfumesHTML(fem2,catalogoF2);
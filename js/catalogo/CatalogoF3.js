const catalogoF3 = document.getElementById("catalogoF3");

let carrito = JSON.parse( localStorage.getItem( "carrito" )) || [];

const fem3 = arrayPerfumesF.slice(12,18);
pushearPerfumesHTML(fem3,catalogoF3,carrito);
const catalogoF1 = document.getElementById("catalogoF1");

let carrito = JSON.parse( localStorage.getItem( "carrito" )) || [];

const fem1 = arrayPerfumesF.slice(0,6);
pushearPerfumesHTML(fem1,catalogoF1,carrito);
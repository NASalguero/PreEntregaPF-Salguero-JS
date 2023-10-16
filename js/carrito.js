const carrito = JSON.parse( localStorage.getItem( "carrito" ));
const mainCarrito = document.getElementById("main-carrito");
const imgCarrito = document.querySelector("#imgCarrito");
const oops = document.querySelector("#oops");
const carritoCompras = document.getElementById("carritoCompras");


if(carrito){
        imgCarrito.style.display = "none";
        oops.style.display = "none";

        totalCompras.innerHTML = "";
        carritoCompras.innerHTML = "";
        carrito.forEach((perfume) => {
            let contenidoCart = document.createElement("div");
            contenidoCart.className = "frag-cart";
            contenidoCart.innerHTML = `
            <img class="cart-prod-img" src="${perfume.imagen}" alt="${perfume.nombre}">
            <div class="cart-prod-title">
                <small>Nombre</small>
                <h4>${perfume.nombre}</h4>
            </div>
            <div class="cart-prod-designer">
                <small>Diseñador</small>
                <h4>${perfume.diseñador}</h4>
            </div>
            <div class="cart-prod-quantity">
                <small>Cantidad</small>
                <h4>${perfume.cantidad}</h4>
            </div>
            <div class="cart-prod-precio">
                <small>Precio</small>
                <h4>${perfume.precio}</h4>
            </div>
            <div class="cart-prod-subtotal">
                <small>Subtotal</small>
                <h4>${perfume.precio * perfume.cantidad}</h4>
            </div>
            `;
    
            carritoCompras.append(contenidoCart);
        });
        
        const total = carrito.reduce((acumulador , perfume) => acumulador + perfume.precio, 0);
    
        const compraTotal = document.createElement("h3");
        compraTotal.innerHTML = `Total a pagar : $${total}`;
        totalCompras.append(compraTotal);
};




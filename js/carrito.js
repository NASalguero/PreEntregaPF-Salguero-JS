const carrito = JSON.parse( localStorage.getItem( "carrito" ));
const mainCarrito = document.getElementById("main-carrito");
const imgCarrito = document.querySelector("#imgCarrito");
const oops = document.querySelector("#oops");
const carritoCompras = document.getElementById("carritoCompras");

let quitarPerfume = document.getElementById("quitarPerfume");

function openCarrito() {

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
                <div class="">
                    <small>Eliminar</small>
                    <h5 id="quitarPerfume" class ="borrar-perfume">🚫</h5>
                </div>
                `;
        
                carritoCompras.append(contenidoCart);

                
                // quitarPerfume.addEventListener("click", borrarPerfume);
            });
            
            const total = carrito.reduce((acumulador , perfume) => acumulador + (perfume.precio * perfume.cantidad), 0);
        
            const compraTotal = document.createElement("h3");
            compraTotal.className = "total-h3"
            compraTotal.innerHTML = `Total a pagar : $${total}`;
            totalCompras.append(compraTotal);
    };

};
openCarrito();

// quitarPerfume.addEventListener("click", );


// ELIMINAR CON LIBRERIA PRODUCTO POR UNIDAD O TODOS LOS PRODUCTOS IGUALES

// VACIAR EL CARRITO Y BOTON IR A PAGAR CON LIBRERIAS
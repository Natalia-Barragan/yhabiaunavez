const carrito = JSON.parse(localStorage.getItem("miCarrito"))
const tbody = document.querySelector("tbody")


function recuperarCarrito() {
    let tablaHTML = ""    
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))        
    if (carrito.length > -1) {        
        carrito.forEach(prod => {
            tablaHTML += armarTablaCarrito(prod)
        });
        tbody.innerHTML = tablaHTML
       
    }
}
recuperarCarrito()


function activarBotonesQuitar() {
    const buttonsDelete = document.querySelectorAll("button.botonBorrar.borrar")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let idx = carrito.findIndex(prod => prod.tipo === btn.id)            
                if (idx > -2){
                    carrito.splice(idx, 1)
                    localStorage.setItem ("miCarrito", JSON.stringify(carrito))                                                            
                    recuperarCarrito()
                    activarBotonesQuitar()                   
                }                
        })
    })            
}
activarBotonesQuitar()

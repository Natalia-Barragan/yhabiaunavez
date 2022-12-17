const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []
const tbody = document.querySelector("tbody")


function recuperarCarrito() {
    let tablaHTML = ""    
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))        
    if (carrito.length > -1) {        
        carrito.forEach(prod => {
            tablaHTML += armarTablaCarrito(prod)
        });
        tbody.innerHTML = tablaHTML
        calcularTotal()
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
                    alerta(`El producto se ha eliminado del carrito.`, "1000", 'error')                                                         
                    recuperarCarrito()
                    activarBotonesQuitar()                   
                }                
        })
    })            
}
activarBotonesQuitar()

const alerta = (title, timer, icon)=>{
    Swal.fire({
        toast: 'toast',
        position: 'bottom-start',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: timer
      })
}

function calcularTotal() {
    let total = document.querySelector("#total")
    let totalCarrito = carrito.reduce((acc, ropa)=> acc + ropa.precio, 0)
        total.innerText = `$ ${totalCarrito.toLocaleString()}`
}

const btnComprar = document.querySelector("#btnComprar")

btnComprar.addEventListener("click", ()=>{

    Swal.fire({
        title: '¿Quiere confirmar su compra?',
        ImageUrl:'../fotos/uhabiaunavez.jpg',
        showCancelButton: true,
        confirmButtonColor: ' rgb(173, 9, 178)',
        cancelButtonColor: '#158063c9',
        confirmButtonText: 'CONFIRMAR',
        cancelButtonText: 'CANCELAR',
        })
    
        .then((result) => {
            if (result.isConfirmed) {
            localStorage.removeItem("miCarrito")
            carrito.length = 0
            Swal.fire("¡Muchas gracias por su compra!",'', '',)
                .then(()=> {
                    location.href = 'index.html'
                })
            }
        })
})            
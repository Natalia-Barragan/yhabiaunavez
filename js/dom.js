const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []
const container = document.getElementById("container")
const inputSearch = document.querySelector("input#inputSearch")
const imgCarrito = document.getElementById("imgCarrito")

imgCarrito.addEventListener("mousemove", ()=> {
    let totalCarrito = carrito.length
        imgCarrito.title = `${totalCarrito} productos en el carrito`
})

function subirTarjetas(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(producto => {
                contenido += retornarTarjetas(producto)
            })
            container.innerHTML = contenido
        }
}
subirTarjetas(mercaderias)

function activarClickBotones() {
    const botonesAdd = document.querySelectorAll ("button.boton.botonAdd")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let resultado = mercaderias.find(prod => prod.id === parseInt(btn.id))
                carrito.push(resultado)
                localStorage.setItem("miCarrito", JSON.stringify(carrito))
        })
    })
}
activarClickBotones()

function filtrarMercaderia() {
    let resultado = mercaderias.filter(mercaderia => mercaderia.tipo.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))    
    if (resultado.length > 0) {
        subirTarjetas(resultado)
        activarClickBotones()
    } else{
        console.warn("No se encontraron coincidencias")
    }   
}


inputSearch.addEventListener("change", ()=> {
    if (inputSearch.value.trim() !== "") {
        filtrarMercaderia()
    } else {
        subirTarjetas(mercaderias)
        activarClickBotones()
    }
})








const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []
const container = document.getElementById("container")
const inputSearch = document.querySelector("input#inputSearch")
const btnCarrito = document.getElementById("btnCarrito")
const URL = 'bbdd/main.json'
const mercaderia = []

fetch(URL)
    .then((response) => data = response.json())
    .then((data) => mercaderia.push(...data))
    .then(() => subirTarjetas(mercaderia))
    .then(() => activarClickBotones())
    .catch(_error => container.innerHTML = retornoError())

btnCarrito.addEventListener("mousemove", ()=> {
    let totalCarrito = carrito.length
    btnCarrito.title = `${totalCarrito} productos en el carrito`
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

function activarClickBotones() {
    const botonesAdd = document.querySelectorAll ("button.boton.botonAdd")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let resultado = mercaderia.find(prod => prod.id === parseInt(btn.id))
                carrito.push(resultado)
                localStorage.setItem("miCarrito", JSON.stringify(carrito))
                alerta(`${resultado.tipo} se ha agregado al carrito correctamente.`, "1000", 'success')
        })
    })
}

function filtrarMercaderia() {
    let resultado = mercaderia.filter(mercaderia => mercaderia.tipo.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))    
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
        subirTarjetas(mercaderia)
        activarClickBotones()
    }
})

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





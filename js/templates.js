function retornarTarjetas(mercaderia){
    return `<div class="container-card" id="container-card ${mercaderia.id}"> 
                <div class="card">                
                    <img src=${mercaderia.imagen}>                
                    <div class="contenido-card">
                        <h3>${mercaderia.tipo}</h3>
                        <p> $ ${mercaderia.precio}</p>
                        <button class="boton botonAdd" id= "${mercaderia.id}" title="Clic para agregar '${mercaderia.tipo}' al carrito" >Comprar</button>
                    </div>
                </div>    
            </div>`
                
}

function retornoError() {
    return `<div class="card-error">
                <p>Le pedimos disculpas, la pagina esta en mantenimiento.<br/>
                No se pudieron cargar los productos.<br/>
                Intenta nuevamente en unos instantes.</p>
            </div>`
}

function armarTablaCarrito(prod) {
    return `<tr>
                <td><img src=${prod.imagen} width=40px height=30px></td>
                <td>${prod.tipo}</td>
                <td>$ ${prod.precio}</td>
                <td><button class="botonBorrar borrar" id="${prod.tipo}">❌</button></td>
            </tr>`
}
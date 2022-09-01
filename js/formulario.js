
// Formulario finalizar pedido

class Datos {
    constructor (nombre, telefono, domicilio) {
        this.nombre = nombre, 
        this.telefono = telefono, 
        this.domicilio = domicilio
    }
}

let formulario = document.getElementById('form')

let objetoPersona =JSON.parse(localStorage.getItem('datosPersona'))|| null;


formulario.addEventListener('submit', (event) => {
    
    event.preventDefault()

    let nodo = event.target.children
    const dato = new Datos(nodo[0].value, nodo[1].value, nodo[2].value)

    // Logica para que no se pueda generar la alerta en caso de un campo vacio o que no cumpla los requisitos

    if (nodo[0].value.length === 0) {
        Toastify({
            text: "Ingresa un nombre valido",
            duration: 3000
        }).showToast();
    }

     if (nodo[1].value.length < 10 ) {
        Toastify({
            text: "Ingresa un teléfono valido",
            duration: 3000
        }).showToast();
    }
     if (nodo[2].value.length === 0) {
        Toastify({
            text: "Ingresa un domicilio valido",
            duration: 3000
        }).showToast();
    }

    else if ( (nodo[0].value.length > 0)  && (nodo[1].value.length >= 10) && (nodo[2].value.length > 0))  {
        const dato = new Datos(nodo[0].value, nodo[1].value, nodo[2].value)
        generarInterfaz(nodo[0].value, nodo[2].value, nodo[1].value)
        localStorage.setItem('datosPersona', JSON.stringify(dato))
    }
    

})


//funcion para generar la alerta con los datos ingresados

const generarInterfaz = (nombre, domicilio, telefono) => {
    let contenedor = document.getElementById('formDatos')
    
    contenedor.innerHTML = `
    <div class="pedidoFinal">  <h3> Perfecto ${nombre}! Su pedido 
    sera enviado a: ${domicilio}. 
    Cualquier incoveniente o novedad nos comunicaremos al ${telefono} </h3>
    <a href="index.html"><button onclick= "pedidoFinalizado()"> Entendido! </button> </a></div>
   
    `  
}


// Funcion para el boton 'entendido' que limpia el local storage
const pedidoFinalizado = () => {
   
    localStorage.clear()

}

const pintarDatosForm = () => {
    let nombre = document.querySelector("#nombre");
        let telefono = document.querySelector("#telefono");
        let domicilio = document.querySelector("#domicilio")
    if (objetoPersona) {
        nombre.value = objetoPersona.nombre
        telefono.value = objetoPersona.telefono
        domicilio.value = objetoPersona.domicilio
    }
}

// Local Storage

window.addEventListener("load", () => {
    pintarDatosForm()
})






































// let finalPedido = () => {
//     let contenedor = document.getElementById('finalizarPedido')
//     contenedor.innerHTML = `<form action="" id="form" class="row d-flex flex-column align-items-center  mt-4 mb-4">
//                                 <input class="mb-2 col-6" id="nombre" type="text" placeholder="Nombre">
//                                 <input class="mb-2 col-6" id="telefono" type="text" placeholder="Telefono">
//                                 <input class="mb-2 col-6" id="domicilio" type="text" placeholder="Domicilio">
                                
//                                 <button type="submit" id="btn-create" class="btn btn-success col-3">Enviar</button>
//                             </form>`
//     let form = document.getElementById('form')
//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         let nodo = event.target.children;
//         console.log(nodo.value)
//     }
//     )
// }
// // Formulario finalizar pedido

// class Datos {
//     constructor (nombre, telefono, domicilio) {
//         this.nombre = nombre, 
//         this.telefono = telefono, 
//         this.domicilio = domicilio
//     }
// }

// let formulario = document.getElementById('form')
// let alertas = document.getElementById('warnings')


// let arrayDatos =JSON.parse(localStorage.getItem('datosPersona'))||[];

// formulario.addEventListener('submit', (event) => {
    
//     event.preventDefault()

//     let nodo = event.target.children
//     const dato = new Datos(nodo[0].value, nodo[1].value, nodo[2].value)
//         arrayDatos.push(dato)
//         generarInterfaz()

    
//     if (nodo[0].value.length === 0) {
//         Toastify({
//             text: "Ingresa un nombre valido",
//             duration: 3000
//         }).showToast();
//     }

//      if (nodo[1].value.length < 10 ) {
//         Toastify({
//             text: "Ingresa un teléfono valido",
//             duration: 3000
//         }).showToast();
//     }
//      if (nodo[2].value.length === 0) {
//         Toastify({
//             text: "Ingresa un domicilio valido",
//             duration: 3000
//         }).showToast();
//     }
//     // else if (nodo[0].value.length > 0 && nodo[1].value.length > 10 &&  nodo[2].value.length > 0)  {
//     //     const dato = new Datos(nodo[0].value, nodo[1].value, nodo[2].value)
//     //     arrayDatos.push(dato)
//     //     generarInterfaz()
//     // }
    
     
//     //localStorage.setItem('datosPersona', JSON.stringify(arrayDatos))

// })


// //funcion generar html
// const generarInterfaz = () => {
//     let contenedor = document.getElementById('formDatos')
    
//     arrayDatos.map( el => contenedor.innerHTML = `
//     <div class="pedidoFinal">  <h3> Perfecto ${el.nombre}! Su pedido 
//     sera enviado a: ${el.domicilio}. 
//     Cualquier incoveniente o novedad nos comunicaremos al ${el.telefono} </h3>
//     <a href="index.html"><button onclick= "pedidoFinalizado()"> Entendido! </button> </a></div>
   
//     `)

//     //localStorage.setItem('datosPersona', JSON.stringify(arrayDatos))
    
// }


// const pedidoFinalizado = () => {
//     localStorage.clear()

// }




// Formulario finalizar pedido

class Datos {
    constructor (nombre, telefono, domicilio) {
        this.nombre = nombre, 
        this.telefono = telefono, 
        this.domicilio = domicilio
    }
}

let formulario = document.getElementById('form')
let alertas = document.getElementById('warnings')


let objetoPersona =JSON.parse(localStorage.getItem('datosPersona'))|| null;
console.log(typeof objetoPersona);

formulario.addEventListener('submit', (event) => {
    
    event.preventDefault()

    let nodo = event.target.children
    const dato = new Datos(nodo[0].value, nodo[1].value, nodo[2].value)
        // arrayDatos.push(dato)
        // generarInterfaz()
        console.log(nodo[1].value)

    
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

    // console.log(nodo[0].value.length > 0);
    // console.log(nodo[1].value.length > 10);
    // console.log(nodo[1].value.length > 10);

    else if ( (nodo[0].value.length > 0)  && (nodo[1].value.length >= 10) && (nodo[2].value.length > 0))  {
        const dato = new Datos(nodo[0].value, nodo[1].value, nodo[2].value)
        // arrayDatos.push(dato)
        generarInterfaz(nodo[0].value, nodo[2].value, nodo[1].value)
        localStorage.setItem('datosPersona', JSON.stringify(dato))
    }
    
     

})


//funcion generar html
const generarInterfaz = (nombre, domicilio, telefono) => {
    let contenedor = document.getElementById('formDatos')
    
    contenedor.innerHTML = `
    <div class="pedidoFinal">  <h3> Perfecto ${nombre}! Su pedido 
    sera enviado a: ${domicilio}. 
    Cualquier incoveniente o novedad nos comunicaremos al ${telefono} </h3>
    <a href="index.html"><button onclick= "pedidoFinalizado()"> Entendido! </button> </a></div>
   
    `

    //localStorage.setItem('datosPersona', JSON.stringify(arrayDatos))
    
}


const pedidoFinalizado = () => {
    Toastify({
        text: "Ingresa un domicilio valido",
        duration: 3000
    }).showToast();
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
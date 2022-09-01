// Elementos traidos de productos.js al DOM
const contenedorProductos = document.getElementById('contendor-productos')

let carrito = JSON.parse(localStorage.getItem("data")) || [];

// Funcion que genera las cards de los productos 
let generadorCards = () => {

    return (contenedorProductos.innerHTML = platos
        .map ((x) => { 
            // desestructuracion
            let {id, nombre, price, desc, img} = x;
            let search = carrito.find ( (x) => x.id === id) || []
        return `
        <div id=product-id-${id} class="item">
            <img src="${img}" alt="" class = "img-card">
            <div class="details">
                <h3> ${nombre} </h3>
                <p> ${desc} </p>
                <div class="price-quantity">
                    <h2> $ ${price} </h2>
                    <div class="buttons">
                         <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                         <div id=${id} class="quantity"> ${search.item === undefined ? 0 : search.item} </div>
                         <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                        
                    </div>
                </div>
            </div>
        </div>


        `
    }).join("") );
};

generadorCards()

// Funcion para cuando se aprieta el boton '+' 

let increment = (id) => {
    let selectedItem = id;

    let search = carrito.find((x) =>x.id ===  selectedItem.id)

    if (search === undefined) {
        carrito.push( {
        id: selectedItem.id,
        item: 1,
    })
    } else  {
        search.item +=1
    }
    
    localStorage.setItem("data", JSON.stringify(carrito))
    
    update(selectedItem.id)
    Toastify({
        text: 'Has agregado un producto',
        duration: 1000,
        gravity: 'top',
        position: 'right',
        style: {
         background: 'rgb(218, 103, 27, 0.9)'
     }

    }).showToast();
}

// Funcion para cuando se aprieta el boton '-' 

let decrement = (id) => {
    let selectedItem = id;

    let search = carrito.find((x) =>x.id ===  selectedItem.id)

    if(search === undefined) return

    else if (search.item === 0) return;
     else  {
        search.item -=1
    }
    
    update(selectedItem.id)


    carrito = carrito.filter((x) => x.item !== 0);


    localStorage.setItem("data", JSON.stringify(carrito))
    Toastify({
        text: 'Has eliminado un producto',
        duration: 1000,
        gravity: 'top',
        position: 'right',
        style: {
         background: 'rgb(218, 103, 27, 0.9)'
     }

    }).showToast();
}



let update = (id) => {
    let search = carrito.find ((x) => x.id === id)

    document.getElementById(id).innerHTML = search.item;
    calculation()

};

// Funcion que calcula cuantos items tengo en el carrito


let calculation = () => {
    let cartIcon = document.getElementById('contadorCarrito')
    cartIcon.innerHTML = (carrito.map ( (x) => x.item).reduce((x, y) => x +y, 0));
    
}

calculation();


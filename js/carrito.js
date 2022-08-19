// carrito de compras
let carrito = JSON.parse(localStorage.getItem("data")) || [];

//console.log(carrito)

let calculation = () => {
    let cartIcon = document.getElementById('contadorCarrito')
    cartIcon.innerHTML = (carrito.map ( (x) => x.item).reduce((x, y) => x +y, 0));
    
}

calculation();

let carritoContenedor = document.getElementById('carrito-contenedor')
let label = document.getElementById('label')



let generadorCarrito = () => {
    if (carrito.length !== 0) {
        return (carritoContenedor.innerHTML = carrito
            .map ((x) => {
                // desestructuracion
                let {id, item} = x;
                let search = platos.find((y) => y.id === id ) || []
            return `
            <div class=" cart-item"></div>
            <img  src=${search.img} alt="" />
            <div class = "details"> 
                <div class= "title-price-x"> 
                    <h4 class= "title-price"> 
                        <p>${search.nombre} </p>
                        <p>$ ${search.price} </p>
                    </h4>
                    <i onclick = "eliminar(${id})"class="fa-solid fa-trash"></i>

                </div>
                <div class="buttons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantity">${item} </div>
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                </div>
                <h3> ${item * search.price} </h3>
            </div>
            `
        }).join(""))
    }

    else {
        carritoContenedor.innerHTML = ``
        label.innerHTML = `
        <h2> Cart is empty </h2>  `
    }
}

generadorCarrito();

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
    generadorCarrito();
    update(selectedItem.id)
    localStorage.setItem("data", JSON.stringify(carrito))
    // console.log(carrito)
    
}



let decrement = (id) => {
    let selectedItem = id;

    let search = carrito.find((x) =>x.id ===  selectedItem.id)
// si el search no encuentra nada (undefined) va a parar la funcion con return
    if(search === undefined) return
// cuando llegue a 0 para
    else if (search.item === 0) return;
     else  {
        search.item -=1
    }
    
    update(selectedItem.id)

    // si el carrito tiene un item que esta en 0 lo elimina

    carrito = carrito.filter((x) => x.item !== 0);

    generadorCarrito();
    // console.log(carrito)

    localStorage.setItem("data", JSON.stringify(carrito))
}



let update = (id) => {
    let search = carrito.find ((x) => x.id === id)
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation()

};


let eliminar = (id) => {
    let selectedItem = id
    // console.log(selectedItem.id)
    carrito = carrito.filter((x) => x.id !== selectedItem.id );
    generadorCarrito();
    localStorage.setItem("data", JSON.stringify(carrito))

}


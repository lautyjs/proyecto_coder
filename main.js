//const shopContent = document.getElementById("shopContent")
//const verCarrito = document.getElementById("verCarrito")
//const modalContainer = document.getElementById("modal-container")
const binID = '6574cd6a12a5d37659a589a1'
const apiKey = '$2a$10$p.jB7nS/OB8LfAMMRjfn.O4TWXUWqS9K6cLiXBn5PWx05IKkOTClK'
const url = `https://api.jsonbin.io/v3/b/${binID}`
const headers = {
    'X-Master-Key': apiKey
}
//peticion a productos
fetch(url, { headers })
    .then(response => response.json())
    .then(data => console.log(data.record))



//fin peticion
/*
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio}$ </p>
        `;

    shopContent.append(content)


    let comprar = document.createElement("button")
    comprar.className = "comprar";
    comprar.innerText = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        })
    })
});

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
*/
//  Promesas -> 3 estados: pendiente, rachazado, aceptada


export let products = [
    { id: 1, nombre: "Remera Chibi Rick", stock: "10", categoria: "diseños", precio: 4999, img: "https://rickandmortyshop.com/wp-content/uploads/2022/04/rick-t-shirt-gray-s-431-400x400.jpg", cantidad: 1 },
    { id: 2, nombre: "Gorro de lana Mr. Meeseeks", stock: "10", categoria: "diseños", precio: 3200, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/cute-mr-meeseeks-winter-knitted-hats-608-400x403.jpg", cantidad: 1 },
    { id: 3, nombre: "Figura de action Rick Sanchez", stock: "10", categoria: "personajes", precio: 4000, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/HTB16KqAX6DuK1RjSszdq6xGLpXa5-400x400.jpg", cantidad: 1 },
    { id: 4, nombre: "Piluso Free Rick", stock: "10", categoria: "diseños", precio: 3900, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/rick-and-morty-bucket-hat-free-yellow-284-400x400.jpg", cantidad: 1 },
    { id: 5, nombre: "Llavero Pickle Rick", stock: "10", categoria: "personajes", precio: 2199, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/FUNKO-Anime-Rick-keyring-Morty-Keychain-Mr-Meeseeks-Snowball-Pocket-Keychain-Action-Figure-Toys-Children-Xmas.jpg_Q90.jpg__3-400x400.jpg", cantidad: 1 },
    { id: 6, nombre: "Buzo Cara Morty", stock: "10", categoria: "diseños", precio: 9999, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/rick-and-morty-3d-hoodie-many-face-smith-athletic-aop-774-400x400.jpg", cantidad: 1 },
    { id: 7, nombre: "Figura de accion Morty Alien", stock: "10", categoria: "personajes", precio: 4000, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/100130-on9s4y-400x400.jpg", cantidad: 1 },
    { id: 8, nombre: "Funda Pickle Rick", stock: "10", categoria: "accesorios", precio: 2399, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/rick-morty-phone-case-youre-a-pickle-iphone-8-se-2020-slim-839-400x400.jpg", cantidad: 1 },
    { id: 9, nombre: "Remera Rick", stock: "10", categoria: "diseños", precio: 4999, img: "https://rickandmortyshop.com/wp-content/uploads/2021/08/Rick-and-Morty-Im-Not-Arguing-T-Shirt-Gray-400x400.jpg", cantidad: 1 },
    { id: 10, nombre: "Jordan Rick and Morty", stock: "10", categoria: "diseños", precio: 39999, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/rick-and-morty-jordan-sneakers-crazy-c137-men-us6-5-jd-706-400x400.jpg", cantidad: 1, },
    { id: 11, nombre: "Taza Darkest", stock: "10", categoria: "accesorios", precio: 3999, img: "https://rickandmortyshop.com/wp-content/uploads/2021/04/rick-morty-mug-welcome-to-the-darkest-year-of-our-adventures-coffee-285-400x400.jpg", cantidad: 1 },
    { id: 12, nombre: "Remera wubba lubba", stock: "10", categoria: "diseños", precio: 4999, img: "https://rickandmortyshop.com/wp-content/uploads/2022/08/rick-and-morty-wubba-lubba-t-shirt-561-400x400.jpg", cantidad: 1 },
];


export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        // acciones 
        setTimeout(() => {
            resolve(id ? products.find(prod => prod.id === parseInt (id)) : products)
        }, 1000)
    })
}

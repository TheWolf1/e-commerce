import { watchs } from "./relojes.js";
import { printWatchs } from "./printContent.js";
const productBody = document.querySelector("#productsBody");
const btnCarrito = document.querySelector("#btnCarrito");
const cartContent = document.querySelector("#cartContent");
printWatchs(productBody,watchs)


productBody.addEventListener('click',(e)=>{
    if (e.target.classList.contains('btn_add_cart')) {
        const id = e.target.parentElement.parentElement.id;
        console.log(id); 
    }
    
});


btnCarrito.addEventListener('click',(e)=>{
    cartContent.classList.toggle("show_carrito");
});
import { watchs } from "./relojes.js";
import { printWatchs, printInCart, cartArray, printAllCart } from "./printContent.js";





const productBody = document.querySelector("#productsBody");
const btnCarrito = document.querySelector("#btnCarrito");
const cartContent = document.querySelector("#cartContent");




printWatchs(productBody,watchs);


productBody.addEventListener('click',(e)=>{
    if (e.target.classList.contains('btn_add_cart')) {
        const id = e.target.parentElement.parentElement.id;
       
        printInCart(cartContent,watchs,id);


        
    }
    
});

cartContent.addEventListener("click",(e)=>{
    let parentId = e.target.parentElement.parentElement.parentElement.parentElement.id;
   
    if (e.target.id=="btnAdd") {
        addCart(parentId);
          
    }

    if (e.target.id=="btnRemove") {
         
        removeCart(parentId);  
    }

    if (e.target.id=="btnDelete") {
        delteCart(parentId);
    } 

});


function addCart(id) {
    cartArray[+id].amount++
    cartContent.innerHTML = printAllCart();
    
}

function removeCart(id) {
    if (cartArray[+id].amount>1) {
       cartArray[+id].amount--;
       cartContent.innerHTML = printAllCart(); 
    }
    
}

function delteCart(id) {
    delete cartArray[id];
    cartContent.innerHTML = printAllCart(); 
}


btnCarrito.addEventListener('click',(e)=>{
    cartContent.classList.toggle("show_carrito");
});
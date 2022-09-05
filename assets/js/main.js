import { watchs } from "./relojes.js";

const productBody = document.querySelector("#productsBody");
let html = ""

function printWatchs(element) {
    
    watchs.forEach((watch,index)=>{
        
        html += `
        <div class="products_body-item" id="${index}">
            <div class="item_img">
                <img src="${watch.url}" alt="">
            </div>
            <div class="item_info">
                <h3>${watch.nombre}</h3>
                <span>$${watch.precio}</span>
                <button>Agregar al carrito</button>
            </div>
        </div>
        `
    })  
    
    productBody.innerHTML = html
}


printWatchs(productBody)
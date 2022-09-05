let html =""

function printWatchs(element,watchs) {
    
    watchs.forEach((watch,index)=>{
        
        html += `
        <div class="products_body-item" id="${index}">
            <div class="item_img">
                <img src="${watch.url}" alt="">
            </div>
            <div class="item_info">
                <h3>${watch.nombre}</h3>
                <span>$${watch.precio}</span>
                <button class="btn_add_cart">Agregar al carrito</button>
            </div>
        </div>
        `
    })  
    
    element.innerHTML = html
}


function printInCart(element,watchs,id) {
    
}

export{
    printWatchs
}
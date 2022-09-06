let html =""
let cartArray = {};

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
    
    
    if (cartArray[id]) {
        cartArray[id].amount ++
    } else {
        
        cartArray[id] = watchs[id];
        cartArray[id].amount = 1; 
    }
    let htmlCart = printAllCart();
    
    element.innerHTML = htmlCart;
}

function printAllCart() {
    let htmlCart = '';
    for (const i in cartArray) {

        htmlCart += `
        <div class="card_item" id="${cartArray[i].id}">
            <div class="card_info" >
                <img src="${cartArray[i].url}" alt="">
                <div class="card_title">
                    <h4>${cartArray[i].nombre}</h4>
                    <span>$${cartArray[i].precio}</span>
                    <div class="card_buttons">
                        <button class="btn" id="btnRemove">-</button>
                        <span>${cartArray[i].amount}</span> 
                        <button class="btn"  id="btnAdd">+</button>
                        <i class="fa fa-trash" id="btnDelete"></i>
                    </div>
                    
                </div>
            </div>

        </div>
        `;
    }
    return htmlCart;
}

export{
    printWatchs,
    printInCart,
    printAllCart,
    cartArray
}
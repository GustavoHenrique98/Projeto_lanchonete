function getDOM(query){
    return document.getElementById(query);
}
const cart={
    cart__container:getDOM('cart'),
    cart__produtcs:getDOM('cart__products'),
    btn_open:getDOM('openCart'),
    btn_close:getDOM('close__cart'),
    btn_send:getDOM('send__request')

}

cart.btn_open.addEventListener('click',()=>{
    cart.cart__container.style.display="block";
});

cart.btn_close.addEventListener('click',()=>{
    cart.cart__container.style.display="none";
});




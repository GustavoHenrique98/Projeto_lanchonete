let btnOpen = document.getElementById('openCart');
let btnClose = document.getElementById('closeCart');
let btnEncaminahr = document.getElementById('sendRequest');
let cart = document.getElementById('cart');

btnOpen.addEventListener('click', () => {
    cart.style.display = 'block';
    setTimeout(() => {
        cart.style.width = '30%'; 
    }, 10); 
    setTimeout(()=>{
        btnClose.style.display="block";
        btnEncaminahr.style.display="block"

    },800)
});

btnClose.addEventListener('click', () => {
    cart.style.width = '0%';
    btnClose.style.display="none"
    btnEncaminahr.style.display="none"
    setTimeout(() => {
        cart.style.display = 'none';
    }, 800);

});
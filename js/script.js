document.addEventListener('DOMContentLoaded', () =>{
    const compbtn = document.querySelectorAll('.compra-btn');

    compbtn.forEach(button => {
        button.addEventListener('click', () =>{
            const card = button.closest('.card');
            const pname = card.getAttribute('data-nome');
            const ppreco = parseFloat(card.getAttribute('data-price'));
            const produto = {
                nome: pname,
                preco: ppreco,
            };
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(produto)
            localStorage.setItem('cart',JSON.stringify(cart));
            alert(`${pname} foi adicionado ao carrinho`)


        })
    })
    const itemcart = document.getElementById('card-items-container');
    const cartvalue = document.getElementById('card-total-value');
    const checkout = document.getElementById('checkout-btn');

    if (itemcart) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;
        if (cart.length == 0) {
            console.log("tienes nada")
        } else {
            console.log("tienes algo")
            itemcart.innerHTML = "";
            cart.forEach(produto =>{
                const cartitem = document.createElement('div');
                console.log("isso funfa")
                cartitem.classList.add('cart-item');
                cartitem.innerHTML = `
                <span>${produto.nome}</span>
                <span>R$ ${produto.preco.toFixed(2)}</span>
                `
                itemcart.appendChild(cartitem)
                total += produto.price;
            }) 
        }
        cartvalue.textContent = `R$ ${total.toFixed(2)}`;
    }
    const 

})
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
    
})
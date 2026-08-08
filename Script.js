let cart = [];

function addToCart(productName, price) {
    let product = {
        name: productName,
        price: price
    };

    cart.push(product);

    alert(productName + " added to cart!");

    console.log(cart);
}

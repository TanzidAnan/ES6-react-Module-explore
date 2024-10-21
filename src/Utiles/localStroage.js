const getStrogeCart = () => {
    const strogeCartString = localStorage.getItem('cart');
    if (strogeCartString) {
        return JSON.parse(strogeCartString)
    }
    return [];
}
const saveCartToLS = cart => {
    const cardStringfiy = JSON.stringify(cart);
    localStorage.setItem('cart', cardStringfiy)
}

const addToLS = (id) => {
    const cart = getStrogeCart();
    cart.push(id);
    saveCartToLS(cart);
}

export { addToLS, getStrogeCart}
import './cart.css'
const Cart = ({cart}) => {
    // console.log(cart)
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className='img-name'>
                {
                    cart.map(buttole =><img src={buttole.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;
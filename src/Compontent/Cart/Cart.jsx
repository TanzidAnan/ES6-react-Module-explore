import PropTypes from 'prop-types';
import './cart.css'

const Cart = ({cart,hendleRemoveCart}) => {
    // console.log(cart)
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className='img-name'>
                {
                    cart.map(buttole =><div key={cart.id}>
                        <img  src={buttole.img}></img>
                        <button onClick={()=>hendleRemoveCart(buttole.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes= {
    cart:PropTypes.array.isRequired,
    hendleRemoveCart:PropTypes.func.isRequired
}

export default Cart;
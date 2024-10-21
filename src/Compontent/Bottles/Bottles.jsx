import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStrogeCart } from "../../Utiles/localStroage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('water.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    useEffect(() => {
        if (bottles.length > 0) {
            const stroedCart = getStrogeCart();
            // console.log(stroedCart,bottles)
            const saveCart =[];
            for(const id of stroedCart){
                // console.log(id);
                const buttlo =bottles.find(buttlo => buttlo.id ===id);
                // console.log(buttlo)
                if(buttlo){
                    saveCart.push(buttlo)
                }
            }
            // console.log(saveCart);
            setCart(saveCart)
        }
    }, [bottles])

    const hendleAddTocard = (bottle) => {
        const newCart = [...cart, bottle];
        // setCart(newCart)
        addToLS(bottle.id)
    }

    return (
        <div className="bottle-container">
            <h1>Bottles {bottles.length}</h1>
            <Cart cart={cart}></Cart>
            
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        hendleAddTocard={hendleAddTocard}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;
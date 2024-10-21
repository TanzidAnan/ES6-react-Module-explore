import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS } from "../../Utiles/localStroage";

const Bottles = () => {
    const [bottles, setBottles] =useState([]);
    const [cart,setCart] =useState([])
    useEffect(() =>{
        fetch('water.json')
        .then(res =>res.json())
        .then(data => setBottles(data))
    },[])

    const hendleAddTocard =(bottle) =>{
        const newCart =[...cart,bottle];
        setCart(newCart)
        addToLS(bottle.id)
    }

    return (
        <div className="bottle-container">
            <h1>Bottles {bottles.length}</h1>
            <h6>Cart: {cart.length}</h6>
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
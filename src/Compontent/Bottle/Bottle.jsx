import { useState } from 'react';
import './Bottle.css'
const Bottle = ({bottle}) => {
    const {name, img, price} =bottle
    // console.log(bottle);
    const [data,setData] =useState(false);
    const hendleButton =() =>{
        setData(!data)
        console.log(data)
    }
    return (
        <div className="bottle">
        <h3>Bottle {name}</h3>    
        <img src={img} alt="" />
        <button onClick={hendleButton} className='btn-price'> {data?"Price : "+price: "Add"}</button>
        </div>
    );
};

export default Bottle;
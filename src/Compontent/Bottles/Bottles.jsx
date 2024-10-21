import { useEffect } from "react";
import { useState } from "react";

const Bottles = () => {
    const [bottles, setBottles] =useState([]);
    useEffect(() =>{
        fetch('water.json')
        .then(res =>res.json())
        .then(data => setBottles(data))
    },[])
    return (
        <div>
            <h1>Bottles {bottles.length}</h1>
        </div>
    );
};

export default Bottles;
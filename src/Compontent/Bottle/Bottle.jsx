import PropTypes from 'prop-types';
import { useState } from 'react';
import './Bottle.css'
const Bottle = ({ bottle,hendleAddTocard }) => {
    const { name, img, price } = bottle;
    // console.log(bottle);
    const [data, setData] = useState(false);
    const hendleButton = () => {
        setData(!data);

    }
    
    return (
        <div className="bottle">
            <h3>Bottle {name}</h3>
            <img src={img} alt="" />
            <div style={{display:'flex', gap:'15px'}}>
            <button onClick={hendleButton} className='btn-price'> {!data ? "Price : " + price : "Add"}</button>
            <button onClick={() =>hendleAddTocard(bottle)} className='btn-Add'>Purchase</button>
            </div>
        </div>
    );
};
Bottle.propTypes={
    bottle:PropTypes.object.isRequired,
    hendleAddTocard:PropTypes.func.isRequired
}

export default Bottle;
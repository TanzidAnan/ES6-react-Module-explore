
const Watch = ({watch}) => {
    const {name,price} =watch
    return (
        <div>
            <h2>Watch Data : {name}</h2>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;
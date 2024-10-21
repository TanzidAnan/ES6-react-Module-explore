import { add, multy } from "../../Utiles/Calculate";


const Sungless = () => {

    const fast = 50;
    const second =120;
    const sum = add(fast,second);
    const multys =multy(fast,second);
    console.log(multys)
    console.log(sum)

    return (
        <div>
            
        </div>
    );
};

export default Sungless;
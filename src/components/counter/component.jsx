import { useState } from "react";

const useCount = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount((prevState) => prevState + 1);
    };
    const decrement = () => {
      setCount((prevState) => prevState > 0 ? prevState - 1 : 0);
    };
  
    return {
      count,
      increment,
      decrement,
    };
};

export const Counter = () => {
    const { count, decrement, increment } = useCount();
    return (
        <div style={{display: "flex", flexDirection: "row", width: '15rem', justifyContent: "space-around", alignItems: "center"}}>
            <h4>Кол-во: </h4>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    );
}
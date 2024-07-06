import { useCallback, useState } from "react";

const useCount = (minValue, maxValue, onChange) => {
    const min = minValue ? minValue : 0;
    const max = maxValue ? maxValue : 5;
    const [count, setCount] = useState(0);
  
    const increment = useCallback(() => {
      setCount((prevState) => {
        const currentValue = prevState < max ? prevState + 1 : prevState;
        if (onChange) onChange(currentValue);
        return currentValue;
    });
    }, []);
    const decrement = useCallback(() => {
      setCount((prevState) => {
        const currentValue = prevState > min ? prevState - 1 : min;
        if (onChange) onChange(currentValue);
        return currentValue;
    });
    }, []);
  
    return {
      count,
      increment,
      decrement,
    };
};

export const Counter = ({minValue, maxValue, onChange}) => {
    const { count, decrement, increment } = useCount(minValue, maxValue, onChange);
    return (
        <div style={{display: "flex", flexDirection: "row", width: '15rem', justifyContent: "space-around", alignItems: "center"}}>
            <h4>Кол-во: </h4>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    );
}
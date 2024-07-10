import { useState, useCallback } from "react";

const config = {
    minValue: 0,
    maxValue: 5
};

export const useCount = () => {
    const [count, setCount] = useState(0);
  
    const increment = useCallback(() => {
      setCount((prevState) => {
        const currentValue = Math.min(config.maxValue, prevState + 1);
        return currentValue;
    });
    }, []);
    const decrement = useCallback(() => {
      setCount((prevState) => {
        const currentValue = Math.max(config.minValue, prevState - 1);
        return currentValue;
    });
    }, []);
  
    return {
      count,
      increment,
      decrement,
    };
};
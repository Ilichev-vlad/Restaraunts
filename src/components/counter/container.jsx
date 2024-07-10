import { Counter } from "./component";
import { useCount } from "./hooks";

export const CounterContainer = () => {
    const { count, decrement, increment } = useCount();


    return (
        <Counter value={count} decrement={decrement} increment={increment} />
    );
}
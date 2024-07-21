import { Button } from "../button/component";

export const Counter = ({value, increment, decrement}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", width: '15rem', justifyContent: "space-around", alignItems: "center"}}>
            <h4>Кол-во: </h4>
            <Button text='+' onClickHandler={increment} />
            {value}
            <Button text='-' onClickHandler={decrement} />
        </div>
    );
}
import { CounterContainer } from "../counter/container"

export const Menu = ({name, price}) => {
    return (
        <li>
            <div>
                <h4>Наименование: {name} || Цена: {price}</h4>
                <CounterContainer/>
            </div>
        </li>
    )
}
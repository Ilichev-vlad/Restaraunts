import { CounterContainer } from "../counter/container";

export const Menu = ({menu}) => {

    if (!menu?.length) {
        return null;
    }

    const menuItems = menu.map(({name, price}) => {
        return (
            <li>
                <div>
                    <h4>Наименование: {name} || Цена: {price}</h4>
                    <CounterContainer/>
                </div>
            </li>
        )
    });

    return (
        <div>
            <h3>MENU</h3>
            <div>{ menuItems?.length ? (<ul>{menuItems}</ul>) : 'Menu is empty' }</div>
        </div>
    );
}
import { CounterContainer } from "../counter/container";
import styles from './styles.module.css';
import classNames from "classnames";

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
            <details className={classNames(styles.sectionWrapper)} open>
                <summary className={classNames(styles.sectionTitle)}>MENU</summary>
                { menuItems?.length ? (<ul>{menuItems}</ul>) : 'Menu is empty' }
            </details>
        </div>
    );
}
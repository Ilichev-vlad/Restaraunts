import { useTheme } from "../theme-context/component";

import styles from './styles.module.css';
import classNames from "classnames";

export const Button = ({text, onClickHandler}) => {

    const { value: themeMode } = useTheme();

    return (
        <button className={classNames({
            [styles.default]: themeMode === "default",
            [styles.custom]: themeMode === "custom",
        })} 
        onClick={onClickHandler}>
        {text}
        </button>
    )
}
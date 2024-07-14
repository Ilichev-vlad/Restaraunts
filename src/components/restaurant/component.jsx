import { Menu } from "../menu/component";
import { Reviews } from "../review/component";
import styles from './styles.module.css';
import classNames from "classnames";

export const Restaurant = ({name, menu, reviews}) => {
    return (
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles.title)}><h2>{name}</h2></div>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </div>
    );
}
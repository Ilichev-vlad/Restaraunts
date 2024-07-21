import { MenuListContainer } from "../menu-list/container";
import { ReviewListContainer } from "../review-list/container";
import styles from './styles.module.css';
import classNames from "classnames";

export const Restaurant = ({name, menu, reviews}) => {
    return (
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles.title)}><h2>{name}</h2></div>
            <MenuListContainer menuIds={menu} />
            <ReviewListContainer reviewIds={reviews} />
        </div>
    );
}
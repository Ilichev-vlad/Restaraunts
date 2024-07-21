import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dish"
import { Menu } from "./component";

export const MenuContainer = ({id}) => {
    const menu = useSelector((state) => selectDishById(state, id));

    if (!menu) {
        return null;
    }

    const {name, price} = menu;

    return (
        <Menu name={name} price={price} />
    )
}
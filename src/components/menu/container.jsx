import { useDispatch, useSelector } from "react-redux"
import { selectDishById, selectDishRequestStatus } from "../../redux/entities/dish/dish"
import { Menu } from "./component";
import { getDish } from "../../redux/entities/dish/get-dish";
import { useEffect } from "react";

export const MenuContainer = ({id}) => {
    const menu = useSelector((state) => selectDishById(state, id));
    const requestStatus = useSelector(selectDishRequestStatus);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getDish(id));
    }, [dispatch, id]);

    if (requestStatus === "idle" || requestStatus === "pending") {
        return "loading";
    }

    if (requestStatus === "rejected") {
        return "error";
    }

    if (!menu) {
        return null;
    }

    const {name, price} = menu;

    return (
        <Menu name={name} price={price} />
    )
}
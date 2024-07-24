import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurant";
import { TabBarItem } from "./component";

export const TabBarItemContainer = ({restaurantId, setCurrentRest}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!restaurant) return null;

    const {id, name} = restaurant;

    return (<TabBarItem id={id} name={name} setCurrentRest={setCurrentRest} ></TabBarItem>)
};
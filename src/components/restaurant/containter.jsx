import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurant";
import { Restaurant } from "./component";

export const RestaurantContainer = ({id}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) return null;

    const {name, menu, reviews} = restaurant;

    return (<Restaurant id={id} name={name} menu={menu} reviews={reviews}></Restaurant>);
};
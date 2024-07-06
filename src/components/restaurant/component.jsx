import { Menu } from "../menu/component";
import { Reviews } from "../review/component";

export const Restaurant = ({id, name, menu, reviews}) => {
    return (
        <div>
            <h2>{name}</h2>
            <Menu menu={menu} />
            <Reviews id={id} reviews={reviews} />
        </div>
    );
}
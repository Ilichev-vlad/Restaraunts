export const TabBar = ({restaurants, setCurrentRest}) => {
    const oTabBarItems = restaurants.map((restaurant) => {
        return (
            <button onClick={() => setCurrentRest(restaurant)}>{restaurant.name}</button>
        )
    });

    return (
        <div>
            {
                oTabBarItems?.length ? oTabBarItems : 'Restaraunts is Empty'
            }
        </div>
    );
}
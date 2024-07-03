export const TabBar = ({restaurants, setCurrentRest}) => {
    const getTabBarItems = () => restaurants.map((restaurant) => {
        return (
            <button onClick={() => setCurrentRest(restaurant)}>{restaurant.name}</button>
        )
    });

    return (
        <div>{restaurants?.length ? getTabBarItems() : 'Restaraunts is Empty'}</div>
    );
}
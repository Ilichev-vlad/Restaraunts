export const TabBar = ({restaurants, setCurrentRest}) => {

    if (!restaurants?.length) {
        return null;
    }

    const getTabBarItems = () => restaurants.map((restaurant) => {
        return (
            <button onClick={() => setCurrentRest(restaurant)}>{restaurant.name}</button>
        )
    });

    return (<div>{getTabBarItems()}</div>);
}
import styles from './styles.module.css';
import classNames from 'classnames';

export const TabBar = ({restaurants, setCurrentRest}) => {

    if (!restaurants?.length) {
        return null;
    }

    const getTabBarItems = () => restaurants.map((restaurant) => {
        return (
            <button 
                className={classNames(styles.tabBarItems)} 
                onClick={() => setCurrentRest(restaurant)}>{restaurant.name}
                
            </button>
        )
    });

    return (
        <div className={classNames(styles.tabBar, styles.sticky)}>
            {getTabBarItems()}
        </div>
    );
}
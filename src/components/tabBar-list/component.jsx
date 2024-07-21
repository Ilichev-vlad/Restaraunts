import { TabBarItemContainer } from '../tabBar-item/container';
import styles from './styles.module.css';
import classNames from 'classnames';

export const TabBarList = ({restaurantIds, setCurrentRest}) => {
    return (
        <div className={classNames(styles.tabBar, styles.sticky)}>
            {restaurantIds.map((id) => {
                return (
                    <TabBarItemContainer 
                        key={id} 
                        restaurantId={id} 
                        setCurrentRest={setCurrentRest} 
                    />
                )
            })}
        </div>
    );
}
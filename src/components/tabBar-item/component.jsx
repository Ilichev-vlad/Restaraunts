import styles from './styles.module.css';

export const TabBarItem = ({id, name, setCurrentRest}) => {
    return (
        <button 
            key={id}
            className={styles.tabBarItem} 
            onClick={() => setCurrentRest(id)}>
            {name}
        </button>
    )
}
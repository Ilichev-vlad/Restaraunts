import { MenuContainer } from '../menu/container';
import styles from './styles.module.css';

export const MenuList = ({menuIds}) => {
    return (
        <div>
            <details className={styles.sectionWrapper} open>
                <summary className={styles.sectionTitle}>MENU</summary>
                { menuIds.map((id) => <MenuContainer key={id} id={id}/>) }
            </details>
        </div>
    );
}
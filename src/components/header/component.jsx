import { ScrollProgress } from "../scroll-progress/component";
import { ToggleThemeButton } from "../toggle-theme-button/component";
import { UserSection } from "../user-section/component";

import styles from './styles.module.css';

export const Header = () => {
    return (
        <header>
            <div className={styles.headerWrapper}>
                <div className={styles.headerToolbar}>
                    <ToggleThemeButton width='8rem'/>
                    <UserSection></UserSection>
                </div>
                <ScrollProgress />
            </div>
        </header>
    );
};
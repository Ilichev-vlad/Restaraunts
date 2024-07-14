import { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";

import styles from './styles.module.css';
import classNames from "classnames";

const calculateScrollProgress = ({scrollHeight, innerHeight, scrollY}) => {
    return scrollY / (scrollHeight - innerHeight) * 100;
};

const useProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handler = throttle(30, () => {
            const value = calculateScrollProgress({
                scrollHeight: document.documentElement.scrollHeight,
                innerHeight: window.innerHeight,
                scrollY: window.scrollY
            });

            setProgress(value);
        });

        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
    });

    return progress;
};

export const ScrollProgress = () => {
    const percentage = useProgressBar();

    return (
        <div 
            className={classNames(styles.progressBar)}
            style={{width: `${percentage}%`}}></div>
    )
};
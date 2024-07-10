import { useEffect, useState } from "react";

const calculateScrollProgress = ({scrollHeight, innerHeight, scrollY}) => {
    return scrollY / (scrollHeight - innerHeight) * 100;
};

const useProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handler = () => {
            const value = calculateScrollProgress({
                scrollHeight: document.documentElement.scrollHeight,
                innerHeight: window.innerHeight,
                scrollY: window.scrollY
            });

            setProgress(value);
        }

        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
    });

    return progress;
};

export const ScrollProgress = () => {
    const percentage = useProgressBar();

    return (
        <div style={{
            height: '10px', 
            position: 'fixed', 
            left: '0', 
            top: '0', 
            backgroundColor: 'red', 
            width: `${percentage}%`
        }}></div>
    )
};
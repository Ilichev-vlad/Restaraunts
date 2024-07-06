import { useEffect, useState } from "react"

export const ScrollProgress = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const y = typeof window.scrollY === 'undefined'
                ? window.pageYOffset
                : window.scrollY;
            
            const progress = y === 0
                ? 0
                : y / (document.body.scrollHeight - window.innerHeight);

            setPercentage(progress * 100);
        });
    }, []);

    return (
        <div style={{
            height: '10px', 
            position: 'fixed', 
            left: '0', 
            top: '0', 
            backgroundColor: 'red', 
            width: percentage + '%'
        }}></div>
    )
};
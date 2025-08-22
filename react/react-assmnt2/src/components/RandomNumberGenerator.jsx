import React, { useState, useEffect } from "react";


const RandomNumberGenerator = () => {
    const [num, setNum] = useState(1);

    const GetColor = (n) => {
        if (n <= 25) return 'green';
        if (n <= 30) return 'yellow';
        if (n <= 50) return 'orange';
        if (n <= 75) return 'pink';
        return 'red';
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setNum(Math.floor(Math.random() * 100) + 1);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div style={{color: GetColor(num)}}>{num}</div>;
};

export default RandomNumberGenerator;
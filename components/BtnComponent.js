
// ButtonComponent.js
import React, { useState } from 'react';

const ButtonComponent = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>Button clicked {clickCount} times.</p>
        </div>
    );
};

export default ButtonComponent;

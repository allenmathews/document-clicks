import React, {useState, useEffect} from 'react';

export default function Counter(){
const [clickCount, setClickCount] = useState(0);

const increment = () => {
    setClickCount((prev) => prev + 1)
}

useEffect(() => {
    document.addEventListener('mousedown', increment);
    return() => {
    document.addEventListener('mousedown', increment);
    }
});
    return (
        <h1>The document was clicked {clickCount} times</h1>
    )
}
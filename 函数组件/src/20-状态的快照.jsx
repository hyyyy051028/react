
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        setTimeout(() => {
            console.log(count);
        }, 5000);
    };

    return (
        <div>
            hello app
            <button onClick={handleClick}>点击</button>
        </div>
    );
}

export default App;

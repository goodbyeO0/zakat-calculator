import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Test() {
    const { setUser } = useContext(UserContext);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setUser({ name: inputValue });
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Set User</button>
        </div>
    );
}

export default Test;
import './App.css';
import validateString from './validateString';
import testFunction from "./testFunction";
import { useState } from 'react';

function App() {
    const [inputText, setInputText] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [maxLength, setMaxLength] = useState(20);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleValidation = () => {
        setIsValid(validateString(inputText, maxLength));
        testFunction();
    };

    const handleMaxLengthChange = (event) => {
        const inputLength = parseInt(event.target.value, 10);
        if (!isNaN(inputLength)) {
            setMaxLength(inputLength);
        }
    };

    return (
    <div>
        <label>
            Max Length:
            <input type="number" value={maxLength} onChange={handleMaxLengthChange} />
        </label>
        <br />
        <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your text here..."
        />
        <br />
        <button onClick={handleValidation}>Validate</button>
        {isValid ? <p>Input is valid!</p> : <p>Invalid input!</p>}
    </div>
    );
}

export default App;

import validateString from './validateString';
// Test cases
const testCases = [
    // Valid cases
    { input: "Abc123!@#", maxLength: 10 }, // true
    { input: "Testing123!!", maxLength: 15 }, // true

    // Invalid cases
    { input: "1234567890", maxLength: 5 }, // false (doesn't contain uppercase letter)
    { input: "abcd!@#", maxLength: 5 }, // false (doesn't contain digit)
    { input: "ABCD!@#", maxLength: 5 }, // false (doesn't contain lowercase letter)
    { input: "Ab12", maxLength: 5 }, // false (string length too short)
    { input: "    Testing WithSpaces  ", maxLength: 20 }, // false (contains whitespace)
    { input: "SpecialCharacterOnly!!", maxLength: 30 }, // false (doesn't contain digit or letter)
    { input: "TooLongStringThatShouldNotMatch", maxLength: 5 } // false (string length too long)
];

export const testFunction = () => {
    testCases.forEach(({input, maxLength}) => {
        console.log(`"${input}" (Max Length: ${maxLength}) - Result: ${validateString(input, maxLength)}`);
    });
}

export default testFunction;
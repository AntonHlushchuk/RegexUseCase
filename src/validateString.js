const validateString = (inputString, maxLength) => {
    const regex = new RegExp(
        `^(?=[^\\s]*$)(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\\\\]^_\`{|}~])[\\s\\S]{1,${maxLength}}$`
    );

    return regex.test(inputString) && inputString.length <= maxLength;
};

export default validateString;
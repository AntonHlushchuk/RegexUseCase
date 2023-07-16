# Application Description:
The developed application is a simple React component that allows users to input a text and set a maximum length for the input. The component provides real-time validation to ensure that the input string meets specific criteria, including the presence of uppercase and lowercase letters, digits, special characters, and no whitespaces. Additionally, the component dynamically updates its output to indicate whether the input is valid or not. By leveraging regular expressions, the application efficiently performs the validation, optimizing execution speed and ensuring simplicity in the codebase. Users can interact with the component, input various strings, and adjust the maximum length dynamically, providing a user-friendly experience for validating text inputs in a wide range of scenarios.

# Regex Implementation Description:
The implementation is divided into five distinct regex categories: whitespace, uppercase letter, lowercase letter, digit, and special characters. Each category is represented by a separate regex pair that defines the required pattern. By using positive lookahead assertions, the regular expression ensures that the input string contains at least one character from each category. The regex also incorporates the concept of quantifiers, allowing flexibility in the occurrence of certain character types while still enforcing the overall criteria. The use of anchors, such as ^ and $, guarantees that the entire input string is matched, preventing partial matches. The regex is then combined into a single expression, including the maximum length constraint, to validate the complete input string against all criteria.

# How to Run:
To run the developed application locally, follow these steps:

* Clone the project repository from GitHub (or download and extract the ZIP file).
* Ensure that you have Node.js and npm (Node Package Manager) installed on your machine.
* Open a terminal or command prompt and navigate to the project directory.
* Install the required dependencies by running the command: `npm install / yarn`.
* Once the dependencies are installed, start the development server with: `npm start / yarn start`.

The application should now be running on http://localhost:3000 by default.

Open your web browser and visit http://localhost:3000 to interact with the application.

You can input text into the main input field, change the maximum length using the separate input, and click the "Validate" button to see the validation result.

By following these steps, you can easily set up and test the developed React component locally on your machine.
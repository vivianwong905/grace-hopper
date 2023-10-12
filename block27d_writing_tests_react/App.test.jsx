/**
 * @jest-environment jsdom
 */
// see here for more details: https://github.com/FullstackAcademy/2306-GHP-ET-WEB-PT-SF/tree/main/lessons/block27d-react-testing/demo
// STEP 1: IMPORT DEPENDENCIES
// import the necessary dependencies for our tests
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import extensions to Jest expect
import "@testing-library/jest-dom/extend-expect";

// STEP 2: Import the component to be tested
import App from '../App';

// STEP 3: Create a test suite
describe("<App />", () => {

    // STEP 4: Write test cases

    // Test: that the component renders
    test("renders the App component", () => {
        const app = render(<App />);
        expect(app).not.toBe(null);
    });

    // Test: that the button renders with the correct props
    it("contains a button with correct text", () => {
        // render the App component
        const app = render(<App />);

        // Find the button element with the text "count is 0"
        // Option 1: find the button in "screen" (imported from React testing library)
        // Option 2: (preferred) find the button inside the app component
        const button = app.getByText("count is 0");

        // assert that the button exists in the Document
        expect(button).toBeInTheDocument();
    });

    // Test: that the button label updates when clicked
    it("contains a button that increments count and displays correct count in the label", () => {
        // render the App component
        const app = render(<App />);

        // Find the button element with the text "count is 0"
        // Option 1: find the button in "screen" (imported from React testing library)
        // Option 2: (preferred) find the button inside the app component
        const button = app.getByText("count is 0");

        // Simulate a click event on the button
        fireEvent.click(button);

        // Assert that the button's text changed to "count is 1"
        expect(button).toHaveTextContent("count is 1");
    })

     // Test: that the button label updates when clicked
     it("the button updates the count when clicked multiple times", () => {
        // render the App component
        const app = render(<App />);

        // Find the button element with the text "count is 0"
        // Option 1: find the button in "screen" (imported from React testing library)
        // Option 2: (preferred) find the button inside the app component
        const button = app.getByText("count is 0");

        // Simulate 3 click events on the button
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        // Assert that the button's text changed to "count is 3"
        expect(button).toHaveTextContent("count is 3");
    });

});
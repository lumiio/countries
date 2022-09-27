# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Additional Items to Tackle

- Current filter and sort components are non-tracking, would at the very least make them tracking so a clear sort/filter button could be added.
- Additional sorting and filtering fields, maybe sorting and filtering on multiple fields.
- Probably a better way to display the data (a table most likely, for easier filtering and sorting UI as well), this list was just the quickest and lightest way I could think of
- If this were something I was in control of, would perfer to have done the sorting in the backend.
- Some sort of lazy load implementation.
- Make the page more mobile friendly
- More unit tests in general
- Not as familiar with graphql as I'd like to be, so would have spent some time looking into if this implementation is the most efficent way or not (saw useLazyQuery was a thing). Also for this project in particular, since the data is static, not fetching a fresh set of data per render would've made a lot more sense.
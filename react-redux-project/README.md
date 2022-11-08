# Employee Polling

This project is a react-redux app as part of the Udacity course. This app allows for users to log in to their accounts and view polls created by other employees. An individual can see polls, create polls, and view themselves on a leadboard based on amount of questions answered and created. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

All required npm libraries are listed in the package-lock.json running an npm install should automatically install all dependencies needed. 

* [npm](https://nodejs.org/en/download/) - Installing Node

### Installing

Running npm install in your terminal

```
npm install
```

## Running the tests

Jest tools should alread be installed after npm install so you can run the test start command
```
npm test
```
and then entering a to begin your test runs
```
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
 ```
### Break down into end to end tests

These tests consist of validating our _DATA.js file which acts as a mock API. As well as practicing with snapshot and event firing.

```
describe('getusers', () => {
    it('go the users', async() => {
        var l = 4;
        var result = await _getUsers();

        expect(Object.keys(result).length).toEqual(l);
    })
})
```

## Deployment

To start the project, run npm start in the terminal
```
npm start
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Redux](https://redux.js.org/) - State management framework
* [Jest](https://jestjs.io/docs/tutorial-react) - Testing framework

## Authors

* **Alex Frljuckic** 

## License

This project is distributed by Udacity [Udacity](https://www.udacity.com/)

## Acknowledgments

* Thanks to the Udacity reviewers

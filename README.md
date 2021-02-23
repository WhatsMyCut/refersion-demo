# refersion-demo

This repository is a code exercise for Refersion by Mike Taylor, Feb 22, 2021

## Instructions

Download the design Sketch  [file:](http://cloud.refersion.com/c15a5d94bcfb) (or [PDF](http://cloud.refersion.com/c9f1b8302135/weatherapp.pdf) ).

In the Sketch file, you’ll see the design along with a duplicate containing notes which detail the data that should be used from the API response. For example “name”, refers to  object.

To get the current data, please use this API: [openweathermap.org](https://api.openweathermap.org/data/2.5/weather?zip=10036,us&appid=709847967f5e54b97308c1b2cae4dee5)

The API also provides an icon code. The mapping is described . For example, a code “10d” would link to [this](http://openweathermap.org/img/w/10d.png) icon.

Your React app should call this API upon load or when the button is clicked, be well organized (.jsx, .css, .scss files etc.), and be able to run locally with minimal effort (usually via an “npm build” command defined in a package.json file).

##### You will be graded on

That the design is pixel-perfect. Elements like fonts should match, margins/paddings should be identical to the Sketch design as possible.

Your JS code should be well organized and logical. A bad implementation would be unnecessary nested if-statements, as an example.
## Developer Notes

- Initial code cleanup performed using VSCode Extension (nomadjsdev.cra-tasks-after-init)
- Includes basic Jest tests included with CRA, modified for this app.
- `/src/Components/index.js` is used to keep 'private' and 'protected' components separate.
- While developing the calls to the API, a loop was created that overran the quota for the app. I am receiving the error `GET https://api.openweathermap.org/data/2.5/weather?zip=10036,us&appid=709847967f5e54b97308c1b2cae4dee5 429 (Too Many Requests)`
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

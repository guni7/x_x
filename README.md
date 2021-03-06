# (x_x)

# The contracts for this project can be found here 
  https://github.com/guni7/x_x-contracts

# About the project - 

This dapp allows you to create a smart contract based will for your crypto assets.

It currently supports FA1.2 tokens. 
  
The smart contract has 3 entrypoints.
 1) create user
 This is used to create and update a user's profile. A user's profile contains details about the assets that the user owns and their distribution details.

 2) update trigger 
 This is used to reset the dead man's switch by 6 months (1 day for testing purposes)
 
 3) run transfers 
 This is used to execute transfers to beneficiary accounts when the switch is triggered. This is triggered once everyday from a server.

NOTE- 
This frontend is configured for Ithicanet. Some test tokens from the faucet tend to not have a "symbol" or a "same" property. This can cause problems during testing. To circumvent this, you can hardcode and associate the "id" property when tokens are fetched from tzkt to already existing tokens as done in libs/utils.ts lines 8 - 14.



# Getting Started with Create React App

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

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Getting Started with Redstone Create React App

This project was bootstrapped with Redstone's [Create React App](https://github.com/facebook/create-react-app) template.

## Demonstrated Functionality

### Redstone Identity

Demonstrates login/logoff capabilities from [Redstone Identity](https://wbmi.visualstudio.com/WB/_git/Technology.WebFramework.Identity?path=/redstone.identity.app.react).

> :warning: You must update [config.ts](https://wbmi.visualstudio.com/WB/_git/Technology.WebFramework.DevOps?path=/redstone.devops.react.templates/cra-template-redstone/template/src/config.ts) with Auth Server settings

### Redstone App Fabric Http Interceptor

Displays X-Correlation-ID, X-Application-ID, and Authorization headers that are injected by [Redstone App Fabric Http Interceptor](https://wbmi.visualstudio.com/WB/_git/Technology.WebFramework.AppFabric?path=/redstone.appfabric.app.httpinterceptor.react)

### React Query

Demonstrates a useQuery from [React Query](https://react-query-v3.tanstack.com/).

### Linting and Prettier

Applies linting and prettier rules.
Automatically extends prettier's vs code integration

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

This will run linting over all the js/ts/tsx files.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze`

This will analyze the size of the build files.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

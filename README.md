This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to Embed asciidocs into react components

### Project Setup
```bash
create-react-app ui
cd ui
yarn add -D react-app-rewired raw-loader
yarn add react-asciidoc
```

### Webpack Configuration
```javascript
module.exports = function override(config, env) {
  config.module.rules.find(e => e.oneOf).oneOf.unshift(
    {
      test: /\.adoc$/i,
      use: 'raw-loader',
    }
  )
  return config;
}

```

Edit pckage.json
```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

### CSS
https://github.com/bman917/reactjs-asiidoctor/blob/master/src/App.css


### Sample Code
```javascript
import React from 'react';
import './App.css';
import Asciidoc from 'react-asciidoc';
import content from './file.adoc';
function App() {
  return (
    <div>
      <Asciidoc className="asciidoc">{content}</Asciidoc>
    </div>
  );
}
export default App;
```

### Run
```bash
yarn build
yarn start
```

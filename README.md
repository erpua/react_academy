# REACT ( node 14 ++ )

---
Links:
- https://react-redux.js.org/api/hooks
- https://v5.reactrouter.com/web/api/Hooks

TIPS:

- manual path changing, through render() => autoomatically is changing path of components

- CMND + SHIFT + FORWARD SLASH => comment / uncomment block of code with double forward slashes

- git push --set-upstream origin 07-react-router

- keep state in nearest parent, or global one (in case of many dif children),
  component.

  - REACT has render fase and commit fase => that is why in each method with
    console it appears double console. React compairs real DOM and virtual DOM.

- https://github.com/fedosejev?tab=repositories

- https://github.com/pdffiller/selectors-samples

- Octotree - GitHub code tree

- clear after: https requests, timers, addEventListeners

- if Switch or other library not found in npm packges => possible solution might
  be to uninstall current version and install earlier / later:

I also faced the same problem, and I searched towards the Internet so much, but
I didn't get any answer according to my question.

So I uninstalled the version 6 of react-router-dom:

npm uninstall react-router-dom And installed version 5.2.0 of react-router-dom:

npm install react-router-dom@5.2.0

---

- port change for back-end in json: "api-server": "json-server --delay 200
  --port 4040 --watch db.json"

- Backend heroku: https://www.youtube.com/watch?v=SWbUTOmT-gg

- https://goit-phonebook-api.herokuapp.com/docs/ => school backend

---

- Optional chaining operator: (
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  )
- /_ const x = { a: 3, }; _/
- console.log(x?.a || 'oopsy dayzi');

const x = { b: 3, };

- //chaining operator
- //if x.a exists => console x.a itself
- //if x.a is differrent => console oopsy dayzi,
- //if x.a does not exist => do not reffer as an error

---

- let customer = { name: "Carl", details: { age: 82 } };

- const customerCity = customer?.city ?? "Unknown city";
- console.log(customerCity); // Unknown city

---

- <!-- http://localhost:4040/authors?_embed=books: -->

  http://localhost:4040/authors => authors; http://localhost:4040/books => only
  books back-end
  <!--  http://localhost:4040/authors?_embed=books => authors together w books -->

  - <!-- http://localhost:4040/authors/2?_embed=books --> => author with id=2 and all his library included

  ***

  - <!-- http://localhost:4040/books?_expand=author --> => each book with expanded author

---

- REDUX ( https://redux.js.org/ )
- REACT hooks: https://ru.reactjs.org/docs/hooks-intro.html

---

JSON:

- "window.zoomLevel": 0,
- "editor.renderWhitespace": "all",
- "editor.wordWrap": "wordWrapColumn",
- "[html]": { "editor.defaultFormatter": "vscode.html-language-features" },
- "editor.defaultFormatter": "esbenp.prettier-vscode",
- "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
- "prettier.trailingComma": "all",
- "prettier.singleQuote": true,
- "editor.minimap.enabled": false,
- "css.validate": false,
- "scss.validate": false,
- "editor.formatOnPaste": true,
- "editor.detectIndentation": false,
- "editor.folding": true,
- "editor.glyphMargin": false,
- "editor.smoothScrolling": true,
- "workbench.editor.tabSizing": "shrink",
- "files.associations": {},
- "files.autoSave": "onFocusChange",
- "editor.formatOnSave": true,
- "editor.codeActionsOnSave": { "source.fixAll.eslint": true } }

VSCode extentions:

- Prettier
- Formatting Toggle
- Highlight Matching Tag
- Path Intellisense
- Babel JavaScript
- ES7 + React/Redux ...
- Enable ESLint in workspace
- Bracket Pair Colorizer
- Traling Spaces
- HTML Hint
- Material Icon Theme

---

INSTALLATIONS:

- git clone repo
- cd cloned repo
- npx create-react-app .
- npm install react-scripts@latest
- npm install --save-dev prop-types
- npm install classnames

// prettier - for formatting // husky and lint-staged for connecting to git
during commit and making extra operations for developing

- npm install --save-dev prettier husky lint-staged
- create file .huskyrc
- create file .lintstagedrc
- create file .pretierrc.json
- npm install modern-normalize => no link in html
- npm install node-sass --save
- npm i shortid
- npm install json-server (npm package for local backend) =>
  (https://github.com/typicode/json-server) {"scripts": { "start":
  "react-scripts start", "build": "react-scripts build", "test": "react-scripts
  test", "eject": "react-scripts eject", "api-server": "json-server --watch
  db.json" },} => "api-server": "json-server --delay 200 --watch db.json" =>
  immitation for delay of real backend (npm run api-server to up local
  json-server)
- npm install axios
- npm install react-router-dom ( https://reactrouter.com/ )
- npm i redux
- npm install react-redux
- npm install --save-dev redux-devtools-extension
- npm install @reduxjs/toolkit
- npm i --save redux-logger
- npm i redux-persist

---

REACT TOOLS:

- Chrome dev tools React: React Developer Tools Extension
- Chrome devtools for Redux:
  https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es-419EditCookies

---

- Boileplate for class example:
- import React, { Component } from 'react';
- import styles from './TodoList.module.css';

class TodoList extends Component {

//PROPS

- static defaultProps = {};

- static propTypes = {};

//STATE

- state = {};

//LifeCycles methods / not arrow function

- componentDidMount() {}
- componentDidUpdate() {}
- coomponentWillUnmount() {} ...

//LOGIC regular methods

//MARKUP

- render() { return ( <>

<p className={styles.todo}>TodoList component</p> </> ); } }

export default TodoList;

---

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn't feel obligated to use this
feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======

# REACT

> > > > > > > 03-states-n-events

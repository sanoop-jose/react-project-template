# react-project-template
Simple react project template that includes following features

* Customized webpack configuration
* Customized local server support 
* Sass support 
* Well defined react project folder structure
* Hot reloading
* Page routing Routing

## How to use
    Clone the project from https://github.com/sanoop-jose/react-project-template.git

    cd react-project-template
    npm install
    npm start 

    goto http://localhost:3000/

## Project folder structure
    src
    ├── app
    │  ├── actions
    │  ├── assets
    │  │   ├── images
    │  ├── components
    │  ├── containers
    │  ├── reducers
    │  │   ├── index.js
    │  │   ├── globalData
    │  ├── styles
    │  │   ├── app.scss
    │  │   ├── _variables.scss
    │  │   ├── _colors.scss
    │  │   ├── _font.scss
    │  ├── index.js
    │  ├── App.js
    ├── index.html
    └── index.js

## Routing

```js
import { BrowserRouter as Router, Route } from 'react-router-dom'

<Router>
  <Route path="/:filter?" component={App} />
</Router>
```

## SASS support

```css
@import 'variables';

body {
  background: $primaryBgColor;
  color: $primaryTextColor;
}
```
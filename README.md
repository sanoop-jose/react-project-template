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
    ├── actions
    ├── components
    ├── containers
    │   ├── App.js
    ├── images
    ├── reducers 
    ├── styles
    │   ├── app.scss
    │   ├── _variables.scss
    │   ├── _colors.scss
    │   ├── _font.scss
    ├── utils
    ├── index.html
    └── index.js

## Routing

```js
import { BrowserRouter as Router, Route } from 'react-router-dom'

<Router>
    <Route exact path="/" component={App}/>
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
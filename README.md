# Frontend Boilerplate with React, Redux & TypeScript

A bare minimum react-redux-webpack-typescript boilerplate with TodoMVC example. 

[Live demo](https://rokoroku.github.io/react-redux-typescript-boilerplate)

Note that this project does not include **Server-Side Rendering**, **Static code analysis**, **Testing Frameworks** and other stuffs that makes the package unnecessarily complicated. (e.g. yarn, tslint, jest, ...)  
If needed, please fork this repository and add your own that meets your requirements.

Ideal for creating React apps from the scratch.

See also: [react-mobx-typescript-boilerplate](https://github.com/rokoroku/react-mobx-typescript-boilerplate)

## Contains

- [x] [Typescript](https://www.typescriptlang.org/) 3
- [x] [React](https://facebook.github.io/react/) 16.8
- [x] [Redux](https://github.com/reactjs/redux) 4
- [x] [React Router](https://github.com/ReactTraining/react-router) 4.3
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [x] [TodoMVC example](http://todomvc.com)

### Build tools

- [x] [Webpack](https://webpack.github.io) 4
  - [x] [Tree Shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [x] [Typescript Loader](https://github.com/TypeStrong/ts-loader)
- [x] [PostCSS Loader](https://github.com/postcss/postcss-loader)
  - [x] [PostCSS Preset Env](https://preset-env.cssdb.org/)
  - [x] [CSS modules](https://github.com/css-modules/css-modules)
- [x] [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [x] [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [x] [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin)

## Installation

```
$ npm ci
```

## Running

```
$ npm start
```

## Build

```
$ npm run build
```

## Deploy (to the [GitHub Pages](https://pages.github.com/))

```
$ npm run deploy
```

## Format code (using [Prettier](https://github.com/prettier/prettier))

```
$ npm run prettier
```

# License

MIT

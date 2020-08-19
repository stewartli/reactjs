
# Configure react, webpack, babel, tailwind, and express

## Goal

The repo is my reflection after I learn how to configure `React`,
`Webpack`, `Babel`, `Tailwind`, `Express`.

<details>

<summary> References </summary>
<a href="https://www.youtube.com/watch?v=SBB1YtwODT0">Web Development in
2020 - A complete roadmap</a>

</details>

## Procedures

Procedures is created after watching relevant YouTube videos. Those
links will be mentioned in each section.

### Node

Download nodejs from [nodejs.org/](https://nodejs.org/en/download/).  
Create a RStudio project.

```` markdown
```{r}
Sys.which("npm")
```
````

### Express

Create server-side `package.json` and install dependencies in the
project folder.

```` markdown
```{r}
system2("npm", c("init -y"))
system2("npm", c("i", "express", "concurrently"))
system2("npm", c("i", "-D", "nodemon"))
```
````

Modify server-side `package.json`.

1.  `"start": "node server.js"`,
2.  `"server": "nodemon server.js"`,
3.  `"client": "npm start --prefix client"`,
4.  `"dev": "concurrently \"npm run server\" \"npm run client\""`,

Create `server.js` and run express server (ctrl + c stop it).

```` markdown
```{r}
system2("touch", "server.js")
system2("npm", c("run", "server"))
```
````

<details>

<summary> References </summary>
<a href="https://www.youtube.com/watch?v=L72fhGm1tfE">Express JS Crash
Course 2019</a><br>
<a href="https://www.youtube.com/watch?v=v0t42xBIYIs">React & Express
Starter Pack 2018</a>

</details>

### React

Go to rstudio terminal.

1.  `mkdir client` folder,
2.  `cd client`,

You can use npx create-react-app .\` to create a react app.  
However, I don’t want to download all those stuffs. I will use the
following steps to create a react app.

1.  `npm init` create client-side `package.json`,
2.  `npm i react react-dom react-scripts` install dependencies.
3.  `mkdir public` and `touch index.html`
4.  `mkdir src` and `touch index.js` `touch app.js`

Create components.

1.  `cd src && mkdir components`,
2.  `cd components && touch customers.js`,
3.  `app.js` link to `customers.js`,
4.  `cd ..` back to client folder,

<details>

<summary> References </summary>
<a href="https://www.youtube.com/watch?v=sBws8MSXN7A">React JS Crash
Course 2019</a>

</details>

### Tailwind

1.  `npm i -D tailwindcss postcss-cli autoprefixer` install
    dependencies,
2.  `npx tailwind init tailwind.js --full` initialize tailwind,
3.  `touch postcss.config.js` create postcss configuration,
4.  `cd src && mkdir assets`
5.  `touch tailwind.css main.css`
6.  `cd ..`

Modify client-side `package.json`.

1.  `browserslist` added to `package.json`,
2.  `proxy` added to it,
3.  `"start": "npm run watch:css && react-scripts start"`,
4.  `"build": "npm run build:css && react-scripts build"`,
5.  `"test": "react-scripts test --env=jsdom"`,
6.  `"eject": "react-scripts eject"`,
7.  `"build:css": "postcss src/assets/tailwind.css -o
    src/assets/main.css"`,
8.  `"watch:css": "postcss src/assets/tailwind.css -o
    src/assets/main.css"`,
9.  `npm start`

<details>

<summary> References </summary>
<a href="https://www.youtube.com/watch?v=FiGmAI5e91M">React & Tailwind
CSS 2020</a>

</details>

### Webpack

**It does not show in this case**.

Install dependencies;

1.  `npm i -D webpack webpack-dev-server webpack-cli`,
2.  `npm i -D babel-core babel-loader babel-preset-env
    babel-preset-react`,
3.  `npm i -D html-webpack-plugin html-loader`,
4.  `npm i -D css-loader style-loader`,

Modify client-side package.json;

1.  `npm start`: `"start": "webpack-dev-server
    --output-public-path=/build/"`,
2.  `npm run build`: `"build": "webpack"`,

Create `webpack.config.js`;

1.  entry: `index.js`,  
2.  output: `bundle.js` inside of dist,
3.  loaders: babel. html,  
4.  plugins `html-webpack-plugin`: automatically create `index.html`

<details>

<summary> References </summary>
<a href="https://www.youtube.com/watch?v=deyxI-6C2u4">React & Webpack 4
From Scratch - No CLI</a><br>
<a href="https://www.youtube.com/watch?v=lziuNMk_8eQ">Webpack Crash
Course 2017</a><br>
<a href="https://github.com/babel/babel-loader/issues/616">Cannot find
module ‘babel-preset-env’</a><br>
<a href="https://www.robinwieruch.de/minimal-react-webpack-babel-setup">Set
up React, Webpack, Babel 2019</a><br>
<a href="https://www.valentinog.com/blog/babel/">Tutorial set up React,
webpack, Babel 2020</a>

</details>

### Concurrently

Back to the project folder and run.

```` markdown
```{r}
system2("npm", c("run", "dev"))
```
````

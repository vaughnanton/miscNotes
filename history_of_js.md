## Javascript History - From Inception through 2018

We'll start from the beginning and build an example website like the dinosaurs did - then we'll introduce different tools incrementally to see the problems that they solve one at a time.

Node/Webpack

####The Old School Way

Just include index.js in your HTML head!

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Example</title>
  <script src="index.js"></script>
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
```

Let's say you wanted to use a library someone created...then you'd download the minified file and include it as well...

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example</title>
  <link rel="stylesheet" href="index.css">
  <script src="library.min.js"></script>
  <script src="index.js"></script>
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
````

This was easy enough to understand, but it was difficult to find and download new versions of libraries every time they would update.

####Using a JS package Manager (npm)

Starting around 2010, several competing javascript package managers emerged to help automate the process of downloading and updating libraries from a central repository. NPM was originally a package manager made for node.js, a JS runtime designed to run on the server, not the frontend. If one has node.js installed, they have npm installed. To install library.min.js instead of manually downloading it, you would navigate to your folder with index.html and enter

```
$ npm init
```

This will prompt multiple questions and generate a file named **package.json**. This is a config file that npm uses to save all project info. With the defaults the contents of **package.json** will look something like:

```
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

To install the library.js JS package, we can follow the npm instructions at the command line:

```
$ npm install library --save
```

This does two things - first, downloads all the code from a library.js package into a folder called **node_modules**. Second, automatically modifies the **package.json** file to keep track of library.js as a project dependency.

```
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.22.2"
  }
}
```

This is useful when sharing projects with others, instead of sharing the modules folder you can just share the **package.json** and devs can install the required packages automatically with the command **npm install**.

So now we can link the file in the index.html as follows:

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Example</title>
  <script src="node_modules/moment/min/moment.min.js"></script>
  <script src="index.js"></script>
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
```

####Using a JS Module Bundler (webpack)

Most programming languages provide a way to import code from one file into another. JS wasn't originally designed with this feature since it was intended to run in the browser.

Enter node.js

Node.js is a JS runtime designed to run on the server. Here's what the earlier example would look like using node.js modules. Instead of loading **library.min.js** with an HTML script tag you can load it directly in the JS as follows:

```
// index.js
var library = require('library');

console.log("Hello from Javascript!");
```

Since node.js is a server side language, it has access to the computer's file system, it knows the location of each npm module path; instead of having to wrtie **require('./node_modules/moment/min/moment.min.js')**, you can simply write **require('moment')**.

This is great for node.js but if you tried to load it in the broswer, you'd get an error saying **require** is not definied. The browser doesn't have access to the file system, so loading files has to be done dynamically - either synchronously (which slows down execution), or asynchronously (which can have timing issues).

Enter a module bundler. A JS module bundler is a tool that gets around the problem with a build step (has access to the file system) to create a final output that is browser compatible (no access to file system). In this case, we need a module bundler to find all **require** statements and replace them with the actual contents of each required file. The final result is a single bundled JS file, with no require statements.

Originally Browserify was the original but since 2015, WebPack has been more widely used due to the popularity of the React front end framework.

Time to examine how to use webpack to get the above **require('moment')** example working in the browser. First we must install webpack into the project. Webpack itself is an npm package so can be installed from command line:

```
$npm install webpack webpack-cli --save-dev
```

Not that we're installing webpack and webpack-cli (which allows webpack use at command line). The **--save-dev** argument saves it as a development dependency which means it's a package you need in the dev environment but not on the production server. This change is now reflected in the **package.json** file:

```
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.19.1"
  },
  "devDependencies": {
    "webpack": "^4.17.1",
    "webpack-cli": "^3.1.0"
  }
}
```

Now you can run webpack as follows:

```
$ ./node_modules/.bin/webpack index.js --mode=development
```

This command will run the webpack tool that was installed in the **node_modules** folder, start with **index.js** file, find any **require** statements, and replace them with the appropriate code to create a single output file (which by default is **dist/main.js**). The **--mode=development** arguement is to keep the js readable for developers, as opposed to a minified output with the argument **--mode=production**.

Now that we have webpack's **dist/main.js** output, we are going to use it instead of **index.js** in the browser, refleceted in the index.html as follows:

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Example</title>
  <script src="dist/main.js"></script>
</head>
<body>
  <h1>Hello from HTML!</h1>
</body>
</html>
```

Note: we'll need to run the webpack command each time we change **index.js**. Webpack can read options from a config file in the root directory of the project named **webpack.config.js**, which in our case would look like:

```
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  }
};
```

Now each time we change **index.js**, we can run webpack with the command:

```
$ ./node_modules/.bin/webpack
```

Don't need to specify the options anymore as webpack is loading those from the config file.

####Transpiling code for new language features (babel)

Transpiling code means converting from one language to a similar language. Sass, Less, Stylus for CSS and Babel or TypeScript for Javascript. Babel transpiles ES6 JS to ES5/browser compatible JS. Typescript is a language that is essentially identical to next generation JS, but also adds static typing.

First install babel

```
$ npm install @babel/core @babel/preset-env babel-loader --save-dev
```

@babel/core is the main part of babel, @babel/preset-env is a preset defining which new JS features to transpile, and babel-loader is a package to enable babel to work with webpack. Next we configure webpack to use babel-loader by editing the **webpack.config.js**:

```
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

Now we can start writing ES6 features in our JS - here's an example of an ES6 template string in **index.js**:

```
// index.js
var library = require('library');

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
```

We can also use ES6 import statement instead of using require:

```
// index.js
import library from 'library';

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
```

Since we changed **index.js**, we need to run webpack again in the command line:

```
$./node_modules/.bin/webpack
```

All this transpiling allows people to use tomorrow's features today.

####Using a task runner (npm scripts)

Since we're investing in using a build step to work with JS modules, it makes sense to use a task runner, which is a tool that automates different parts of the build process. For frontend development, tasks include minifying code, optimizing images, running tests, etc.

In 2013, Grunt was most popular, with Gulp following after. Both rely on plugins that wrap other command line tools. Today, the most popular choice is to use the scripting capabilities built into the npm package manager itself, which doesn't use plugins but instead works with other command line tools directly. Let's write some npm scripts to make using webpack easier. Change **package.json** as follows:

```
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress --mode=production",
    "watch": "webpack --progress --watch"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.22.2"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "babel-loader": "^8.0.2",
    "webpack": "^4.17.1",
    "webpack-cli": "^3.1.0"
  }
}
```

We've added **build** and **watch**. To run the build script, you can enter in the command line:

```
$ npm run build
```

This will run webpacking using config from the **webpack.config.js** with the **--progress** option to show the percent progress and the **--mode=production** option to minimize the code for production.

```
$ npm run watch
```

This uses the **--watch** option instead to automatically re-run webpack each time any JS file changes, which is great for development.

Note that scripts in **package.json** can run webpack without having to specify the full path **./node_modules/.bin/webpack** since node.js knows the location of each npm module path. We can make things even easier by installing webpack-dev-server, a separate tool which provides a simple web server with live reloading:

```
$ npm install webpack-dev-server --save-dev
```

Then add an npm script to **package.json**:

```
{
  "name": "modern-javascript-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress -p",
    "watch": "webpack --progress --watch",
    "server": "webpack-dev-server --open"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.19.1"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "babel-loader": "^8.0.2",
    "webpack": "^3.7.1",
    "webpack-dev-server": "^3.1.6"
  }
}
```

Now you can start your dev server by running the command:

```
$ npm run server
```

This will automatically open index.html in your browser with an adress of localhost:8080 - anytime you change JS in index.js, webpack-dev-server will rebuild its own bundled JS and refresh the browser automatically.

This is modern JS in a nutshell. From plain HTML an dJS to using a package manager to automatically download 3rd party packages, a module bundler to create a single script file, a transpiler to use future JS features, and a task runner to automate different parts of the build process.

## Javascript History - From Inception through 2018

We'll start from the beginning and build an example website like the dinosaurs did - then we'll introduce different otols incrementally to see the problems that they solve one at a time.

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

This will prompt multiple questions and generate a file named package.json. This is a config file that npm uses to save all project info. With the defaults the contents of package.json will look something like:

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

This does two things - first, downloads all the code from a library.js package into a folder called node_modules. Second, automatically modifies the package.json file to keep track of library.js as a project dependency.

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

This is useful when sharing projects with others, instead of sharing the modules folder you can just share the package.json and devs can install the required packages automatically with the command npm install.

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

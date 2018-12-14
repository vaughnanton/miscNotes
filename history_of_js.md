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

**Component**

- a function or a class
- produces HTML via JSX and handles user events

**JSX**

- HTML like JS syntax that keeps React code simple
- set of instructions to tell react what content to show
- jsx can reference js variables with `{variableName}`

```
// using inline styles in JSX vs HTML

// HTML
<div style="background-color:red;"></div>

// JSX
<div style={{backgroundColor: 'red'}}></div>
```

**Babel**

- takes any version of JS and converts to ES5 for browser compatibility
- takes JSX and turns it into compatible JS

**React-App Project Directory**

1. src - folder to write all source code
2. public - folder that stores static files like images, html
3. node modules - folder that contains all dependencies
4. package.json - records project dependencies and configures project
5. package-lock.json - records the exact version of packages installed

**Props (Properties)**

- system for passing data from a parent component to a child component
- goal is to customize or configure a child component

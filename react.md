**Component**

- a function or a class
- produces HTML via JSX and handles user events

**Class Based Components**

- must be a javascript class, extend (subclass) React.Component, and define a render method that returns some JSX

**Functional Components**

```
// Functional vs Class Components

const App = () => {
    return <div>Latitude: </div>;
};

class App extends React.Component {
    render() {
        return <div>Latitude: </div>;
    }
}
```

**Rules of State**

- state is a JS object that contains data relevant to a component
- updating 'state' on a component causes the component to (almost) instantly rerender
- state must be initialized when a component is created
- state can only be updated using the function 'setState'

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

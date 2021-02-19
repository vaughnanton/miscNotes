**Component**

- a function or a class
- produces HTML via JSX and handles user events

**Class Based Components**

- must be a javascript class, extend (subclass) React.Component, and define a render method that returns some JSX
- lifecycle
  1. constructor (good place to do one-time setup)
  2. render (return JSX)
  3. componentDidMount (data loading)
  4. componentDidUpdate (good place to do more data loading when state/props change)
  5. componentWillUnmount (good place to do cleanup especially for non-React stuff)

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

**Data**

- axios, 3rd party package - most commonly worked with
- fetch, function built into modern browsers

**React Refs**

- give access to a single DOM element that is rendered by a component (in place of document.querySelector)
- we create refs in the constructor, assign them to instance variables, then pass to particular JSX element as props

**Hooks System**

- hooks are a way to write reusable code, instead of more classic techniques like inheritance

- useState, function that lets you use state in a functional component
- useEffect, function that lets you use something like lifecycle methods in a functional component
- useRef, function that lets you create a ref in a function component

**State in Class vs Function Components**

```
// Class vs Function

// Initialization
state = {activeIndex:0}; vs useState(0);

// Reference
this.state.activeIndex; vs activeIndex;

// Updates
this.setState({activeIndex: 10}); vs setActiveIndex(10);
```

**useEffect**

- allows function components to use something _like_ lifecycle methods
- we configure the hook to run some code automatically in one of three scenarios
  1. when the component is rendered for the first time only ([])
  2. when the component is rendered for the first time and when it rerenders (no array)
  3. when the component is rendered for the first time and when it rerenders and some piece of data has changed ([data])

- When wanting to use async await with useEffect can do it in two ways...

```
useEffect(() => {
  (async () => {
    await axios.get('gwhoietw');
  })();
}, [term];

//OR, basically the above invokes without having to be called as below (search())

useEffect(() => {
  const search = async () => {
      await axios.get('gwhoietw');
  };
  search();
}, [term]);

//OR with normal promises

useEffect(() => {
  axios.get('gwhoietw')
    .then((response) => {
      console.log(response.data)
    });
}, [term])
```

- useEffect has a cleanup return functionality that can get invoked before it calls the overall function (used in the setTimeout method we used in widgets app)

**useRef**

- reference to top level element (see widgets app dropdown)
- useRef is like a "box" that can hold a mutable value in its `.current` property

```
// Example to access a child imperatively

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
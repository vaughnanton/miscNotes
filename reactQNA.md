##General React

**What is React?**

A front end library that follows a component based approach which helps in building reusable
UI components. It is used for developing complex and interactive web and mobile UI.

**What are features of React?**

It uses the virtual DOM instead of the real DOM, server-side rendering, and it follows uni-directional data flow.

**Differentiate between Real DOM and Virtual DOM?**

Real DOM

- updates slow
- can directly update html
- creates new DOM if an element updates
- DOM manipulation taxing/difficult

Virtual DOM
- updates faster
- can't directly update html
- updates the JSX if element updates
- DOM manipulation easy

**What are some advantages of React?**
- increased app performance
- can be used on client and server side
- due to JSX, readability increases
- easy to integrate with other frameworks
- writing UI test cases become easy

**What is JSX?**

JSX is Javascript XML. Type of file used by React which utilizes JS along with HTML like template syntax.

JSX Example

```
render(){
  return(
      <div>
        <h1>Hello World!</h1>
      </div>
    );
}
```

**How does the virtual DOM work?**

The virtual DOM is a JS object which is just a copy of the real DOM. It is a node tree that lists elements, attributes, and content as objects/properties. React's render function creates a node tree out of the React components. The virtual DOM is updated when manipulated by user or system.

- Step 1 ) whenever underlying data changes, the entire UI is re-rendered in virtual DOM
- Step 2 ) difference between real and virtual DOM is calculated
- Step 3 ) real DOM is updated with only things that have changed

**Give examples of comparisons between ES5/ES6 syntax.**

```
//require vs import

  //ES5
  var React = require('react');

  //ES6
  import React from 'react';

//epxort vs exports

  //ES5
  module.exports = Component;

  //ES6
  export default Component;

//component and function

  //ES5
  var MyComponent = React.createClass({
    render: function() {
      return <h3>hello world!</h3>;
    }
  });

  //ES6
  class MyComponent extends React.Component {
    render() {
      return <h3>hello world!</h3>;
    }
  }

//props

  //ES5
  var App = React.createClass({
    propTypes: { name: React.PropTypes.string },
    render: function() {
        return <h3>Hello, {this.props.name}!</h3>;
    }
  });

  //ES6
  class App extends React.Component {
    render() {
      return <h3>Hell, {this.props.name}!</h3>;
    }
  }

//state

  //ES5
  var App = React.createClass({
    getInitialState: function() {
        return { name: 'world' };
    },
    render: function() {
        return <h3>Hello, {this.state.name}!</h3>;
    }
  });

  //ES6
  class App extends React.Component {
    constructor() {
      super();
      this.state = { name: 'world' };
    }
    render() {
      return <h3>Hello, {this.state.name}!</h3>;
    }
  }

```

##React Components

**What is meant by 'In React, everything is a component'?**

Components are the building blocks of the React app's UI. Components split up the UI into small, independent, reusable pieces. Each component is rendered independent of eachother without affecting the rest of the UI.

**What does render() do in React?**

Every component must have a render(). This returns a single React element which is the representation of the native DOM component. HTML must be group inside one enclosing tag. The render() function must return the same result each time it is invoked.

**How can you embed two or more components into one?**

We can embed components into one in the following way:

```

class MyComponent extends React.Component{
  render(){
    return(
        <div>
          <h1>hello</h1>
          <Header/>
        </div>
      );
  }
}

class Header extends React.Component{
  render(){
    return <h1>Header Component</h1>
  };
}

ReactDOM.render(
  <myComponent/>, document.getElementById('content')
);

```

**What is Props?**

Props is shorthand for properties in React. They are read-only components which must be kept pure (immutable). They are always passed down from parent to child components through an app. A child component can never send a prop up to a parent. This helps in maintaining unidirectional data flow. Props are generally used to render the dynamically generated data.

**What is a state in React and how is it used?**

States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable (unlike props) and create dynamic and interactive components. They are accessed via this.state().

**Differentiate between states and props.**

- Receive initial value from parent component
  - State = Yes
  - Props = Yes
- Parent component can change value
  - State = No
  - Props = Yes
- Set default values inside component
  - State = Yes
  - Props = Yes
- Changes inside component
  - State = Yes
  - Props = No
- Set initial value for child components
  - State = Yes
  - Props = Yes
- Changes inside child components
  - State = No
  - Props = Yes

**How can you update the state of a component?**

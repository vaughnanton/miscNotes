### General React

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

### React Components

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

State of a component can be updated using this.setState()...example:

```
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = { ,
      name: 'Maxx',
      id: '101'
    }
  }
  render()
    {
      setTimeout(()=>{this.setState({name:'Jaeha', id:'222'})},2000)
      return (              
             <div>                  
               <h1>Hello {this.state.name}</h1>                
               <h2>Your Id is {this.state.id}</h2>
             </div>
      );
    }
}
ReactDOM.render(
  <MyComponent/>,document.getElementById('content')
);
```

**What is arrow function in React? How is it used?**

Arrow functions are a brief syntax for writing function expression. Allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are useful while working with higher order functions.

Non-arrow
```
render() {
  return(
      <MyInput onChange={ this.handleChange.bind(this) } />
    )
}
```

Arrow
```
render() {
  return(
      <MyInput onChange{ (e) => this.handleOnChange(e) } />
    )
}
```

**Differentiate between stateful and stateless components.**

Stateful:

1. Stores info about component's state in memory
2. Have authority to change state
3. Contains knowledge of past, current and possible future changes in state
4. Stateless components notifies stateful about the requirement of the state change, then stateful sends down props

Stateless:

1. Calculates the internal state of the components
2. Do not have authority to change state
3. Contains no knowledge of past, current and possible future state changes
4. Receive props from stateful components and treat them as callback functions

**What are the different phases of a React component's lifecycle?**

1. Initial Rendering Phase
  - when component is about to start its life journey and makes its way to the DOM
2. Updating Phase
  - once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs
3. Unmounting Phase
  - final phase of cycle, component is destroyed and removed from DOM

**Explain the lifecycle methods of React components in detail.**

1. componentWillMount()
  - executed just before rendering takes place both on client and server side
2. componentDidMount()
  - executed on the client side only after the first render
3. componentWillReceiveProps()
  - invoked as soon as the props are received from the parent class and before another render is called
4. shouldComponentUpdate()
  - returns true or false value based on certain conditions
  - return true if want component to update, by default it returns false
5. componentWillUpdate()
  - called just before rendering takes place in the DOM
6. componentDidUpdate()
  - called immediately after rendering takes place
7. componentWillUnmount()
  - called after the component is unmounted from the DOM, it is used to clear up the memory spaces

**What is an event in React?**

In React, events are triggered reactions to specific actions like mouse hover, mouse click, key precc, etc.
  - Events are named using camel case instead of just using lowercase
  - Events are passed as functions instead of strings
The Event arguement contains a set of properties, which are specific to an event. Each event type contains its own properties and behavior which can only be accessed via its event handler.

**How do you create an event in React?**

```
class Display extends React.Component({
    show(evt) {
      //code
    },
    render() {
      //Render the div with an onclick prop (value is a function)
      return (
          <div onClick={this.show}>Click Me!</div>
        );
    }
});
```

**What are synthetic events in React?**

Synthetic events are objects which act as a cross browser wrapper around the browser's native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.

**What are refs in React?**

Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render config function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.

```
class ReferenceDemo extends React.Component{
  display() {
    const name = this.inputDemo.value;
    document.getElementById('disp').innerHTML = name;
  }
  render() {
    return(
        <div>
            Name: <input type="text" ref={input => this.inputDemo = input} />
            <button name="Click" onClick={this.display}>Click</button>            
            <h2>Hello <span id="disp"></span> !!!</h2>
        </div>
      );
  }
}
```

**In what cases would you use refs?**

- When you need to manage focus, select text or media playback
- to trigger imperative animations
- integrate with third-party DOM libraries

**How do you modularize code in React?**

By using export and import properties, they help in writing components separately in different files.

```
//ChildComponent.jsx

export default class ChildComponent extends React.Component {
  render() {
     return (
          <div>
            <h1>This is a child component</h1>
       );
  }
}

//ParentComponent.jsx

import ChildComponent from './childcomponent.js';
class ParentComponent extends React.Component {
  render() {
    return(
        <div>
          <App />
        </div>
      );
  }
}
```

**How are forms created in React?**

React forms are similar to HTML forms. In React, state is contained in the state property of the component and is only updated via setState(). Thus the elements can't directly update their state and their submission is handled by a JS function. This function has full access to the data that is entered by the user into a form.

```
handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

render() {
  return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"  value={this.state.value} onChange={this.handleSubmit} />
        </label>
        <input type="submit" value="Submit" />
      </form>    
    );
}
```

**List differences between controlled and uncontrolled components.**

Controlled components
- do not maintain their own state
- data is controlled by the parent component
- take in current values through props and notify the changes via callbacks

Uncontrolled components
- maintain their own state
- data is controlled by the DOM
- Refs are used to get their current values

**What are higher order components(HOC)?**

HOC is an advanced way of reusing component logic. It's a pattern that is derived from React's compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won't modify or copy any behavior from their input components. You can say that HOC are 'pure' components.

**What can you do with HOC?**

- code reuse, logic and bootstrap abstraction
- render high jacking
- state abstraction and manipulation
- props manipulation

**What are pure components?**

Pure components are the simplest/fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.

**What is the significance of keys in React?**

Keys are used for identifying unique virtual DOM elements with their corresponding data driving the UI. They help React optimize the rendering by recycling all the existing elements in the DOM. These keys must be a unique number of string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application's performance.

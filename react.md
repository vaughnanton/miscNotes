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

//complete example

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchUsers = async () => {
        const { data } = await axios.get(URL);
        setUsers(data);
      };

      fetchUsers();
  }, []);
}
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

**Custom Hooks**

- best way to create reusable code (besides components), usually when we want to make calls to useState or useEffect more reusable
- created by extracting hook-related code out of a function component
- custom hooks always contain at least one primitive hook (useState/useEffect)
- each custom hook should have one single purpose
- any time you have data fetching code, that is a great thing to make into a custom hook

General Steps
1. identify each line of code related to some single purpose
2. identify the inputs to that code
3. identify the outputs to that code
4. extract all the code into a separate function, receiving the inputs as arguments and returning the outputs

ex. If you give me a `default search term` - I will give you `a way to search for videos` and `a list of videos`


**Deploying a React App**

-Vercel
  - can deploy basic react apps with no server side logic
  - vercel within directory CLI to deploy app
  - vercel --prod to push new code to deployment

-Netlify
  - deploy github repo via netlify site
  - netlify will automatically redeploy once github repo changes

**Redux**
- a state management library, instead of maintaining state within components we extract to redux library
- makes creating complex application easier
- cannot get direct access to state property to modify data, have to use dispatch/action/reducer
- application complexity stays relatively stable/low even as application grows, we want a very small set number of ways of modifying data

- Redux Cycle with insurance analogy

  1. Action Creator
    - person dropping off the form (whether claim or policy)
    - action creator is a function that returns a plain javascript function
    - to change the state of an app we call an action creator which produces an action
    ```
    const createPolicy = (name, amount) => {
      return {
        type: 'CREATE_POLICY',
        payload: {
          name: name,
          amount: amount
        }
      };
    };

    const deletePolicy = (name) => {
      return {
        type: 'DELETE_POLICY',
        payload: {
          name: name
        }
      };
    };

    const createClaim = (name, amountOfMoneyToCollect) => {
      return {
        type: 'CREATE_CLAIM',
        payload: {
          name: name,
          amountOfMoneyToCollect: amountOfMoneyToCollect
        }
      };
    };
    ```

  2. Action
    - the form
    - has a type property, describes some change that we might want to make in our data
    - has payload property, describes some context around the change we want to make

  3. dispatch
    - the form receiver, takes in the form and makes copies to pass to different insurance departments
    - takes in action and passes copies to each of the reducers of app

  4. Reducers
    - each department in the company has diff sets of data, like number of policies, claims, accounting
    - a function responsible for taking in an action and some existing data, process and change the data, and return it to centralize in some location
    - returns a new state object
    ```
    // if oldListOfClaims is empty like when being called for first time, set it to empty array
    const claimsHistory = (oldListOfClaims = [], action) => {
      if (action.type === 'CREATE_CLAIM') {
        // we care about this action(form)
        return [...oldListOfClaims, action.payload]
      }
        // we dont care about this action (form)
        return oldListOfClaims;
    };

    const accounting = (bagOfMoney = 100, action) => {
      if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
      } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amountOfMoneyToCollect;
      }
      return bagOfMoney;
    };

    const policies = (listOfPolicies = [], action) => {
      if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
      } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
      }

      return listOfPolicies;
    }
    ```

  5. State
    - the centralized compiled department data that insurance management can look into
    - object that is a central repository of all information that has been created by reducers, all of the data of the application

- A redux store is an assembly of the different reducers and action creators
```
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
});

const store = createStore(ourDepartments);

// forward action to each of the reducers to process the action (form)
store.dispatch(createPolicy('Bob', 40));

// this is the main repository of the data of the app
store.getState();
```

- can trick redux to think we have a valid reducer (when working a new project) by returning a fixed value like so:

```
export default combineReducers({
  replaceMe: () => 'hi there';
  });
```

**Common Dependencies I've Used**
redux, redux library
react-redux, integration layer between react and redux
axios, help us make network requests
redux-thunk, middleware that helps make network requests from the redux side of app

**General Data Loading with Redux**

components are generally responsible for fetching data by calling an action creator...

1. component gets rendered onto the screen
2. componentDidMount lifecycle method gets called
3. we call action creator from 'componentDidMount'

action creators are responsible for making api requests (redux-thunk)

4. action creator runs code to make an API request
5. API responds w data
6. action creator returns an 'action' with the fetched data on the 'payload' property

we get fetched data into component by generating new state in redux store, then getting that into our component through mapStateToProps

7. some reducer sees the action, returns the data off the 'payload'
8. because we generated some new state object, redux/react-redux will cause app to re-render

**What Redux-Thunk Does**

Normal rules of action creators

1. must return action object
2. must have type property
3. can optionally have a payload

Rules with redux-thunk

1. action creators can return action objects OR action creators can return functions
2. must have type property
3. can optionally have a payload

**Redux Store Design**

Rules of Reducers

1. must return any value besides 'undefined'
2. produces 'state', or data to be used inside of your app using only previous state and the action
3. must not return reach 'out of itself' to decide what value to return (reducers are pure)
4. must not mutate its input 'state' argument (you could but not ideal)
  - misleading because you can mutate it but mutating it can cause trouble and it's easier to say don't mutate state argument then understand the corner case that isn't ideal
  - reason is because if we accidentally return the same value that comes into the reducer and return state, redux won't notice because same object in memory so the app won't re-render

```
with arrays when you use === it is comparing to the last version in memory

ex. const numbers === [1,2]
numbers === number -> true
numbers === [1,2] -> false
```

```
// common syntax in reducers working with arrays and objects to not mutate state arguement

// removing an element from an array
// bad
state.pop()
// good
state.filter(element => element !== 'hi')

// adding an element to an array
// bad
state.push('hi')
// good
[...state, 'hi']

// replacing an element in an array
// bad
state[0] = 'hi'
// good
state.map(el => el === 'hi' ? 'bye' : el)

// updating a property in an object
// bad
state.name = 'Sam'
// good
{...state, name: 'Sam'}

// adding a property to an object
// bad
state.age = 30
// good
{...state, age: 30}

// removing a property from an object
// bad
delete state.name
// good
{...state, age: undefinded}
_.omit(state, 'age') // using lodash
```

**LoDash**
- library that has several built in functions (don't have to reinvent the wheel)
- memoize the action creator function allows to not make a million requests for same data

**React Router**

- `react-router` is the core navigation library, don't need to include this manually
- install using `react-router-dom` for navigation in dom-based apps
- install using `react-router-native` for navigation in react-native apps

```
<BrowserRouter>
  <div>
    <Route path="/" exact component={PageOne} />
    <Route path="/pagetwo" component={PageTwo} />
  </div>
</BrowserRouter>
```

- the `exact aka exact={true}` keyword makes sure it is the exact path otherwise `/pagetwo` will show both `'/' and '/pagetwo'`
- we don't use anchor tags because a new HTML document will come in and all JS data gets dumped

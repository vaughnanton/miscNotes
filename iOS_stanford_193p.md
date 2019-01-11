## Stanford 193P
### Intro To iOS Programming : Lecture Notes

More in depth iOS readings/notes can be found here [link]

#### Lecture 1 01/03/2019

- alt key will show documentation
- command click allow option to do a universal rename
- action creates a method
- outlet creates an instance variable(aka property)
  - must be initialized with a value
- outlet collections is an array of things from UI
- nil means an optional that is not yet set

- !at the end of an optional means "assume the optional is set and grab the associated value"

`let cardNumber = cardButtons.index(of:sender)!`

#### Lecture 2 01/08/2019

**MVC**
- divides objects in program into 3 camps
- MVC is about managing communication between the 3 camps 

  1. Model
    - UI independent
    - the what of your app
    - the part that knows how to play the game we're building

  2. Controller
    - UI logic
    - the how the app shows up on screen
    - interpret and format model information for the view

  3. View
    - the controller's minions
    - do not own the data they display

Can view speak to its controller?
  - Communication is blind and structured
    - ex. the button doesn't know what it's saying to control, it's just a button
    - the controller can create a target on itself, and everytime the button is pressed, the controller target is called

**More**

- inits tend to have the same internal and external name

Public Api
  - methods and classes that others can call

Structs and classes
  - a couple differences between them

  1. structs have **no** inheritance
  2. structs are value types and classes are reference types
    - value type gets copied when passed around (arrays, ints, strings, dictionaries)
    - reference type lives in the heap, has pointers, and you're passing around pointers when passing it around

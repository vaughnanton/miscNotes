Various Notes on the Swift Programming Language

## The Swift Programming Language Documentation

#### The Basics

##### Constants and Variables

**Declaring Constants and Variables**
- associate a name with a value of a particular type
- value of a constant can't be changed once set, whereas variable can be set to different value in future
- declare constant with `let`
```
let maximumNumberOfLoginAttempts = 10
```
- declare variable with `var`
```
var currentLoginAttempt = 0
```
- can declare multiple constants or multiple variables on a single line separated by commas
```
var x = 0.0, y = 0.0, z = 0.0
```

**Type Annotations**
- you can provide a type annotation when you declare a constant or variable, to be clear about the kind of values the let/var can store
```
var welcomeMessage: String
welcomeMessage = "Hello"
```
- can define multiple variables of same type on single line separated by commas
```
var red, green, blue: Double
```

**Naming Constants and Varialbes**
- names can contain almost any character, including unicode
- names can't contain whitespace, math symbols, arrows, line/box character
- names can't begin with a number

**Printing Constants and Variables**
- can print the current value of a constant or variable with print function
```
print(welcomeMessage)
// Prints "Hello"
```
- swift can print using string interpolation
```
print("The current value of welcomeMessage is \(welcomeMessage)")
// Prints "The current value of welcomeMessage is Hello"
```

##### Comments

```
// This is a comment.

/* This is also a comment
but is written over multiple lines. */
```

##### Semicolons

- semicolons are not required after each statement unelss you want to write multiple separate statements on a single line
```
let cat = "catEmoji"; print(cat)
// Prints "catEmoji"
```

##### Integers

- whole numbers without a fractional component

**Integer Bounds**
- can access min and max values of each integer type with min and max properties
```
let minValue = UInt8.min // minValue is equal to 0, and is of type UInt8
let maxValue = UInt8.max // maxValue is equal to 255, and is of type UInt8
```

**Int**
- unless you need to work with a specific size of integer, always use Int values in your code
  - on a 32 bit platform, Int is the same size as Int32
  - on a 64 bit platform, Int is the same size as Int64

**UInt**
- an unsigned integer type

##### Floating-Point numbers

- numbers with a fractional component such as 3.14159, 0.1, and -27.31
- can represent wider range than values of integer types and can store numbers that are larger or smaller than can be stored in an Int
- two signed floating-point number types
  - Double represents a 64 bit floating-point number
  - Float represents a 32 bit floating-point number

##### Type Safety and Type Inference

- Swift is a type-safe language; it encourages you to be clear about the types of values your code can work with
- Swift performs type checks when compiling your code and flags any mismatched types as errors
- if you don't specify the type of value you need, Swift uses type inference to work out the appropriate type
```
let meaningOfLife = 42
// meaningOfLife is inferred to be of type Int

let pi = 3.14159
// pi is inferred to be of type Double, Swift always chooses Double over Float when inferring floating point numbers
```

##### Numeric Literals

- integer literals can be written as
```
let decimalInteger = 17
let binaryInteger = 0b10001 // 17 in binary notation
let octalInteger = 0o21 // 17 in octal notation
let hexadecimalInteger = 0x11 // 17 in hexadecimal notation
```

##### Numeric Type Conversion

**Integer Conversion**
- use the Int type for all general-purpose integer constants and variables in your code
- range of numbers that can be stored in integer let/var is different for each numeric type
```
let cannotBeNegative: UInt8 = -1
// UInt8 cannot store negative numbers, and so this will report an error
let tooBig: Int8 = Int8.max + 1
// Int8 cannot store a number larger than its maximum value,
// and so this will also report an error
```

- to convert oen specific type to another, initialize a new number of desired type with the existing value
```
// can't be added directly because not of same type, so have to convert both to UInt16...
let twoThousand: UInt16 = 2_000
let one: UInt8 = 1
let twoThousandAndOne = twoThousand + UInt16(one)
```

**Integer and Floating-Point Conversion**
- conversions between integer and floating-point must be made explicit
```
let three = 3
let pointOneFourOneFiveNine = 0.14159
let pi = Double(three) + pointOneFourOneFiveNine
// pi equals 3.14159, and is inferred to be of type Double
```
- integer type can be initialized with a Double or Float value
```
let integerPi = Int(pi)
// integerPi equals 3, and is inferred to be of type Int
// floating point values are always truncated, so 4.75 becomes 4 and -3.9 becomes -3
```

##### Booleans
- boolean type is Bool, of constant values true or false

##### Tuples
- group multiple values into a single compound value
- can be of any type and don't have to match
- useful as return values of functions
```
let http404Error = (404, "Not Found")
// http404Error is of type (Int, String), and equals (404, "Not Found")
// a tuple of type (int, String)
```
- you can name the individual elements in a tuple when it is defined
```
let http200Status = (statusCode: 200, description: "OK")
print("The status code is \(http200Status.statusCode)")
// Prints "The status code is 200"
print("The status message is \(http200Status.description)")
// Prints "The status message is OK"
```

##### Optionals
- use optionals in situations where a value may be absent, it represents two possibilities
  - either there **is** a value and you can unwrap the optional to access that value
  - or there isn't a value at all

```
let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)
// convertedNumber is inferred to be of type "Int?", or "optional Int"
```

The question mark above indicates that the value it contains is optional, it might contain some Int value, or it might contain no value at all (and it can't contain anything else, like a bool or a string)

- you set an optional variable to a valueless state by assigning it the special value nil
- if a constant/variable in your code needs to work with the absence of a value under certain conditions, always declare it as an optional value of the appropriate type
```
var serverResponseCode: Int? = 404
// serverResponseCode contains an actual Int value of 404
serverResponseCode = nil
// serverResponseCode now contains no value
```

**Nil**
- if you define an optional variable without providing a default value, the variable is auto set to nil
```
var surveyAnswer: String?
// surveyAnswer is automatically set to nil
```

**If Statements and Forced Unwrapping**

If an optional has a value it is considered 'not equal to' nil...
```
if convertedNumber != nil {
    print("convertedNumber contains some integer value.")
}
// Prints "convertedNumber contains some integer value."
```
Once you're sure the optional does have a value, you can access using ! at the end of optional's name
  - "I know this optional definitely has a value, please use it" known as forced unwrapping
```
if convertedNumber != nil {
    print("convertedNumber has an integer value of \(convertedNumber!).")
}
// Prints "convertedNumber has an integer value of 123."
```

**Optional Binding**

Use optional binding to find out if optional has value, if so, make that value available as a temporary constant or variable.
- constants and variables created with optional binding in if statement are only available within body of if statement

Above example can be rewritten as...
```
if let actualNumber = Int(possibleNumber) {
    print("The string \"\(possibleNumber)\" has an integer value of \(actualNumber)")
} else {
    print("The string \"\(possibleNumber)\" could not be converted to an integer")
}
// Prints "The string "123" has an integer value of 123"
```
- “If the optional Int returned by Int(possibleNumber) contains a value, set a new constant called actualNumber to the value contained in the optional."

**Implicitly Unwrapped Optionals**

Sometimes it's clear that an optional will always have a value after the first value is set. In such cases, it's useful to remove the need to check and unwrap the optional's value every time it's accessed because it can be assumed to have a value all of the time. This is an example of implicitly unwrapped optional.

- written as `String!` instead of `String?`
- primary use is during class initialization

Example of optional string and implicitly unwrapped optional string when accessing their value as an explicit string...

```
let possibleString: String? = "An optional string."
let forcedString: String = possibleString! // requires an exclamation mark

let assumedString: String! = "An implicitly unwrapped optional string."
let implicitString: String = assumedString // no need for an exclamation mark
```

Can think of implicitly wrapped optional as giving permission for the optional to be unwrapped automatically whenever it's used.

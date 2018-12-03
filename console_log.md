# console.log()

Most people know console.log(object)
Can also do console.log(msg,values) like sprintf in C or PHP

```
console.log('I like %s but I do not like %s.', 'Skittles', 'M&Ms')
```

will output exactly as you'd expect...

```
I like Skittles but I do not like M&Ms.
```

Common placeholders are %0 for object, %s for string, and %d which is for a decimal or integer.

```
console.log('The state object for %s is %o', "Susan", user)
```

will output the state data for object(user) Susan(string).

# console.dir()

Say you have the following div..

```
<div id='container'>
  <div class="loot 46" data-reactroot>
    <div tabindex="-1">...</div>
      ::after
  </div>
</div>

let element = document.getElementById('container');

console.log(element);
```

console.log(element) will give you just the DOM representation as structured above, however,

```
console.dir(element);
```

will output the element in a more object-like fashion - all the data related to the element vs just the structure


# console.warn()


# console.table()


# console.assert()


# console.count()


# console.trace()


# console.time()


# console.group()

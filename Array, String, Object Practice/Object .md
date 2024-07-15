<style>

*{
    margin:0;
    padding:0;
    font-family:system-ui;
}

.markdown-body .highlight pre, .markdown-body pre , .markdown-body code{
    background-color: #f3f3f3;
}
</style>

# 1. assign()

Syntax ```Object.assign(target, source1, source2, ...);```
* target: The target object to which properties will be copied. This object will be modified and returned.
* source1, source2, ...: One or more source objects from which properties will be copied.


```javascript 
const target = {};
const source1 = { a: 1, b: 2 };
const source2 = { b: 3, c: 4 };

Object.assign(target, source1, source2);

console.log(target); // Output: { a: 1, b: 3, c: 4 }
```

### Parameters
* **target:** The target object to which properties will be copied. This object will be modified.
* **source1, source2, ...:** One or more source objects whose properties will be copied to the target object.

### Return Value
* Returns the modified target object after copying properties from the source objects.


### Key Points
* Object.assign() modifies the target object by copying properties from one or more source objects to it.
* If multiple source objects have properties with the same name, the property value from the last source object in the parameter list overwrites the previous values.
* Only enumerable own properties of the source objects are copied to the target object.
* Non-enumerable properties and properties inherited from the prototype chain are not copied.

### Use Cases
* Merging multiple objects into a single object.
* Cloning an object (shallow copy) with specific modifications or additions.
* Initializing an empty object with default property values from another object.

### Compatibility
* The Object.assign() method is part of ECMAScript 2015 (ES6) standard and is supported in all modern browsers. For compatibility with older browsers, consider using a polyfill or alternative approach.

### Notes
* Object.assign() does not perform deep copying of nested objects. If the source objects contain nested objects or arrays, the copied properties will still reference the original nested objects.
* The target object is modified in place and returned, but if the target object is null or undefined, a TypeError will be thrown.

Object.assign() is a powerful method for object manipulation and copying properties in JavaScript, providing a convenient way to combine or clone objects with customizable behavior. 


<hr style="background: red; border-radius: 2px;">


# 2. create()

Syntax ```Object.create(proto, [propertiesObject]);```
* proto: The prototype object to be used for the newly created object. This parameter is mandatory.
* propertiesObject (Optional): An object containing properties (and their descriptors) to be added to the newly created object. Each property descriptor is optional.

```javascript 
const personProto = {
  greet() {
    return `Hello, ${this.name}!`;
  }
};

const john = Object.create(personProto);
john.name = "John Doe";

console.log(john.greet()); // Output: "Hello, John Doe!"
```
* personProto is an object containing a greet() method.
* john is created using Object.create(personProto), which sets personProto as the prototype of john.
* john then has its name property set to "John Doe".
* john inherits the greet() method from its prototype (personProto) and can use it to greet.

### Parameters
* **proto:** The prototype object for the newly created object. This object will become the prototype of the newly created object.
* **propertiesObject:** An optional object containing properties to be added to the newly created object. Each property descriptor in this object is optional and follows the same syntax as used in Object.defineProperties().

### Return Value
* Returns a new object that has the specified prototype object and optionally additional properties.


### Key Points
* Object.create() creates a new object with the specified prototype object.
* The newly created object inherits properties and methods from its prototype.
* Additional properties can be added to the newly created object by passing them in the propertiesObject parameter.
* This method is useful for implementing prototypal inheritance and creating objects with specific prototypes.

### Use Cases
* Implementing prototypal inheritance in JavaScript.
* Creating objects based on existing prototypes with shared behavior.
* Creating objects that need to inherit properties and methods from a common prototype.

### Compatibility
* The Object.create() method is part of ECMAScript 5 (ES5) standard and is supported in all modern browsers.

### Notes
* Object.create() is commonly used in conjunction with prototypal inheritance to create objects that share behavior and properties through a prototype chain.
* When using Object.create(proto), if proto is null or undefined, the created object will have no prototype, resulting in a "pure" empty object.

Object.create() is a fundamental method in JavaScript for creating objects with specified prototypes and properties, providing flexibility in object creation and inheritance patterns. If

<hr style="background: red; border-radius: 2px;">


# 3. defineProperties()

Syntax ```Object.defineProperties(obj, descriptors);```
* **obj:** The target object on which to define or modify properties.
* **descriptors:** An object containing property descriptors for the properties to be defined or modified.

1. Defining multiple properties using Object.defineProperties()
```javascript 
const obj = {};

Object.defineProperties(obj, {
  name: {
    value: "John",
    writable: true,
    enumerable: true
  },
  age: {
    value: 30,
    writable: false,
    enumerable: true
  },
  greet: {
    value: function() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    enumerable: true
  }
});

console.log(obj.name); // Output: "John"
console.log(obj.age); // Output: 30
console.log(obj.greet()); // Output: "Hello, my name is John and I am 30 years old."
```
* The obj object is defined with properties name, age, and greet using Object.defineProperties().
* Each property is defined with specific attributes such as value, writable, enumerable, and in the case of greet, a function value.

### Parameters
* **obj:** The target object on which properties will be defined or modified.
* **descriptors:** An object where each property key corresponds to a property name, and each property value is a property descriptor object.

### Property Descriptor Object
A property descriptor object can contain the following optional keys to define or modify the behavior of the property:

* **value:** The value assigned to the property.
* **writable:** A boolean indicating whether the property's value can be changed (default is false).
* **enumerable:** A boolean indicating whether the property will be enumerated in for...in loops (default is false).
* **configurable:** A boolean indicating whether the property can be deleted or its attributes can be changed (default is false).
* **get:** A function that serves as a getter for the property, called when the property is accessed.
* **set:** A function that serves as a setter for the property, called when the property is assigned a new value.

### Return Value
* The modified obj object with the defined or modified properties.


### Key Points
* Object.defineProperties() is useful for defining multiple properties on an object with specific behaviors.
* Property descriptors allow fine-grained control over property attributes, such as mutability (writable), enumerability (enumerable), and configurability (configurable).
* Defined properties can include both data properties (with value and writable) and accessor properties (with get and set methods).

### Use Cases
* Defining properties on objects with specific attributes, such as read-only or non-enumerable properties.
* Implementing custom getter and setter methods for properties.
* Creating objects with predefined behavior and structure.

### Compatibility
* The Object.defineProperties() method is part of ECMAScript 5 (ES5) standard and is supported in all modern browsers.

### Notes
* Use Object.defineProperties() when you need to define or modify multiple properties at once with specific characteristics.
* Property descriptors allow for advanced property customization beyond simple property assignment.

Object.defineProperties() is a powerful method in JavaScript for defining or modifying multiple properties on an object, providing flexibility and control over object property behaviors.

<hr style="background: red; border-radius: 2px;">


# 4. defineProperty()

Syntax ```Object.defineProperty(obj, prop, descriptor);```
* **obj:** The target object on which to define or modify the property.
* **prop:** The name of the property to be defined or modified.
* **descriptor:** An object containing the property descriptor for the property.

1. Defining a data property using Object.defineProperty()
```javascript 
const obj = {};

Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj.name); // Output: "John"
obj.name = 'Alice';
console.log(obj.name); // Output: "Alice"
```

2. Defining an accessor property with getter and setter using Object.defineProperty()
```javascript 
const obj = {
  _age: 30
};

Object.defineProperty(obj, 'age', {
  get() {
    return this._age;
  },
  set(value) {
    if (value >= 0 && value <= 120) {
      this._age = value;
    } else {
      console.log('Invalid age value');
    }
  },
  enumerable: true,
  configurable: true
});

console.log(obj.age); // Output: 30
obj.age = 40;
console.log(obj.age); // Output: 40
```


### Parameters
* **obj:** The target object on which the property will be defined or modified.
* **prop:** A string specifying the name of the property to be defined or modified.
* **descriptor:** An object that specifies the attributes and behavior of the property being defined.

### Property Descriptor Object
The descriptor object can contain the following keys to define or modify the behavior of the property:

* **value:** The value assigned to the property (default is undefined).
* **writable:** A boolean indicating whether the property's value can be changed (true or false, default is false).
* **enumerable:** A boolean indicating whether the property will be enumerated in for...in loops and Object.keys() (true or false, default is false).
* **configurable:** A boolean indicating whether the property's attributes can be changed or the property can be deleted (true or false, default is false).
* **get:** A function that serves as a getter for the property, called when the property is accessed.
* **set:** A function that serves as a setter for the property, called when the property is assigned a new value.

### Return Value
* The obj object after defining or modifying the property with the specified descriptor.


### Key Points
* Object.defineProperty() allows you to define or modify individual properties of an object with specific attributes.
* Property descriptors control various behaviors such as value assignment, mutability (writable), enumerability (enumerable), and configurability (configurable).
* You can define both data properties (with value and writable) and accessor properties (with get and set methods) using Object.defineProperty().

### Use Cases
* Fine-grained control over property attributes and behaviors on objects.
* Implementing computed properties or properties with custom getters/setters.
* Defining non-enumerable or non-configurable properties for internal use.

### Compatibility
* The Object.defineProperty() method is part of ECMAScript 5 (ES5) standard and is supported in all modern browsers.

### Notes
* Use Object.defineProperty() when you need to define or modify a single property on an object with specific characteristics.
* Property descriptors provide advanced control over property behavior beyond simple property assignment.

Object.defineProperty() is a fundamental method for defining or modifying object properties with specific attributes and behavior in JavaScript.


<hr style="background: red; border-radius: 2px;">


# 5. entries()

Syntax ```Object.entries(obj)```
* **obj:** The object whose enumerable own properties will be returned as [key, value] pairs in an array.


1. Using Object.entries() with a simple object
```javascript 
const obj = { a: 1, b: 2, c: 3 };

const entries = Object.entries(obj);
console.log(entries);
// Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

2. Using Object.entries() with a class instance
```javascript 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const john = new Person('John', 30);

const entries = Object.entries(john);
console.log(entries);
// Output: [ [ 'name', 'John' ], [ 'age', 30 ] ]
```


### Parameters
* **obj:** The object from which to extract the enumerable own properties.

### Return Value
* An array of [key, value] pairs representing the enumerable own properties of the object.

### Key Points
* Object.entries() returns an array where each element is an [key, value] pair of the object's own enumerable properties.
* The order of entries in the array corresponds to the order in which properties are listed in a for...in loop.
* Non-enumerable properties and properties inherited from the prototype chain are not included in the result.

### Use Cases
* Iterating over the own enumerable properties of an object in a structured way.
* Converting an object's properties into an array format for processing or manipulation.
* Providing a simple way to inspect the properties of an object.

### Compatibility
* The Object.entries() method was introduced in ECMAScript 2017 (ES8) and is supported in all modern browsers. For compatibility with older environments, consider using a polyfill.

### Notes
* Object.entries() works well in combination with other array methods like forEach, map, or reduce for processing object properties.
* When dealing with objects that have a large number of properties or deeply nested structures, consider the potential impact on performance and memory usage.

Overall, Object.entries() is a convenient method for converting an object's properties into an iterable format, allowing for easier manipulation and inspection of object properties in JavaScript. 

<hr style="background: red; border-radius: 2px;">


# 6. freeze()

Syntax ```Object.freeze(obj)```
* obj: The object to be frozen.

### Parameters
* **obj:** The object that you want to make immutable (i.e., prevent changes to its properties).

### Return Value
The same obj that was passed to the Object.freeze() method.


```javascript 
const obj = {
  name: 'John',
  age: 30
};

Object.freeze(obj);

obj.name = 'Alice'; // Attempted change will have no effect
delete obj.age; // Attempted deletion will have no effect

console.log(obj); // Output: { name: 'John', age: 30 }
```

### Key Points
* Object.freeze() makes an object immutable by preventing changes to its properties and their attributes.
* Attempts to modify frozen objects (such as assigning new values to existing properties or deleting properties) will be ignored in strict mode or result in a TypeError in non-strict mode.
* Nested objects within a frozen object are not automatically frozen; you need to recursively apply Object.freeze() to deeply freeze nested objects.

### Use Cases
* Protecting critical data structures from accidental changes.
* Ensuring that specific objects remain consistent and stable throughout the execution of a program.
* Providing a level of data integrity and preventing unintentional modifications to object properties.

### Compatibility
* The Object.freeze() method is part of ECMAScript 5 (ES5) standard and is supported in all modern browsers.

### Notes
* Frozen objects are shallowly immutable, meaning that properties directly belonging to the object are protected, but the values of object properties (if they are objects themselves) can still be modified if not frozen.
* Object.freeze() only affects the immediate properties of an object. If the properties of an object are objects themselves, those nested objects will not be automatically frozen.

Overall, Object.freeze() is a useful method for ensuring that objects remain unchanged after they have been configured, providing a form of data immutability in JavaScript applications. 


<hr style="background: red; border-radius: 2px;">


# 7. fromEntries()

Syntax ```Object.fromEntries(iterable)```
* **iterable:** An iterable object (like an array) containing key-value pairs.

1. Converting an array of key-value pairs back into an object using Object.fromEntries()
```javascript 
const entries = [
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
];

const obj = Object.fromEntries(entries);

console.log(obj);
// Output: { name: 'John', age: 30, city: 'New York' }
```

### Parameters
* **iterable:** An iterable containing entries (arrays with two elements: [key, value]) that will be transformed into an object.

### Return Value
* An object created from the given key-value pairs.

### Key Points
* Object.fromEntries() is useful for reversing the process of Object.entries(), converting an array of key-value pairs into an object.
* The entries array passed to Object.fromEntries() should consist of arrays with exactly two elements ([key, value]), where key is the property name and value is the property value.
* This method is particularly handy when you need to construct an object from a collection of key-value pairs, such as data obtained from a source that returns entries in array format.

### Use Cases
* Transforming data from one format (e.g., array of key-value pairs) into another (e.g., object) for easier manipulation or processing.
* Converting structured data received from external sources (like APIs) into objects for further use within JavaScript applications.

### Compatibility
* The Object.fromEntries() method was introduced in ECMAScript 2019 (ES10) and is supported in all modern browsers. For compatibility with older environments, consider using a polyfill.

### Notes
* While Object.fromEntries() is straightforward for converting well-formed arrays of key-value pairs into objects, ensure that the input data structure (iterable) conforms to the expected format to avoid unexpected behavior.
* If the iterable passed to Object.fromEntries() contains duplicate keys, the last occurrence will overwrite previous ones, similar to how object literals handle duplicate keys.

Object.fromEntries() provides a convenient way to transform structured data into JavaScript objects, complementing Object.entries() in modern JavaScript programming.

<hr style="background: red; border-radius: 2px;">


# 8. getOwnPropertyDescriptor()

Syntax ```Object.getOwnPropertyDescriptor(obj, prop)```
* **obj:** The object from which to retrieve the property descriptor.
* **prop:** The name of the property whose descriptor should be retrieved.

### Parameters
* **obj:** The object from which to retrieve the property descriptor.
* **prop:** A string representing the name of the property whose descriptor should be retrieved.

### Return Value
* An object containing the property descriptor for the specified property of the object. If the property does not exist on the object, undefined is returned.

### Property Descriptor Object
The property descriptor object returned by Object.getOwnPropertyDescriptor() contains the following attributes:

* **value:** The value associated with the property (if it's a data property).
* **writable:** A boolean indicating whether the property's value can be changed with an assignment operator (true or false).
* **enumerable:** A boolean indicating whether the property is enumerable and will be listed during iteration (true or false).
* **configurable:** A boolean indicating whether the property's attributes can be changed or the property can be deleted (true or false).
* **get:** A function that serves as a getter for the property, called when the property is accessed (if it's an accessor property).
* **set:** A function that serves as a setter for the property, called when the property is assigned a new value (if it's an accessor property).

1. Using Object.getOwnPropertyDescriptor() to get the descriptor of a data property
```javascript 
const obj = {
  name: 'John'
};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
// Output: { value: 'John', writable: true, enumerable: true, configurable: true }
```

2. Using Object.getOwnPropertyDescriptor() to get the descriptor of an accessor property
```javascript 
const obj = {
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const parts = value.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  }
};

const descriptor = Object.getOwnPropertyDescriptor(obj, 'fullName');
console.log(descriptor);
// Output: { get: [Function: get], set: [Function: set], enumerable: true, configurable: true }
```

### Key Points
* Object.getOwnPropertyDescriptor() allows you to inspect the attributes of a specific property on an object.
* The method returns undefined if the property does not exist on the object.
* This method is often used in conjunction with Object.defineProperty() or Object.defineProperties() to understand or manipulate property attributes.

### Use Cases
* Checking property attributes such as mutability (writable), enumerability (enumerable), or configurability (configurable).
* Implementing custom logic based on the type of properties (data property vs accessor property) found on an object.
* Performing property-related introspection and manipulation in advanced object manipulation scenarios.

### Compatibility
* The Object.getOwnPropertyDescriptor() method is part of ECMAScript 5 (ES5) standard and is supported in all modern browsers.

### Notes
* Property descriptors are essential for understanding the behavior and characteristics of object properties in JavaScript.
* Use caution when modifying property attributes (writable, enumerable, configurable) using Object.defineProperty() based on information obtained from Object.getOwnPropertyDescriptor(), as improper changes can lead to unexpected behavior.

Object.getOwnPropertyDescriptor() is a powerful method for examining and understanding the attributes of object properties in JavaScript, providing insights into the behavior of object properties within the language. 

<hr style="background: red; border-radius: 2px;">


# 9. getOwnPropertyDescriptors()

Syntax ```Object.getOwnPropertyDescriptors(obj)```
* **obj:** The object from which to retrieve the property descriptors.

### Parameters
* **obj:** The object from which to retrieve the property descriptors.

### Return Value
* An object containing property descriptors for all own properties (both data and accessor properties) of the specified object.


1. Using Object.getOwnPropertyDescriptors() to get descriptors of properties
```javascript 
const obj = {
  name: 'John',
  age: 30,
  get fullName() {
    return `${this.name} Doe`;
  }
};

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
```

Output :-
```javascript 
{
  name: {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
  },
  fullName: {
    get: [Function: get fullName],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
```

### Key Points
* Object.getOwnPropertyDescriptors() returns a new object containing property descriptors for all own properties (both data and accessor) of the specified object.
* The returned object's keys correspond to the property names of the object, and the values are property descriptor objects.
* This method is useful for obtaining a complete snapshot of property descriptors for an object, including information about property attributes (value, writable, enumerable, configurable) and accessor methods (get and set).

### Use Cases
* Obtaining detailed information about all properties (including non-enumerable and accessor properties) of an object.
* Cloning an object along with its property descriptors to preserve property attributes when creating a new object.
* Implementing custom object manipulation or introspection logic based on property descriptors.

### Compatibility
* The Object.getOwnPropertyDescriptors() method was introduced in ECMAScript 2017 (ES8) and is supported in all modern browsers. For compatibility with older environments, consider using a polyfill.

### Notes
* Object.getOwnPropertyDescriptors() is often used in advanced object manipulation scenarios where detailed information about object properties and their attributes is required.
* The returned property descriptors can be used in conjunction with methods like Object.defineProperties() or Object.create() to construct or modify objects with specific property attributes.

Overall, Object.getOwnPropertyDescriptors() is a powerful method for obtaining comprehensive property descriptor information for objects in JavaScript, enabling advanced object manipulation and introspection capabilities.


<hr style="background: red; border-radius: 2px;">


# 10. getOwnPropertyNames()

Syntax ```Object.getOwnPropertyNames(obj)```
* **obj:** The object from which to retrieve the property names.

1. Using Object.getOwnPropertyNames() to get property names of an object
```javascript 
const obj = {
  name: 'John',
  age: 30
};

Object.defineProperty(obj, 'city', {
  value: 'New York',
  enumerable: false // Non-enumerable property
});

const propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames);
// Output: [ 'name', 'age', 'city' ]
```

### Parameters
* **obj:** The object from which to retrieve the property names.

### Return Value
* An array of strings representing the names of all own properties (both enumerable and non-enumerable) of the specified object.

### Key Points
* Object.getOwnPropertyNames() returns an array of strings representing the names of all own properties (both enumerable and non-enumerable) of the specified object.
* This method does not include properties from the prototype chain; it only retrieves properties that belong directly to the object (obj).
* Non-enumerable properties (i.e., properties with enumerable: false in their descriptors) are also included in the returned array.

### Use Cases
* Obtaining a list of all property names (including non-enumerable ones) of an object for introspection or debugging purposes.
* Implementing custom logic based on the names of properties present on an object.
* Working with objects where the visibility of properties (enumerable vs. non-enumerable) is crucial.

### Compatibility
* The Object.getOwnPropertyNames() method is part of ECMAScript 5 (ES5) standard and is supported in all modern browsers.

### Notes
* Object.getOwnPropertyNames() provides a straightforward way to retrieve a list of all own property names of an object, regardless of their enumerability.
* For obtaining property descriptors (including attributes like enumerable, configurable, etc.), consider using Object.getOwnPropertyDescriptors().

Overall, Object.getOwnPropertyNames() is a useful method for examining the complete set of own properties (both enumerable and non-enumerable) of an object in JavaScript, providing insights into the structure and attributes of objects. 

<hr style="background: red; border-radius: 2px;">


# 11. getOwnPropertySymbols()

Syntax ```Object.getOwnPropertySymbols(obj)```
* **obj:** The object from which to retrieve the symbol properties.

1. Using Object.getOwnPropertySymbols() to get symbol properties of an object
```javascript 
const obj = {
  [Symbol('key1')]: 'value1',
  [Symbol('key2')]: 'value2',
  regularKey: 'regularValue'
};

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols);
// Output: [ Symbol(key1), Symbol(key2) ]
```

### Parameters
* **obj:** The object from which to retrieve the symbol properties.

### Return Value
* An array of symbol properties (symbols) that are defined as own properties of the specified object.

### Key Points
* Object.getOwnPropertySymbols() returns an array of symbols that are defined as own properties (including non-enumerable symbols) of the specified object.
* This method does not retrieve regular (string-based) property keys; it exclusively deals with symbol-based properties.
* The returned array includes only symbols that are directly defined on the object (obj); symbols from the prototype chain are not included.

### Use Cases
* Working with symbols as unique property identifiers, particularly for properties that are meant to be private or internal to an object.
* Implementing object structures where certain properties are intended to be accessed only through symbol keys.
* Utilizing symbols to avoid name clashes and ensure uniqueness in object properties.

### Compatibility
* The Object.getOwnPropertySymbols() method is part of ECMAScript 6 (ES6) and is supported in all modern browsers.

### Notes
* Symbol properties obtained via Object.getOwnPropertySymbols() are not enumerable and will not be returned by methods like Object.keys() or for...in loops.
* Symbols are unique and immutable values in JavaScript, providing a way to create non-public or hidden properties on objects.

Overall, Object.getOwnPropertySymbols() is a specialized method for working with symbol-based properties on objects, allowing developers to interact with symbols as unique identifiers and leverage them for advanced object-oriented programming techniques.



<hr style="background: red; border-radius: 2px;">


# 12. getPrototypeOf()

Syntax ```Object.getPrototypeOf(obj)```
* **obj:** The object whose prototype you want to retrieve.

1. Using Object.getPrototypeOf() to retrieve the prototype of an object:
```javascript 
const person = {
  name: 'John',
  age: 30
};

const prototypeOfPerson = Object.getPrototypeOf(person);
console.log(prototypeOfPerson === Object.prototype); // Output: true
```

### Parameters
* **obj:** The object from which to retrieve the prototype.

### Return Value
* The prototype object of the specified object. If the object has no prototype (i.e., its prototype is null), null is returned.

### Key Points
* Object.getPrototypeOf() allows you to access the prototype object of a specified object, which is accessed via the internal [[Prototype]] property.
* Every object in JavaScript is linked to a prototype object, which defines the object's inherited properties and methods.
* If an object is created using object literal syntax ({}) or with new Object(), its prototype is Object.prototype.
* The prototype object can be modified using the __proto__ property or the Object.setPrototypeOf() method.

### Use Cases
* Checking the prototype of an object to understand its inheritance chain and the properties/methods it inherits.
* Implementing inheritance and prototype-based programming in JavaScript by manipulating object prototypes.
* Working with built-in objects and constructors to access and extend their prototypes.

### Compatibility
* The Object.getPrototypeOf() method is part of ECMAScript 5 (ES5) standard and is supported in all modern browsers.

### Notes
* Avoid using __proto__ for accessing or modifying prototypes in production code, as it is a non-standard property. Instead, use Object.getPrototypeOf() and Object.setPrototypeOf() for safe and standardized prototype manipulation.
* Understanding prototypes is crucial for effective object-oriented programming in JavaScript, as it enables inheritance and property delegation.

Overall, Object.getPrototypeOf() is a fundamental method for working with object prototypes in JavaScript, allowing developers to inspect and manipulate the inheritance hierarchy of objects.

<hr style="background: red; border-radius: 2px;">


# 13. groupBy()

The purpose of groupBy() is to take a collection of items (e.g., an array of objects) and organize them into groups (usually represented as an object or map) based on a specified property or key. Each group contains elements that share a common value for the specified property.


1. (Using lodash)
Here's an example of how groupBy() can be used with lodash:

```javascript 
const _ = require('lodash');

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Alice', age: 25 },
  { id: 3, name: 'Bob', age: 30 }
];

const groupedByAge = _.groupBy(users, 'age');
console.log(groupedByAge);
```

Output :-
```javascript 
{
  '25': [ { id: 2, name: 'Alice', age: 25 } ],
  '30': [
    { id: 1, name: 'John', age: 30 },
    { id: 3, name: 'Bob', age: 30 }
  ]
}
```

 groupBy() from lodash is used to group the users array by the age property. The resulting object groupedByAge contains keys representing distinct ages and values representing arrays of users with the corresponding age.


Implementation
Here's a simplified implementation of groupBy() for educational purposes:
```javascript 
function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

// Example usage
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Alice', age: 25 },
  { id: 3, name: 'Bob', age: 30 }
];

const groupedByAge = groupBy(users, 'age');
console.log(groupedByAge);
```
This custom groupBy() function takes an array (array) and a property name (key) as input. It uses the reduce() method to iterate over the array and accumulate elements into groups based on the specified key.


### Use Cases
* Grouping data for display or analysis based on shared properties (e.g., age, category, status).
* Organizing and processing data in a structured manner for reporting or visualization purposes.
* Implementing custom data transformations or aggregations on collections of objects or data sets.

### Notes
* When using groupBy(), ensure that the key used for grouping exists and is meaningful within the context of the data structure.
* Libraries like lodash provide efficient and battle-tested implementations of groupBy() (and other similar utilities) that handle various edge cases and optimizations.


In summary, groupBy() is a powerful utility for organizing and categorizing data based on specified criteria, often used in functional programming and data manipulation tasks. While not native to JavaScript, it's widely available through popular libraries and can be implemented for specific use cases as needed. 



<hr style="background: red; border-radius: 2px;">


# 14. hasOwn()

The hasOwn() method is not a standard method in JavaScript or part of the built-in Object prototype. It appears that hasOwn() may be a custom or specialized method implemented within a specific context or library, but it is not recognized as a standard JavaScript method.

If you are referring to a custom method named hasOwn() within a particular codebase or library, I would recommend checking the specific documentation or source code associated with that method to understand its purpose and behavior.

In general JavaScript programming, the concept of checking whether an object has its own property (as opposed to an inherited property) is typically performed using the hasOwnProperty() method, which is part of the Object.prototype.

### Using hasOwnProperty()
The hasOwnProperty() method is used to check whether an object has a property with a specific key as its own (non-inherited) property.


Syntax ```object.hasOwnProperty(propertyKey)```
* **object:** The object on which to check for the existence of the property.
* **propertyKey:** The name of the property to check.

```javascript 
const person = {
  name: 'John',
  age: 30
};

console.log(person.hasOwnProperty('name')); // Output: true
console.log(person.hasOwnProperty('toString')); // Output: false (inherited method)
```
In the above example, person.hasOwnProperty('name') returns true because name is an own property of the person object. Conversely, person.hasOwnProperty('toString') returns false because toString is an inherited property from Object.prototype, not an own property of person.



### Return Value
A boolean value indicating whether the object has the specified property as its own property (true) or not (false).

### Conclusion
If you are looking to check for the existence of an own property on an object in JavaScript, hasOwnProperty() is the standard method to use. If you have specific questions or concerns related to a custom hasOwn() method within a particular context or library, please provide more details so that I can offer more targeted assistance.



<hr style="background: red; border-radius: 2px;">


# 15. hasOwnProperty()

Syntax ```object.hasOwnProperty(propertyKey)```
* **object:** The object on which to check for the existence of the property.
* **propertyKey:** A string representing the name or Symbol of the property to check.

```javascript 
const person = {
  name: 'John',
  age: 30
};

console.log(person.hasOwnProperty('name')); // Output: true
console.log(person.hasOwnProperty('toString')); // Output: false
```
* person.hasOwnProperty('name') returns true because 'name' is an own property of the person object.
* person.hasOwnProperty('toString') returns false because 'toString' is not an own property of the person object; it's inherited from Object.prototype.

### Return Value
* A boolean value indicating whether the object has the specified property as its own property (true) or not (false).


### Key Points
* hasOwnProperty() checks whether a property exists directly on the object and does not consider properties inherited from its prototype chain.
* The method returns true if the specified property exists as an own property of the object, and false otherwise.
* The property key can be a string representing the name of a property or a Symbol (for symbol properties).

### Use Cases
* Checking if an object has a specific property before accessing its value to avoid potential errors.
* Iterating over an object's own properties without including inherited properties.
* Implementing custom logic based on the existence of certain properties on an object.

### Notes
* hasOwnProperty() is safe to use even if the property name is 'hasOwnProperty', as this method is not affected by shadowing.
* This method is useful for scenarios where you need to differentiate between an object's own properties and inherited properties from its prototype chain.

### Compatibility
* hasOwnProperty() is a standard method defined in ECMAScript (JavaScript) and is supported in all modern browsers.

Overall, hasOwnProperty() is a fundamental method for property introspection in JavaScript, allowing developers to determine the ownership of properties on objects. 

<hr style="background: red; border-radius: 2px;">


# 16. is()

This method behaves similarly to the === (strict equality) operator.

Syntax ```Object.is(value1, value2)```
* value1, value2: The values to compare.

### Return Value
* A boolean indicating whether value1 is equal to value2.


```javascript 
console.log(Object.is(5, 5)); // Output: true
console.log(Object.is('hello', 'hello')); // Output: true
console.log(Object.is(null, null)); // Output: true

console.log(Object.is(0, -0)); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is({}, {})); // Output: false (different objects)
```

### Key Points
* Object.is() differs from the === operator in a few specific cases:
  * It treats positive and negative zeros (+0 vs -0) as unequal.
  * It treats NaN values as equal to each other.
* For most cases, Object.is() behaves similarly to ===, but with the aforementioned differences.
* This method can be useful when you need a strict equality comparison that considers edge cases like NaN or signed zero (+0, -0).

### Use Cases
* Comparing values where the standard equality (===) might not produce the desired result due to special cases like NaN or signed zero.
* Implementing custom equality checks that are more nuanced than strict equality (===).

### Compatibility
* Object.is() was introduced in ECMAScript 6 (ES6) and is supported in all modern browsers. For older environments, consider using a polyfill if necessary.


### Notes
* Use Object.is() when you need to perform strict value equality comparisons that consider special cases like NaN or signed zero.
* Be aware of the specific behavior of Object.is() compared to the === operator to avoid unexpected results in your comparisons.

Overall, Object.is() provides a useful alternative to === in scenarios where strict value equality is required, especially when dealing with special JavaScript values like NaN or signed zero. 


<hr style="background: red; border-radius: 2px;">


# 17. isExtensible()

The Object.isExtensible() method in JavaScript is used to determine whether an object is extensible, meaning whether new properties can be added to it. An object is extensible if it is not sealed (Object.seal()) or frozen (Object.freeze()) and if new properties can be added to it.



Syntax ```Object.isExtensible(obj)```
* **obj:** The object to check for extensibility.

1. Checking if an object is extensible
```javascript 
const obj1 = {};
console.log(Object.isExtensible(obj1)); // Output: true

const obj2 = { name: 'John' };
Object.seal(obj2);
console.log(Object.isExtensible(obj2)); // Output: false
```

### Return Value
* A boolean value indicating whether the object is extensible (true) or not (false).

### Key Points
* An object is considered extensible if new properties can be added to it using assignment (obj.prop = value) or Object.defineProperty().
* Sealed objects (created using Object.seal()) are not extensible, meaning no new properties can be added to them, although existing properties can be modified or deleted.
* Frozen objects (created using Object.freeze()) are also not extensible, and their existing properties cannot be modified or deleted.

### Use Cases
* Checking if an object allows the addition of new properties dynamically based on runtime conditions.
* Implementing defensive programming practices by ensuring that objects cannot be modified unexpectedly.

### Notes
* Use Object.isExtensible() to check if an object can have new properties added to it before attempting to modify the object.
* Objects created with object literals ({}) are extensible by default, but this behavior can be changed using methods like Object.seal() or Object.freeze().

### Compatibility
* Object.isExtensible() is part of ECMAScript 5 (ES5) and is supported in all modern browsers.

Overall, Object.isExtensible() provides a way to check the extensibility of an object in JavaScript, allowing developers to control and verify the ability to add new properties to objects based on their current state. 

<hr style="background: red; border-radius: 2px;">


# 18. isFrozen()

Syntax ```Object.isFrozen(obj)```
* **obj:** The object to check for frozen status.

1. Checking if an object is frozen
```javascript 
const obj1 = {};
console.log(Object.isFrozen(obj1)); // Output: false

const obj2 = { name: 'John' };
Object.freeze(obj2);
console.log(Object.isFrozen(obj2)); // Output: true
```

### Return Value
* A boolean value indicating whether the object is frozen (true) or not (false).

### Key Points
* An object is considered frozen if it has been made non-extensible (Object.preventExtensions()) and if all of its properties are non-configurable and non-writable.
* Frozen objects are essentially immutable; their existing properties cannot be modified, and new properties cannot be added or removed.
* Attempting to modify a property on a frozen object in strict mode ('use strict') will result in a TypeError.

### Use Cases
* Creating immutable objects where the properties cannot be changed after creation.
* Implementing defensive programming practices to prevent unintended modifications to critical objects.

### Notes
* Freezing an object using Object.freeze() affects its own properties but does not recursively freeze objects referenced as its properties.
* Frozen objects are typically used in scenarios where data integrity and immutability are important, such as in functional programming or state management.

### Compatibility
Object.isFrozen() is part of ECMAScript 5 (ES5) and is supported in all modern browsers.

Overall, Object.isFrozen() provides a way to check if an object is immutable and cannot be modified, allowing developers to enforce data immutability and prevent unintended changes to critical objects in JavaScript.



<hr style="background: red; border-radius: 2px;">


# 19. isSealed()

The Object.isSealed() method in JavaScript is used to determine whether an object is sealed, meaning whether its properties are non-configurable (configurable: false) and thus cannot be deleted or have their attributes (except value and writable) changed. An object is considered sealed if it is not extensible (Object.preventExtensions() has been called) and all of its existing properties are non-configurable.


Syntax ```Object.isSealed(obj)```
* **obj:** The object to check for sealed status.

1. Checking if an object is sealed:
```javascript 
const obj1 = {};
console.log(Object.isSealed(obj1)); // Output: false

const obj2 = { name: 'John' };
Object.seal(obj2);
console.log(Object.isSealed(obj2)); // Output: true
```

### Return Value
* A boolean value indicating whether the object is sealed (true) or not (false).

### Key Points
* An object is considered sealed if it is not extensible (Object.preventExtensions()) and all of its properties are non-configurable (configurable: false).
* Sealed objects can have their property values changed (if writable) but cannot have properties added, deleted, or have their attributes changed (except value and writable).

### Use Cases
* Creating objects with fixed structure and preventing modifications to their properties' configurations.
* Implementing defensive programming practices to ensure that object properties remain stable and predictable after creation.

### Notes
* Sealing an object using Object.seal() affects its own properties but does not recursively seal objects referenced as its properties.
* Sealed objects are typically used in scenarios where you want to prevent modifications to object structure while still allowing changes to property values.

### Compatibility
* Object.isSealed() is part of ECMAScript 5 (ES5) and is supported in all modern browsers.

Overall, Object.isSealed() provides a way to check if an object is sealed and immutable with respect to property configurations, allowing developers to enforce stability and predictability in object structures in JavaScript.



<hr style="background: red; border-radius: 2px;">


# 20. isPrototypeOf()

Syntax ```prototypeObj.isPrototypeOf(object)```
* **prototypeObj:** The object whose prototype chain is to be checked.
* **object:** The object whose prototype chain is checked against prototypeObj.

1. Using isPrototypeOf() to check the prototype chain
```javascript 
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog('Buddy', 'Labrador');

console.log(Animal.prototype.isPrototypeOf(myDog)); // Output: true
console.log(Object.prototype.isPrototypeOf(myDog)); // Output: true (Object is in the prototype chain of all objects)
```

### Return Value
* A boolean value indicating whether prototypeObj is in the prototype chain of object (true) or not (false).

### Key Points
* isPrototypeOf() is called on an object (prototypeObj), and it checks whether this object's prototype is in the prototype chain of the specified object.
* This method is useful for understanding the inheritance relationships between objects in JavaScript, especially in prototypal inheritance.

### Use Cases
* Checking the inheritance relationships between objects and prototypes.
* Determining whether an object inherits from another object or constructor function.

### Notes
* isPrototypeOf() is commonly used when working with custom constructor functions and prototype-based inheritance.
* This method traverses the prototype chain of the specified object to determine inheritance relationships.

### Compatibility
* isPrototypeOf() is part of ECMAScript 3 (ES3) and is supported in all modern browsers.

Overall, isPrototypeOf() is a fundamental method for inspecting the prototype relationships between objects in JavaScript, allowing developers to understand and manipulate inheritance structures in prototype-based programming. 


<hr style="background: red; border-radius: 2px;">


# 21. keys()

Syntax ```Object.keys(obj)```
* **obj:** The object whose enumerable own property names will be returned.

1. Using Object.keys() to retrieve property names of an object
```javascript 
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const keys = Object.keys(person);
console.log(keys); // Output: [ 'name', 'age', 'city' ]
```

### Return Value
* An array of strings representing the enumerable own property names of the specified object.

### Key Points
* Object.keys() returns an array of strings representing the names of all own enumerable properties of the specified object.
* It does not include properties from the prototype chain; it only retrieves properties that belong directly to the object (obj).
* The order of property names in the array is not guaranteed to be consistent across different JavaScript engines.

### Use Cases
* Iterating over the own properties of an object using a for...of loop or array methods like forEach().
* Obtaining a list of property names to perform operations like serialization or manipulation.

### Notes
* Object.keys() only retrieves the names of own enumerable properties. To include non-enumerable properties or properties from the prototype chain, consider using Object.getOwnPropertyNames() or Reflect.ownKeys().

### Compatibility
* Object.keys() is part of ECMAScript 5 (ES5) and is supported in all modern browsers.


1. Using Object.keys() to iterate over an object's properties
```javascript 
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const keys = Object.keys(person);
keys.forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
```
This example demonstrates how Object.keys() can be used in conjunction with forEach() to iterate over an object's properties and access their values.

Overall, Object.keys() is a useful method for obtaining an array of an object's own enumerable property names, allowing for easy access and iteration over the properties of an object. 


<hr style="background: red; border-radius: 2px;">


# 22. preventExtensions()

Syntax ```Object.preventExtensions(obj)```
* **obj:** The object to make non-extensible.

1. Using Object.preventExtensions() to make an object non-extensible
```javascript 
const person = {
  name: 'John',
  age: 30
};

Object.preventExtensions(person);

person.city = 'New York'; // Attempting to add a new property
console.log(person.city); // Output: undefined

person.age = 35; // Modifying an existing property
console.log(person.age); // Output: 35

delete person.name; // Deleting an existing property
console.log(person.name); // Output: undefined

```

### Return Value
* The same object that was passed to the method (obj).

### Key Points
* Object.preventExtensions() prevents the addition of new properties to the specified object.
* Existing properties of a non-extensible object can still be modified or deleted.
* Attempting to add a new property to a non-extensible object (or its prototype) in strict mode ('use strict') will throw a TypeError.

### Use Cases
* Creating immutable objects where the structure is fixed after creation.
* Ensuring that the properties of an object remain stable and prevent unexpected modifications.

### Notes
* Non-extensible objects are not necessarily frozen (Object.isFrozen()); they can still have their existing properties modified or deleted.
* To make an object both non-extensible and immutable (preventing modifications to existing properties), consider using Object.freeze().

### Compatibility
* Object.preventExtensions() is part of ECMAScript 5 (ES5) and is supported in all modern browsers.

### Considerations
* Use Object.isExtensible(obj) to check if an object is extensible before attempting to modify it to ensure predictable behavior.
* Once an object is made non-extensible, it cannot be reverted to an extensible state.

Overall, Object.preventExtensions() provides a way to make an object non-extensible, preventing the addition of new properties and ensuring stability in object structures. 


<hr style="background: red; border-radius: 2px;">


# 23. propertyIsEnumerable()

Syntax ```obj.propertyIsEnumerable(prop)```
* **obj:** The object containing the property to be checked.
* **prop:** The name of the property whose enumerability is to be checked.

1. Using propertyIsEnumerable() to check the enumerability of properties
```javascript 
const person = {
  name: 'John',
  age: 30
};

console.log(person.propertyIsEnumerable('name')); // Output: true
console.log(person.propertyIsEnumerable('toString')); // Output: false (inherited method)
```

### Key Points
* propertyIsEnumerable() checks whether the specified property is directly defined on the object and whether it is enumerable.
* Properties inherited from the prototype chain (Object.prototype) are typically not enumerable unless explicitly defined as such.

### Use Cases
* Checking whether a specific property can be iterated over using for...in or included in operations that involve enumerable properties.
* Implementing custom logic based on the enumerability of properties within objects.

### Notes
* The method only checks the enumerability of directly defined properties on the object (obj) and does not traverse the prototype chain.
* Non-enumerable properties are typically properties that are not intended to be iterated over or included in serialization operations.

### Compatibility
* propertyIsEnumerable() is part of ECMAScript 1 (ES1) and is supported in all modern browsers.

### Considerations
* Use propertyIsEnumerable() in scenarios where you need to differentiate between enumerable and non-enumerable properties within objects.
* Be aware that inherited properties (from the prototype chain) are generally not enumerable unless explicitly marked as such.


Overall, propertyIsEnumerable() provides a straightforward way to check the enumerability of properties within objects, allowing developers to understand and work with the enumerable characteristics of object properties in JavaScript. 

<hr style="background: red; border-radius: 2px;">


# 24. seal()

Syntax ```Object.seal(obj)```
* **obj:** The object to seal.

1. Using Object.seal() to seal an object
```javascript 
const person = {
  name: 'John',
  age: 30
};

Object.seal(person);

person.city = 'New York'; // Attempting to add a new property
console.log(person.city); // Output: undefined

person.age = 35; // Modifying an existing property
console.log(person.age); // Output: 35

delete person.name; // Attempting to delete an existing property
console.log(person.name); // Output: 'John' (property still exists)

// Checking if the object is sealed
console.log(Object.isSealed(person)); // Output: true
```

### Return Value
* The same object that was passed to the method (obj).

### Key Points
* Object.seal() prevents new properties from being added to the specified object.
* Existing properties of a sealed object can still be modified (if writable) but cannot be deleted or have their attributes (except value and writable) changed.
* Attempting to modify the attributes of a property (e.g., change configurable, enumerable) of a sealed object's property in strict mode ('use strict') will throw a TypeError.

### Use Cases
* Creating objects with fixed structures where no new properties should be added after creation.
* Ensuring that the properties of an object remain stable and prevent unintentional modifications.

### Notes
* Sealing an object using Object.seal() affects its own properties but does not recursively seal objects referenced as its properties.
* Sealed objects are not necessarily immutable; their existing properties can still be modified if they are writable.

### Compatibility
* Object.seal() is part of ECMAScript 5 (ES5) and is supported in all modern browsers.

### Considerations
* Use Object.isSealed(obj) to check if an object is sealed before attempting to modify it to ensure predictable behavior.
* Once an object is sealed, its sealed status cannot be reversed (i.e., it cannot be made extensible or configurable again).

Overall, Object.seal() provides a way to seal an object, preventing the addition of new properties and ensuring stability in object structures by making existing properties non-configurable.

<hr style="background: red; border-radius: 2px;">


# 25. setPrototypeOf()

The Object.setPrototypeOf() method in JavaScript is used to change the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null. This method allows you to dynamically change the prototype chain of an object, effectively altering its inheritance.


Syntax ```Object.setPrototypeOf(obj, prototype)```
* **obj:** The object whose prototype is to be changed.
* **prototype:** The object that will become the new prototype of obj. This can be null or another object.

1. Using Object.setPrototypeOf() to change an object's prototype
```javascript 
// Base object
const animal = {
  speak() {
    console.log(`${this.name} makes a sound`);
  }
};

// Derived object
const dog = {
  name: 'Buddy'
};

// Change the prototype of `dog` to `animal`
Object.setPrototypeOf(dog, animal);

// `dog` can now access `speak` method from `animal`
dog.speak(); // Output: "Buddy makes a sound"
```

### Return Value
* The modified object (obj) whose prototype has been changed.

### Key Points
* Object.setPrototypeOf() dynamically changes the prototype of an object, allowing it to inherit properties and methods from another object.
* Changing an object's prototype affects its entire prototype chain, affecting the way properties are looked up when accessed.
* The prototype chain can be altered at runtime using Object.setPrototypeOf(), but this should be used judiciously due to potential performance implications.

### Use Cases
* Implementing prototype-based inheritance dynamically, based on runtime conditions or logic.
* Modifying existing objects to leverage shared behaviors and properties defined in other objects.

### Notes
* Changing an object's prototype using Object.setPrototypeOf() affects all instances of that object, as well as any objects that inherit from it.
* Directly modifying an object's prototype chain can lead to unexpected behavior and can impact performance if done excessively.

### Compatibility
* Object.setPrototypeOf() is part of ECMAScript 6 (ES6) and is supported in all modern browsers. However, modifying the prototype chain at runtime should be used judiciously for optimal performance.

### Considerations
* Changing the prototype chain of objects can be a powerful feature, but it is generally recommended to design object inheritance and composition carefully to avoid unexpected side effects.
* In many cases, using constructor functions and the prototype property for defining inheritance relationships is a more conventional and clearer approach than modifying the prototype chain at runtime.

Overall, Object.setPrototypeOf() provides a way to dynamically change the prototype of an object, allowing for flexible and dynamic object inheritance in JavaScript. 


<hr style="background: red; border-radius: 2px;">


# 26. toLocaleString()

Syntax ```obj.toLocaleString([locales [, options]])```
* locales (Optional): A string with a BCP 47 language tag, or an array of such strings, indicating the desired locale(s) for formatting. If not specified, the default locale of the runtime environment is used.
* options (Optional): An object containing configuration options for formatting the value. This can include properties like style, currency, minimumIntegerDigits, maximumFractionDigits, etc.

1. Using toLocaleString() with numbers
```javascript 
const number = 123456.789;

console.log(number.toLocaleString()); // Output based on browser's default locale
console.log(number.toLocaleString('en-US')); // Output: "123,456.789" (U.S. English)
console.log(number.toLocaleString('de-DE')); // Output: "123.456,789" (German)
```

2. Using toLocaleString() with dates
```javascript 
const date = new Date();

console.log(date.toLocaleString()); // Output based on browser's default locale
console.log(date.toLocaleString('en-US')); // Output: e.g., "5/3/2024, 10:30:45 AM" (U.S. English)
console.log(date.toLocaleString('de-DE')); // Output: e.g., "3.5.2024, 10:30:45" (German)

```

### Return Value
* A string representing the object's value formatted according to the specified locale and options.

### Key Points
* toLocaleString() provides localization support for formatting numbers, dates, and other objects into strings based on locale-specific preferences.
* The output format varies based on the specified locale and options, such as date and time formatting, currency formatting, and digit grouping (e.g., thousand separators).

### Use Cases
* Displaying numbers and dates in a user-friendly format based on the user's locale and language preferences.
* Internationalizing web applications to cater to users from different regions with varying formatting conventions.

### Notes
* The behavior and output of toLocaleString() may vary depending on the implementation in different JavaScript engines and browser environments.
* For advanced formatting requirements (e.g., custom date formats, currency symbols), consider using the Intl object and related classes (Intl.NumberFormat, Intl.DateTimeFormat) for more fine-grained control over formatting.

### Compatibility
* toLocaleString() is part of ECMAScript 5 (ES5) and is widely supported in all modern browsers.

### Considerations
* Ensure that the appropriate locales and formatting options are used to provide a consistent and localized user experience across different regions and languages.
* Test toLocaleString() output under different locales to verify that it behaves as expected for various formatting scenarios.


Overall, toLocaleString() is a versatile method for formatting object values into strings based on locale-specific conventions, making it a fundamental tool for internationalization and localization in JavaScript applications. 




<hr style="background: red; border-radius: 2px;">


# 27. toString()

Syntax ```obj.toString()```
* **obj:** The object whose string representation is to be returned.

1. Using toString() with different object types
```javascript 
const num = 123;
console.log(num.toString()); // Output: "123" (string representation of the number)

const arr = [1, 2, 3];
console.log(arr.toString()); // Output: "1,2,3" (comma-separated string of array elements)

const date = new Date();
console.log(date.toString()); // Output: e.g., "Tue May 03 2024 11:30:45 GMT+0000 (Coordinated Universal Time)" (string representation of the date)

const person = { name: 'John', age: 30 };
console.log(person.toString()); // Output: "[object Object]" (default string representation of an object)
```

### Return Value
* A string representing the object. The exact string representation depends on the object type and how the toString() method is implemented or overridden.

### Key Points
* toString() is inherited by all objects from Object.prototype.
* The default behavior of toString() for most built-in objects (numbers, arrays, dates) converts the object to a string representation that is generally useful.
* The default string representation of a custom object (e.g., {}) is [object Object], which may not be very informative.

### Use Cases
* Converting an object to a string when string concatenation or interpolation is needed.
* Customizing the behavior of toString() for custom objects to provide a meaningful string representation.

### Notes
* For most built-in objects, the toString() method is automatically called by JavaScript when an object needs to be represented as a string (e.g., in string contexts such as concatenation).
* Custom objects can override the toString() method to provide a customized string representation based on their internal state or properties.

### Compatibility
* toString() is part of ECMAScript 1 (ES1) and is supported in all modern browsers.

### Considerations
* Be aware that the default toString() behavior may not always provide the most useful representation for custom objects.
* When working with custom objects, consider overriding the toString() method to return a more informative string representation based on the object's properties.

Overall, toString() is a core method in JavaScript that provides a string representation of an object, and its behavior can be customized for custom objects to enhance readability and usability in various contexts. 


<hr style="background: red; border-radius: 2px;">


# 28. valueOf()

Syntax ```obj.valueOf()```
* **obj:** The object whose primitive value is to be returned.

1. Using valueOf() with different object types
```javascript 
const num = new Number(123);
console.log(num.valueOf()); // Output: 123 (primitive number value)

const bool = new Boolean(true);
console.log(bool.valueOf()); // Output: true (primitive boolean value)

const str = new String('Hello');
console.log(str.valueOf()); // Output: "Hello" (primitive string value)

const date = new Date();
console.log(date.valueOf()); // Output: 1652146800000 (primitive number value representing the timestamp)
```

### Return Value
* The primitive value of the object, which depends on the object type and how the valueOf() method is implemented or overridden.

### Key Points
* valueOf() is inherited by all objects from Object.prototype.
* The default behavior of valueOf() for built-in objects (e.g., Number, Boolean, String, Date) returns the primitive value corresponding to the object type.
* For custom objects, the valueOf() method can be overridden to return a custom primitive value based on the object's internal state or properties.

### Use Cases
* Obtaining the primitive value of an object for operations that expect primitive values (e.g., arithmetic operations, comparison).
* Customizing the behavior of valueOf() for custom objects to provide a meaningful primitive representation.

### Notes
* The valueOf() method is automatically called by JavaScript in contexts where an object needs to be coerced to a primitive value (e.g., in arithmetic operations with objects).
* The default behavior of valueOf() for custom objects is to return the object itself (this), which is generally not very useful for primitive operations.

### Compatibility
* valueOf() is part of ECMAScript 1 (ES1) and is supported in all modern browsers.

### Considerations
* For most built-in objects, the valueOf() method returns a primitive value that corresponds to the object type (e.g., number, boolean, string).
* When working with custom objects, consider overriding the valueOf() method to return a custom primitive value based on the object's properties or internal state.

Overall, valueOf() is a core method in JavaScript that provides the primitive value of an object, and its behavior can be customized for custom objects to enhance usability and interoperability with primitive ### value contexts. 

<hr style="background: red; border-radius: 2px;">


# 29. values()

Syntax ```Object.values(obj)```
* **obj:** The object whose enumerable property values are to be extracted.

1. Using Object.values() with an object
```javascript 
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);

console.log(values); // Output: [1, 2, 3]
```

### Return Value
* An array containing the values of the enumerable properties of the specified object.

### Key Points
* Object.values() extracts the property values of an object and returns them as an array.
* Only enumerable properties with string keys are included in the resulting array. Non-enumerable properties and properties with non-string keys are ignored.
* The array returned by Object.values() is in the same order as provided by a for...in loop (though with some differences, as it uses internal operations).

### Use Cases
* Iterating over the values of an object without having to explicitly loop over its keys.
* Converting an object's values into an array format for further processing or manipulation.

### Notes
* The array returned by Object.values() is not affected by changes made to the original object after the method is called.
* Object.values() only includes own enumerable properties of the object, excluding inherited properties and non-enumerable properties.

### Compatibility
* Object.values() is part of ECMAScript 2017 (ES8) and is supported in all modern browsers. For older environments, consider using a polyfill or alternative approach to achieve similar functionality.

### Considerations
* Be aware of the limitations of Object.values()—it only retrieves enumerable properties with string keys from the object.
* When dealing with complex objects or objects with diverse property types, ensure that the expected properties are included in the resulting array.

Overall, Object.values() provides a convenient way to extract enumerable property values from an object and work with them as an array, simplifying tasks that involve working with object properties in JavaScript.



<!-- __defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
__proto__ -->
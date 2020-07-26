<!-- @format -->

# Deep Javascript Foundations, v3

[slides](https://static.frontendmasters.com/resources/2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf)

# primitive type

- undefined
- string
- number
- boolean
- object
- symbol
- null
- bigInt

- `subtype` of object
- `function` or callable objects
- `array`

# dynamic type language

variables do not have types, values do

# emptiness

1. `undefined`
   There is a variable although at the moment it has no value.
2. `undeclared`
   It is never been created;
3. `uninitialized`
   consecuencua: you are not allow to touch it.

# special values

1. `NaN`: invalid number
   Defining:

```
Number('mai') //NaN
```

Operating with invalid numbers

```
'aa'-'bb' //NaN
```

It is the only value that It has no identity property. NaN is not equal to a NaN

```
NaN === NaN  //false
```

# negative zero

# coersion

Type convertion

Implicit coersion and explicit coersion.

When should we use explicit coersion? For example, when we wanna make sure that both of them are numbers so you don't get something weird:

```
if (Number(mayBeANumber1) < Number(mayBeANumber1)) {}
```

# equality

The decision about double equals and triple equals is an indicator of wheter you actually understand your program.
Decide what your types are, and make it obvius!

## possible quesitons:

- if I know the types, is coercion helpful or not?
- Is it more safe or is it less safe?
- Do you know the types on the comparison?
- Are too impredictable?
- Is coercion helpuful in a equality comparison?
- are you gaining readability?

## indicators:

- rule: knowing the types is always better than not knowing them
-

> `null` and `undefined`

- they are coercive to each other.
- they are indistibguishable through coercive equality

## doble equals

- if types are the same, then compare with triple equals `===`
- always compare primitives
- cuando tenés algo que NO es una primitiva, la convierte a primitiva.

> `==` summary

```
if the type are the same: ===
if `null` or `undefined` : true
if non-primitive: ToPrimitive
Prefer: Number
```

> when to use it

1. WHEN YOU KNOW THE TYPES!
   `==` is not about comparison with unknown types. Do not use `==` in that scenario! You should strive to know the types in your comparisons as much as possible.

# types

## Rules

> Knowing the types is always better than not knowing them

> Static types is not the only way to know your types

> if you know the types in a comparison, wheter the types match or not, `==` is the more sensible choice

> if you know the types in a comparison

- and the types are different: one `===` would be broken!

- and the types are equal: prefer the more powerfull `==`, or don't compare at all

> if you dont' know the types in a comparison, means not fully understanding your code

Not knowing the types, should be a rarety rather than the status quo. That part of the code is hard to understand because of that uncertainty.
The uncertainty of not knowing types should be obvious to the reader. The most obvious signal about uncertainty is `===`

> the `==` is preferable when you know the types

> the `===` should be reserved for the cases where you don't know the types

"I don't know the types, I am trying to protect myself".
"There is a triple equals, there are some uncertainty of the types " -> We need to restrict ourselves so we don't run into a corner case.

> Assume the worse case coercion when you don't know the types

> Not knowing the types is equivalent to assuming type conversion

The only safe response to that is protect yourself from that with `===`

# scope

> 13.3.1 Let and const declaration: the variables are created when their containing `Lexical Environment` is instantiated... when the `LexicalBinding` is evaluated, not when the variable is created

Steps:

1. compilation: formal declaration; lexical scope;
2. execution: execution statement; at run time;

1.problem: name colission.

2. solution 1: IIFE. make a function declaration that inmediatly executes. anonymous function. IIFE is an expression. Use cases (assign once a variable)
3. solution 2: block scoping.

## var and let

`var` should exists with `let`. There is no replacement.

### Semantic reasons:

- is your intend to use to use it everywhere or only use it in a block scope?
- `var`: it should be used across
- `let`: it is block scoped

### behavoiur reasons:

- `var` lexical scope (function) && initialization (undefined)
- `let` lexica scope (block) && initialization (uninitialized)

#### initialization

- `var` compaling time (create location) && initializa it with undefined (undefined state)
- `let` compaling time (create location) && do not initialize (unitialized state) that means you can not touch it yet

### Motivations:

1. **declaration near from assigment**: the further you separate the declaration form the assigment, the harder it is for people to understand.

### lexical scope

- `var`: function scope
- `let`: block scope

## const

1. confussion: with `const`, it does not change
2. clarity: with `cost`, you can not reassign

## kyle advices

1. use `var` for default
2. use `let` where it is helpfull
3. use `const` only with immutable primitive values (string, numbers, boolean)

```
const teacher = ["Maira", "Car"]
teacher[0] = "Cassie" //Allowed!
```

It is not immutable for object. Instead, use `Obejct.freeze`

> "I wanna to be super obvious" getify rule!

# closures

## modules

It encapsulate data (with closures) and behaviour (methods) together. The state (data) of a module is heild by its methods via closure.

### purpose

It is design to change variable state over time. `Modules` are design to track state over time.

```
var workshop = {
   teacher: "Mai",
   ask(question) { console.log(this.teacher, question); }
}
workshop.ask("Is this a module?")
```

This is not a module, because the `module` requires the concepts of `encapsulations`, there is an idea of visibility (hidden information, public information, private information)

> "if you have `closure`, you have `modules`" Kyle!

# this

`this` reference the execution context for that call

## purpose

To call functions in different contexts

## function invocation

There are four different ways to invoque a function

1. `implicit binding` : this is how we share behaundefined 'Still no `this`?'
   viour among different contexts
2. `explicit binding`: with the keyword `call`. We explicit set the context.
3. `hard binding`
4. `new binding`

### order of invocation

1. is the function called by `new`?
2. is the function called by `call()` or `apply()`? (note: `bind()` effectivly uses `apply()`)
3. Is the function called on a context object?
4. DEFAULT: global object ( except strict mode)

## `this` in arrow function

It is going to lexical resolve

### case uses

The only time when you should use an arrow function is when you've gonna benefit from lexical this behaviour.

> `this` it point to the execution context

> Only Use `=>` when you need lexical `this`

# prototypes

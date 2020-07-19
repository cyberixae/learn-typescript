
# JavaScript

We will start by studying some functions in **JavaScript**. JavaScript is essentially TypeScript without an explicit *type language*. The types of JavaScript programming libraries are maintained separately by the **DefinitelyTyped** project. However, for our purposes in this chapter it should be enough to keep track of the types inside our heads.

## Functions

Functions are *abstractions* that let us describe complex things in a concise manner. For example lets consider writing a quintuple containing the same literal value `'apple'` five times. One option is to write it directly `['apple', 'apple', 'apple', 'apple', 'apple']`. Functions provide us an alternative that lets us separate the concept of homogenous quintuple `(x => [x, x, x, x, x])('apple')` from the literal value. One key benefit of using an abstraction is that it protects us from typos. Another benefit is that we can use the same abstract concept for another value `(x => [x, x, x, x, x])('pomelo')`.

Lets look at the function `(x => [x, x, x, x, x])` in greater detail. The parenthesis in this case are not necessarily needed but they prevent the function definition from getting mixed up with other code. The right side `[x, x, x, x, x]` of the double arrow `=>` is the *body* of the function expression. The left side `x` of the double arrow contains a variable name that *binds* all corresponding variables in the body of the expression.

We can *apply* the function to a value by writing the input value in parenthesis after the function definition `(x => [x, x, x, x, x])('a')`. Another way of saying that we apply the function to the value, is to say that we *pass* the value to the function as an *argument*. We *evaluate* the function `(x => [x, x, x, x, x])` by replace the instances of the bound variable `x` in the function body `[x, x, x, x, x]` with the input `'a'` to construct the output `['a', 'a', 'a', 'a', 'a']`. Getting rid of one level of abstraction in this manner is called *beta reduction* `→β`. Performing beta reduction several times until we reach the *normal form* `∎` is called *execution*.

Below is the javascript source code matching each step of the execution as discussed above. This is meaningles as a program since each line has the same value. However, doing beta reductions by hand may be useful for learning the basics of function application. Each line ends with a *line comment* that documents the steps required to get to the next form. The line comment starts with two slashes `//` and would be ignored by JavaScript if we decided to run the code.

```javascript
(x => [x, x, x, x, x])('a')  // →β
['a', 'a', 'a', 'a', 'a']    // ∎
```

In the example above we used the square backets to return several values at once. It was useful for demonstrating how functions work. We will later revisit the square brackets as we discus dealing with multiple values but lets push that concept aside for a moment and take a look at some simple functions that do not require dealing with multiple values.

The *identity function* `(x => x)` is perhaps the most fundamental of all functions. Applying it to a value will simply produce the same value. The input can be a literal or another function.

```javascript
(x => x)('a')                  // →β
'a'                            // ∎

(x => x)(y => y)(z => z)       // →β
(y => y)(z => z)               // →β
(z => z)                       // ∎


(x => x)(y => y)(z => z)('a')  // →β
(y => y)(z => z)('a')          // →β
(z => z)('a')                  // →β
'a'                            // ∎
```

A *constant function* always produces the same output and simply ignores the input. The constant returned by a constant function can also be a literal or another function.

```javascript
(x => 'b')('a')                // →β
'b'                            // ∎

(x => 'b')(y => y)             // →β
'b'                            // ∎

(x => (b => b))('a')           // →β
(b => b)                       // ∎

(x => (b => b))(y => y)        // →β
(b => b)                       // ∎
```

Parenthesis are sometimes ommited when the purpose of having multiple functions is to simply take in multiple arguments. For example the function `(x => (y => (z => z)))` is simply a *curried* function that takes three arguments (`x`, `y`, `z`) and returns its last argument `z`. The extra parentheses are not a problem for the computer but make make the function definition harder to understand for a human. Rewriting `=` the function as `(x => y => z => z)` makes it easier for a human to see its true meaning.

```javascript
(x => (y => (z => z)))('a')('b')  // =
(x => y => z => z)('a')('b')      // →β
(y => z => z)('b')                // →β
(z => z)                          // ∎
```


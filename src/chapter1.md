
# JavaScript

We will start by studying some functions in **JavaScript**. JavaScript is essentially TypeScript without an explicit *type language*. The types of JavaScript programming libraries are maintained separately by the **DefinitelyTyped** project. However, for our purposes in this chapter it should be enough to keep track of the types inside our heads.

## Functions

Functions are *abstractions* that let us describe complex things in a concise manner. For example lets consider writing a quintuple containing the same literal value `'apple'` five times. One option is to write it directly `['apple', 'apple', 'apple', 'apple', 'apple']`. Functions provide us an alternative that lets us separate the concept of homogenous quintuple `(x => [x, x, x, x, x])('apple')` from the literal value. One key benefit of using an abstraction is that it protects us from typos. Another benefit is that we can use the same abstract concept for another value `(x => [x, x, x, x, x])('pomelo')`.

Lets look at the function `(x => [x, x, x, x, x])` in greater detail. The parenthesis in this case are not necessarily needed but they prevent the function definition from getting mixed up with other code. The right side `[x, x, x, x, x]` of the double arrow `=>` is the *body* of the function expression. The left side `x` of the double arrow contains a variable name that *binds* all corresponding variables in the body of the expression.

We can *apply* the function to a value by writing the input value in parenthesis after the function definition `(x => [x, x, x, x, x])('a')`. Another way of saying that we apply the function to the value, is to say that we *pass* the value to the function as an *argument*. We *evaluate* the function `(x => [x, x, x, x, x])` by replace the instances of the bound variable `x` in the function body `[x, x, x, x, x]` with the input `'a'` to construct the output `['a', 'a', 'a', 'a', 'a']`. Getting rid of one level of abstraction in this manner is called *beta reduction* `→β`. Performing beta reduction several times until we reach the *normal form* is called *execution*. Once the normal form is reached the program is terminated `∎` and the final answer is returned.

Below is the javascript source code matching each step of the execution as discussed above. This is meaningles as a program since each line has the same value. However, doing beta reductions by hand may be useful for learning the basics of function application. Each line ends with a *line comment* that documents the steps required to get to the next form. The line comment starts with two slashes `//` and would be ignored by JavaScript if we decided to run the code.

```javascript
(x => [x, x, x, x, x])('a')  // →β
['a', 'a', 'a', 'a', 'a']    // ∎
```

In the example above we used the square backets to return several values at once. It was useful for demonstrating the benefit of working with functions. We will later revisit the square brackets as we discus how to pack and unpack several values together but lets push that concept aside for a moment and take a look at some simple functions.

The *identity function* `(x => x)` is perhaps the most fundamental of all functions. Applying it to a value will simply produce the same value. The input can be a literal or another function. It is an answer to the question "What shall we do with this?" and it means "Lets keep it as it is."

```javascript
(x => x)('a')                  // →β
'a'                            // ∎

(x => x)(y => y)               // →β
(y => y)                       // ∎


(x => x)(y => y)(z => z)('a')  // →β
(y => y)(z => z)('a')          // →β
(z => z)('a')                  // →β
'a'                            // ∎
```

A *constant function* always produces the same output and simply ignores the input. Essentially constant functions are containers that store something for later use.

```javascript
(x => 'treasure')('key')       // →β
'treasure'                     // ∎

(x => (a => a))('key')         // →β
(a => a)                       // ∎
```

A function taking only one argument can return another function taking another argument. This concept is called *currying*. The extra parenthesis are often ommited when currying is being used. For example the function `(a => (b => (c => c)))` might look complicated. However, the meaning of the function becomes easier to understand if we omit some of the unnecessary paranthesis from its definition `(a => b => c => c)`. It takes three options (`a`, `b`, `c`) as arguments and selects the last option `c`. It could be used as an answer to the question "What would you like to drink -- beer, soda or water?"

```javascript
(a => b => c => c)('beer')('soda')('water')      // →β
(b => c => c)('soda')('water)                    // →β
(c => c)('water')                                // →β
'water'                                          // ∎
```

Similarly we can answer a true or false question with a function that picks the first one of two options `(t => f => t)` or with the function that picks the second one of two options`(t => f => f)`. For example question "Whales are mammals -- true or false?" could be answered with the function `(t => f => t)` that picks the first option. When we look at its execution we see how the constant function `(f => 'true')` plays an important role by acting as temporary storage for the final answer.

```javascript
(t => f => t)('true')('false')                   // →β
(f => 'true')('false')                           // →β
'true'                                           // ∎
```

Above we have seen that functions can be used for storing values and they can also act as answers for simple questions. We can also answer questions like "How many beers are there in a sixpack of beers?" To answer this question using functions we need two things -- definition for beer `b` and definition for Joe `j`. We then apply all the beers of a sixpack to Joe and return Joe as the result. Giving definitions for beer and Joe are perhaps out of scope.

```javascript
(b => j => b(b(b(b(b(b(j)))))))                  // ∎
```

The function `(x => x(x))` that applies its input to itself goes by the name *omega*. We can try passing it the identity function to see it in action. Nothing too crazy happens, it simply gets reduced to the identity function. If we pass omega to itself, however, we end up in an infinite loop of beta reduction. If you try running it on a computer, it will either run forever or atleast until some kind of freeze `☃` or crash occurs.

```javascript
(x => x(x))(y => y)               // →β
(y => y)(y => y)                  // →β
(y => y)                          // ∎

(x => x(x))(x => x(x))            // →β
(x => x(x))(x => x(x))            // →β
(x => x(x))(x => x(x))            // →β
(x => x(x))(x => x(x))            // ☃
```


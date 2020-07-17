# Chapter 1: Counting Apples

In this chapter we learn how to count apples.

## An Apple

Lets start by wishing for an apple. We create a wish by typing `type` in our source code. We then need to type a name for our wish. It is common to use Capitalized names for wishes, so let's type `Apple`. We then need to write down an equal sign and a definition of what we consider to be an apple. For sake of simplicity let's state that we are looking for a piece of text that says "apple". We can change this later if we need a better definition. Let's write down `'apple'`. The single quotes are required since we are literally talking about a piece of text that says apple.

```typescript
type Apple = 'apple'
```

In the example above we wished for an apple. However, it is only a wish, it is not yet concrete. We can now create a real apple by typing `const`. We then need a name for the apple. Since it is a real thing and not a dream we'll call it `apple` starting with a lowercase letter. We then write an equal sign and give a definition for the real apple. Since we were dreaming for a piece of text, we can now fulfil that dream by typing `'apple'`.

```typescript
const apple = 'apple'
```

We have now managed to define our dream apple `Apple` and an actual apple `apple`. However, it is a good practice to add a type signature that will tie the two together. We can do so by adding a type signature. The type signature will make sure the dream `Apple` and the concrete `apple` will match each other. Below is the fully implemented apple together with the type signature.

```typescript
type Apple = 'apple'
const apple: Apple = 'apple'
```

If you copy it to a TypeScript file in VSCode and try changing one or the other to `'banana'` VSCode will complain that they are now incompatible. However, if you change both of them to `banana` it won't complain since there is technically nothing wrong with doing so. Other programmers may disagree with your decision to use name `apple` for a piece of text that says banana. However, in this exercise you are free to define apple in anyway you want as long as your actual `apple` matches your dream `Apple`.

```typescript
type Apple = 'banana'
const apple: Apple = 'banana'
```

## Several Apples

Programming languages have two common ways for representing multiple items -- a list and a tuple.

Lists are similar to columns in a spreadsheet. They contain an arbitrary amount of values of one type. We can wish for a pile of apples with the builtin list type constructor `Array<A>`. However, it is parametrized, so we need to pass in `Apple` like so `Array<Apple>`. However, when we try to create a concrete pile of apples we encounter a problem. The pile might contain different amounts of apples in different situations. Thus, there is no single definition for a concrete pile. Instead, we need to parametrize the concrete pile turning it into the function that will collect individual apples into an array and return them as a pile. We can describe the constructor function dream as follows `(...xs: Array<Apple>) => Pile` where the `...xs` part simply means "several items". We can then implement that dream as follow `(...apples) => apples`. After this we are able to construct a pile with three apples as follows `pile(apple, apple, apple)`.

```typescript
type Pile = Array<Apple>
type PileFunc = (...xs: Array<Apple>) => Pile
const pile: PileFunc = (...apples) => apples

const example0: Pile = pile()
const example1: Pile = pile(apple)
const example2: Pile = pile(apple, apple)
const example3: Pile = pile(apple, apple, apple)
```

In the example above the type system looses track of how many apples each pile contains. This is ok if we don't care too much about the number of apples or the properties of each apple. This may be desirable if we have ten thousand apples and we are going to make apple juice. However, this behaviour is suboptimal if we are carefully selecting an apple or two for a birthday present. Maybe we even want to combine the two apples with a nice pomelo. In such cases we cannot use lists but need to use tuples.

Tuples are similar to rows in a spreadsheet. They contain a few well organised items that are allowed to be different from one another. We can describe our dream of two apples and a pomelo with the tuple type constructor `[A, B, ..., N]`. It takes an arbirary amount of parameters that describe the items in the tuple, so we need to pass it the two dream Apples and a dream Pomelo as follows `[Apple, Apple, Pomelo]`. We can then construct the value with the value constructor `[a, b, ..., n] by passing it two concrete apples and one conrete pomelo `[apple, apple, pomelo]`. When we use tuples the type system will check that the present contains the correct amount of correct items in the correct order. For example `[pomelo, apple, apple]` would not pass as a present unless we extend it's definition.

```typescript
type Present = [Apple, Apple, Pomelo]
const present: Present = [apple, apple, pomelo]
const present: Present = [pomelo, apple, apple]  // error
```

## Several Apples



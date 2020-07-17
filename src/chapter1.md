# Chapter 1: Counting Apples

In this chapter we learn how to count apples.

## Apple

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

If you copy it to a TypeScript file in VSCode and try changing one or the other to `'banana'` VSCode will complain that they are now incompatible. However, if you change both of them to `banana` it won't complain since there is technically nothing wrong with doing so. Other programmers may disagree with your decision to use name `apple` for a piece of text that says banana. However, in this exercise you are free to define apple in anyway you want as long as the dream `Apple` matches the actual `apple`.

```typescript
type Apple = 'banana'
const apple: Apple = 'banana'
```

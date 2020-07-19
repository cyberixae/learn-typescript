# TypeScript Programming for Smart Children

# Preface

Computers are machines that can do almost anything as long as we manage to describe what we want them to do.
This book is dedicated to trying.

## Computers

Computers are based on a theoretical model called the *turing machine*. The concept of turing
machine was created by Alan Turing with the intention of automating mathematics. Before the
invention of mechanical computers, companies and governments used to hire people to perform
important computations. These people were referred to as "computers". The term "computer" was
subsequently used for the machines that replaced them.

Computers contain *memory* that consists of some number of *bits*. There is no way to delete a bit.
Bits can only be changed from zero to one or one to zero. The main memory in a computer
consists of *mutable* RAM memory that can be modified by a processor and gets cleared when there
is no power. In addition to RAM memory, computers may contain *immutable* ROM memory that was
set to contain certain bits when the computer was created and the value of those bits will never
change. Finally, a computer may contain storage, which is mutable memory like RAM, but will retain
it's value when there is no power.

A computer also contains one or more *processors* that can be used to manipulate some part of the memory.
The amount of things that a single computer can do at one time is limited by the amount of processors.
To execute a program a processor is initialized with the starting location of the program code within
the memory of the computer. The processor will then proceed by interpreting that part of the memory
as instructions and will modify other parts of the memory based on those instructions. The bits
themselves do **not** have any intrinsic meaning. By poiting the processor at a certain memory location
we **decide** to interpret that part of the memory as executable program code.

## Programming

The theory of programming languages is based on *lambda calculus*. Lambda calculus
was created with the intention of making mathematical proofs mechanically verifiable. A proof,
written in lambda calculus, would be given to a computer ( a machine or a person ). The computer
would then verify the proof by following simple steps without any understanding of the field of
mathematics or the proof itself. This was part of a bigger debate whether mathematical proofs
should make sense to people or simply be verifiable by a computer.

Lambda calculus was initially considered a failure since there is no guarantee that a proof
written in lambda calculus could ever be reduced to a meaningful result. However, this
property of "running forever" was later discovered to be central to many computer programs.
In computer science, dealing with the side effects of a computation, is often as important
if not more important than the actual result. For example, in case of a computer game, the
realtime interaction with the game would be more important than the computed result.

Where computers require data and programs to be encoded as bits, lambda calculus requires
them to be encoded as functions. A function is a mathematical creature that takes an input
and produces an output based on the given input. Some functions represent values while
other functions represent operations on those values. As is the case with bits, a function
in lambda calculus is meaningless until we assign a meaning to it. By passing one function
to another we **decide** to run that function as a program to process the function we pass
to it as input.

## Humans

Humans interact with computers through human interface devices. Some early computers, like the **Altair 8800**
home computer, used lights and switches for this purpose. The lights would show whether a bit was one or zero
and the switches would let you set bits to one or zero. These days it is more common to use more complicated
input and output devices like keyboards containing some human readable characters and monitors that display
some part of the memory as a constantly updating picture. Such hardware abstractions let humans interact with
more familiar concepts making it unnecessary to understand exact bit representations.

In some cases it may still be necessary to deal with exact bit representations. With direct bit manipulation
devices gone, it is now more common to write binary values as *hex decimal* numbers. Partially because these
are more easy to produce with a keyboard and partially because they make it easier for humans to see bigger
patterns. For example `0b00000000` and `0x00` are both representations of number 0, while `0b11111111` and
`0xff` are both representations of the number 255.

Computers are part of the physical World and there is nothing preventing a programmer from
interacting with the computer directly through use of magnets and electricity. However, since this
tutorial is about programming, and not computer architectures or information security, we will limit
ourselves to things that are doable through basic human interface devices. Thus, in the context of this
book, we consider writing processor instructions in bits (or hexdecimal) to be the lowest level of
programming. A programmer working in this manner needs to know the machine language defined by the
builders of the processor. Some **x86 language** for example.

Typing in machine code as hex decimal is certainly faster than operating one bit at a time but
it still has the major problem that you have to remember the meaning of all the numbers you type.
This way of writing computer programs as numbers was quickly replaced by creation of *assembler*
programs. The introduction of an assembler made it possible to write programs as text with a
regular text editor rather than a numeric hex editor. The text file containing the source code
would be assembled into an executable binary by a separate assembler program that would simply
replace the keywords with specific bit patterns. **Flat assembler** is one example of a modern
assembler that is still in use.

While assemblers are still in use today they have been largely replaced by *compilers*.
Compilers have a similar role, they are also programs that transform human readable source
code into machine readable binaries but unlike assemblers they are allowed to fundamentally
change structure of the program as long as it doesn't change the result of the computation.
The disconnect between the two structures makes it possible to make the source language
easier for humans to understand and the machine language easier for the computer to execute.
**GCC** is one famous example of a compiler that is used to compile the **C programming
language** and various other languages.

In addition to assembling or compiling the source code on forehand it is possible to do
realtime interprettion. In this model an *interpreter* program reads the source code,
translates it and tells the processor what to do. This is slightly slower since the
interpreter needs to so some extra work to translate the source code. However, the
slowdown is often not noticeable and skipping the compilation step often makes it faster
to do experimentation. Many programming languages use an interpreter to provide a REPL,
a command line that can be used for real time experimentation with source code. However,
programs written in scripting languages, such as the **Python**, would typically be run
through an interpreter in their final form.

# Control

The Church–Turing thesis explores the connection between computers and programming languages.
It points out similarities between turing machine and lambda calculus. The two models share
the feature that nothing has an intrinsic meaning. There is thefore a need to keep track of
what we mean by different constructs that we build out of bits or functions. This is done
by introducing a *type system* for tracking of such essential meta information. Many modern
security vulnerabilities are based on situations where the computer fails to identify the
type of some piece of information. When this happens, we may end up executing an untrusted
music file as a trusted computer program.

The biggest difference between the two models is the turing machines global nature. The
program that the turing machine is executing is not that different from a cooking recipe.
The recipe can contain instructions modifying any part of the memory of the computer.
Since the recipe is stored in the computers memory too, the recipe may even contain
instructions for modifying the recipe itself as it progresses execution. Lambda calculus
on the other hand has no concept of direct memory accesses and each function operates
in isolation constructing new values based on given input values. This makes the programs
safe to execute but makes exact control of the machine difficult. This trade-off between
reliable behaviour and reliable results is the main reason why so many different programming
languages are actively being used.

Most programming languages today fall into one of two big categories that are based on the
two theoretical models. The *procedural programming languages* are based on the turing
machine model and focus on instructing the computer what to do, while the *functional
programming languages* are based on lambda calculus and focus on expression of thoughts.
The languages mentioned above are either procedural or somewhat procedural. However some
programming languages, like **Haskell**, use functional language concepts to a greater
degree.

# Studying

As programming languages have evolved further and further away from the raw hardware level
it has become more and more plausible to express thoughts directly and forget details of
the programs execution. This has caused many programming languages to become *hybrid
programming languages* with some features from both worlds.

This programming guide discusses **TypeScript** which is the ultimate hybrid programming
language that supports all kinds of random things. This has the benefit of being suitable
for teaching lots of things and has lots of possible applications. The downside is that two
TypeScript programmers do not necessarily have a common language since they may have studied
different aspects of the language.

If you are interrested in something more specific, you may wish to pick another language.
In particular I would recommend; 80386 from the x86 family if you are interrested in machine
languages, Fasm if you are interested in assembler, C if you are interrested in high level
programming with strong control over execution, Haskell if you are interrested in functional
programming with strong correctness guarantees and Python if you are not that interrested
in programming but need to get things done anyway.

Don't worry about this choice too much. Regardless of the language you choose, learning a
second language will be a lot easier, since by then you have an understanding of some of
the core concepts of the two theoretical models. There is no right or wrong. Just pick a
language that you feel motivated to learn or a language that you can discus with someone
when you feel troubled.

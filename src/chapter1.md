# TypeScript Programming for Smart Children

# Preface

# Computers

Computers are machines that can do almost anything as long as we manage to describe what we want them to do.

Computers are base on a theoretical model called turing machine. The concept of turing machine
was created by Alan Turing with the intention of automating mathematics. Before the invention
of mechanical computers, companies and governments used to hire people to perform important
computations. The term "computer" was then used for the machine that replaced these workers.

Computers contain memory that consists of some number of bits. There is no way to delete a bit.
Bits can only be changed from zero to one or one to zero. The main memory in a computer
consists of mutable RAM memory that can be modified by a processor and gets cleared when there
is no power. In addition to RAM memory, computers may contain immutable ROM memory that was
set to contain certain bits when the computer was created and the value of those bits will never
change. Finally, a computer may contain storage, which is mutable memory like RAM, but will retain
it's value when there is no power.

A computer also contains one or more processors that can be used to manipulate some part of the memory.
The amount of things that a single computer can do at one time is limited by the amount of processors.
To execute a program a processor is initialized with the starting location of the program code within
the memory of the computer. The processor will then proceed by interpreting that part of the memory
as instructions and will modify other parts of the memory based on those instructions. The bits
themselves do *not* have any intrinsic meaning. By poiting the processor at a certain memory location
we *decide* to interpret that part of the memory as executable program code.

# Human Interaction

Humans interact with computers through human interface devices. Some early computers, like the Altair 8800
home computer, used lights and switches for this purpose. The lights would show whether a bit was one or zero
and the switches would let you set bits to one or zero. These days it is more common to use more complicated
input and output devices like keyboards containing some human readable characters and monitors that display
some part of the memory as a constantly updating picture. Such hardware abstractions let humans interact with
more familiar concepts making it unnecessary to understand exact bit representations.

In some cases it may still be necessary to deal with exact bit representations. With direct bit manipulation
devices gone, it is now more common to write binary values as hex decimal numbers. Partially because these
are more easy to produce with a keyboard and partially because they make it easier for humans to see bigger
patterns. For example 0b00000000 and 0x00 are both representations of number 0, while 0b11111111 and 0xff are
both representations of the number 255.

Computers are part of the physical World and there is nothing preventing a programmer from
interacting with the computer directly through use of magnets and electricity. However, since this
tutorial is about programming, and not computer architectures or information security, we will limit
ourselves to things that are doable through basic human interface devices. Thus, in the context of this
book, we consider writing processor instructions in bits (or hexdecimal) to be the lowest level of
programming. A programmer working in this manner needs to know the machine language defined by the
builders of the processor. Some x86 language for example.

Typing in machine code as hex decimal is certainly faster than operating one bit at a time but
it still has the major problem that you have to remember the meaning of all the numbers you type.
This way of writing computer programs as numbers was quickly replaced by creation of assembler
programs. The introduction of an assembler made it possible to write programs as text with a
regular text editor rather than a numeric hex editor. The text file containing the source code
would be assembled into an executable binary by a separate assembler program that would simply
replace the keywords with specific bit patterns. Flat assembler is one example of a modern
assembler that is still in use.

# Programming Languages

The more fundamental theory of programming languages is based on lambda calculus. Lambda calculus
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
to another we *decide* to run that function as a program to process the function we pass
to it as input. The turing machine is essentially a computer for running programs written
in lambda calculus. The Church–Turing thesis explores this connection between the two models.

The biggest similarity between turing machine and lambda calculus is the abstract property
that anything could theoretically mean anything. This creates the need to keep track of
what we mean by different constructs that we build out of bits or functions. This is done
by introducing type systems that keep track of such essential meta information. Many
modern security vulnerabilities are based on situations where we loose track of the type
information. When this happens, the computer may end up executing an untrusted music file
as a trusted computer program.

The biggest difference between the turing machine and lambda calculus is the turing machines
global nature. Any part of the program running on a turing machine is able to read or mutate
any other part of the machine's global state at any point. This provides full control over
the machine but makes it hard to reason about the computation requiring
analysis of the state of the entire computer. Lambda calculus on the other hand doesn't
provide much control over the program's execution but makes it easier to reason about the
correctness of the program by abstracting away several details of execution.







# Basics


## Tuple




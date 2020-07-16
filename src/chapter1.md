# TypeScript Programming for Smart Children

# Preface

Computers are machines that can do almost anything as long as we manage to describe what we want them to do.

Computers are base on a theoretical model called Turing Machine. The concept of Turing Machine
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

The theory of programming languages is based on lambda calculus. Lambda calculus was created with the
intention of making mathematical proofs mechanically verifiable. A proof, written in lambda calculus,
would be given to a computer ( a machine or a person ). The computer would then verify the proof by
following simple steps without any understanding of the field of mathematics or the proof itself.
This was part of a bigger debate whether mathematical proofs should make sense to people or simply
be verifiable by a computer.

Initially, lambda calculus was considered a failure since there was no guarantee that
a program written in lambda calculus would ever terminate or provide any meaningful answer.
However, it was later discovered that a big part of computer science is about dealing with
side effects of the computation rather than the ultimate result. For example, a computer
game might return information about the player's high score as a result, but the experience
of playing the game is what really matters.


# Basics


## Tuple




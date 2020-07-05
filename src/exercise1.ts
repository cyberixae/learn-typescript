
// Recommendation: Use TypeScript 4

import type { Zero, Succ, Prec, Plus, Minus } from './spoiler1';
import { str, zero, succ, prec, plus, minus } from './spoiler1';

type One = Succ<Zero>
type Two = Succ<One>
type Three = Succ<Two>
type Four = Succ<Three>
type Five = Succ<Four>
type Six = Succ<Five>
type Seven = Succ<Six>
type Eight = Succ<Seven>
type Nine = Succ<Eight>

const one: One = succ(zero)
const two: Two = succ(one)
const three: Three = succ(two)
const four: Four = succ(three)
const five: Five = succ(four)
const six: Six = succ(five)
const seven: Seven = succ(six)
const eight: Eight = succ(seven)
const nine: Nine = succ(eight)

const testZeroI: Exclude<Zero, One> = zero
const testZeroE: Exclude<One, Zero> = one

const testFourI: Exclude<Four, Two> = four
const testFourE: Exclude<Two, Four> = two

const testSuccR: Five = succ(four)
const testSuccT: Succ<Four> = five

const testPrecR: Two = prec(three)
const testPrecT: Prec<Three> = two

const testPlusR: Nine = plus(four, five)
const testPlusT: Plus<Four, Five> = nine

const testMinusR: Three = minus(five, two)
const testMinusT: Minus<Five, Two> = three

console.log([testZeroI, testZeroE, testFourI, testFourE].map(str)) // [0, 1, 4, 2]
console.log([testSuccT, testPrecT, testPlusT, testMinusT].map(str)) // [5, 2, 9, 3]
console.log([testSuccR, testPrecR, testPlusR, testMinusR].map(str)) // [5, 2, 9, 3]

export default {}

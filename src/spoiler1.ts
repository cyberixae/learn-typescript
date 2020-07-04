
export type Nat = Array<1>

export type Zero = []
export const zero: Zero = []

export type Succ<X extends Nat> = [1, ...X]
export function succ<X extends Nat>(x: X): Succ<X> {
  return [1, ...x];
}

export type Prec<X extends Succ<Nat>> = X extends Succ<infer P> ? P : never
export function prec<P extends Nat>([_one, ...rest]: [1, ...P]): P {
  return rest;
}

export type Plus<A extends Nat, B extends Nat> = [...A, ...B];
export const plus = <A extends Nat, B extends Nat>(a: A, b: B): Plus<A, B> => [...a, ...b]

export type Minus<A extends Plus<Nat, B>, B extends Nat> = A extends Plus<infer C, B> ? C : never
export const minus = <A extends Plus<Nat, B>, B extends Nat>(a: A, b: B): Minus<A, B> => a.slice(b.length) as Minus<A, B>

export function str(x: Nat): number {
  return x.length
}

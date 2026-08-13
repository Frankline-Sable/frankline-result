# Frankline Result

A small, type-safe Result implementation for TypeScript.

## Why?

Instead of throwing errors or returning ambiguous values, `Result<T, E>` represents an operation that can either succeed with a value or fail with an error.

## Example

```ts
import { ok, err } from '@frankline-sable/result';

const success = ok(42);

if (success.isOk()) {
  console.log(success.value);
}

const failure = err('Something went wrong');

if (failure.isErr()) {
  console.log(failure.error);
}
```

### Transforming values

You can transform a successful result with `map()`:

```ts
const result = ok(10).map(value => value * 2);

if (result.isOk()) {
  console.log(result.value); // 20
}


const result = err('Failed').map(value => value * 2);

if (result.isErr()) {
  console.log(result.error); // Failed
}

```


### Using a fallback value

`unwrapOr()` returns the successful value or a fallback value when the result is an error.

```ts
const success = ok(42);

console.log(success.unwrapOr(0)); // 42

const failure = err('Failed');

console.log(failure.unwrapOr(0)); // 0
```

## Features
* Type-safe success and error results
* Generic TypeScript support
* No runtime dependencies
* Lightweight
* Fully tested


## Status

Early development — API may change before 1.0.0.

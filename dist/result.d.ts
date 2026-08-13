export type Result<T, E> = Ok<T> | Err<E>;
export declare class Ok<T> {
    readonly value: T;
    readonly success = true;
    constructor(value: T);
    isOk(): this is Ok<T>;
    isErr(): this is never;
    map<U>(fn: (value: T) => U): Result<U, never>;
    unwrapOr(_defaultValue: T): T;
}
export declare class Err<E> {
    readonly error: E;
    readonly success = false;
    constructor(error: E);
    isOk(): this is never;
    isErr(): this is Err<E>;
    map<U>(_fn: (value: never) => U): Result<never, E>;
    unwrapOr<T>(_defaultValue: T): T;
}
export declare const ok: <T>(value: T) => Result<T, never>;
export declare const err: <E>(error: E) => Result<never, E>;
//# sourceMappingURL=result.d.ts.map
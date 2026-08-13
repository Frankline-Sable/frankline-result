export type Result<T, E> = Ok<T> | Err<E>;
export declare class Ok<T> {
    readonly value: T;
    readonly success = true;
    constructor(value: T);
    isOk(): this is Ok<T>;
    isErr(): this is never;
}
export declare class Err<E> {
    readonly error: E;
    readonly success = false;
    constructor(error: E);
    isOk(): this is never;
    isErr(): this is Err<E>;
}
export declare const ok: <T>(value: T) => Result<T, never>;
export declare const err: <E>(error: E) => Result<never, E>;
//# sourceMappingURL=result.d.ts.map
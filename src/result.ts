export type Result<T, E> = Ok<T> | Err<E>;

export class Ok<T> {
    readonly success = true;

    constructor(public readonly value:T){}

    isOk(): this is Ok<T>{
        return true;
    }

    isErr(): this is never{
        return false;
    }
}

export class Err<E> {
    readonly success = false;

    constructor(public readonly error: E){}

    isOk(): this is never{
        return false;
    }
    isErr(): this is Err<E>{
        return true;
    }
}

export const ok = <T>(value:T): Result<T, never> => new Ok(value);
export const err = <E>(error:E): Result<never, E> => new Err(error);
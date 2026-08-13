export class Ok {
    constructor(value) {
        this.value = value;
        this.success = true;
    }
    isOk() {
        return true;
    }
    isErr() {
        return false;
    }
    map(fn) {
        return ok(fn(this.value));
    }
    unwrapOr(_defaultValue) {
        return this.value;
    }
}
export class Err {
    constructor(error) {
        this.error = error;
        this.success = false;
    }
    isOk() {
        return false;
    }
    isErr() {
        return true;
    }
    map(_fn) {
        return this;
    }
    unwrapOr(_defaultValue) {
        return _defaultValue;
    }
}
export const ok = (value) => new Ok(value);
export const err = (error) => new Err(error);
//# sourceMappingURL=result.js.map
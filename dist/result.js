export class Ok {
    constructor(value) {
        this.value = value;
        this.success = true;
    }
    map(fn) {
        return ok(fn(this.value));
    }
    isOk() {
        return true;
    }
    isErr() {
        return false;
    }
}
export class Err {
    constructor(error) {
        this.error = error;
        this.success = false;
    }
    map(_fn) {
        return this;
    }
    isOk() {
        return false;
    }
    isErr() {
        return true;
    }
}
export const ok = (value) => new Ok(value);
export const err = (error) => new Err(error);
//# sourceMappingURL=result.js.map
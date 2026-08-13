import {describe, expect, it} from 'vitest';
import { ok, err} from '../src';

describe('Result', () => {
    it('creates a successful result', () => {
        const result = ok(42);

        expect(result.isOk()).toBe(true);


        if(result.isOk()){
            expect(result.value).toBe(42);
        }
    });

    it('creates an error result', () => {
        const result = err('Something went wrong');

        expect(result.isErr()).toBe(true);

        if(result.isErr()){
            expect(result.error).toBe('Something went wrong');
        }
    });
    });
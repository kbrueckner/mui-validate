/* eslint-env jest */

import { validate } from './validation-fns';
import ERROR_MESSAGE from '../definitions/error-messages';

describe('validation-fns', () => {
    describe('validate', () => {
        test('required success', () => {
            expect(validate('test', { required: true })).toEqual({ valid: true, message: undefined });
        });

        test('required fail', () => {
            expect(validate('', { required: true })).toEqual({ valid: false, message: ERROR_MESSAGE.REQUIRED });
        });

        test('unique success', () => {
            expect(validate('test', { unique: [] })).toEqual({ valid: true, message: undefined });
            expect(validate('test', { unique: ['a', 'b'] })).toEqual({ valid: true, message: undefined });
        });

        test('unique fail', () => {
            expect(validate('test', { unique: ['test'] })).toEqual({ valid: false, message: ERROR_MESSAGE.UNIQUE });
        });
    });
});

/* eslint-env jest */

import validate from './validation-fns';
import ERROR_MESSAGE from '../definitions/error-messages';

describe('validation-fns', () => {
    describe('validate', () => {
        test('required success', () => {
            expect(validate('test', { required: true })).toEqual({ valid: true, messages: [], display: true });
        });

        test('required fail', () => {
            expect(validate('', { required: true })).toEqual({ valid: false, messages: [{ type: 'required', text: ERROR_MESSAGE.REQUIRED }], display: true });
        });

        test('unique success', () => {
            expect(validate('test', { unique: [] })).toEqual({ valid: true, messages: [], display: true });
            expect(validate('test', { unique: ['a', 'b'] })).toEqual({ valid: true, messages: [], display: true });
        });

        test('unique fail', () => {
            expect(validate('test', { unique: ['test'] })).toEqual({ valid: false, messages: [{ type: 'unique', text: ERROR_MESSAGE.UNIQUE }], display: true });
        });

        test('regex success', () => {
            expect(validate('test', { regex: /test/ })).toEqual({ valid: true, messages: [], display: true });
        });

        test('regex fail', () => {
            expect(validate('', { regex: /test/ })).toEqual({ valid: false, messages: [{ type: 'regex', text: ERROR_MESSAGE.REGEX }], display: true });
        });

        test('custom success', () => {
            expect(validate('test', { custom: [(val) => val === 'test', 'Failed'] })).toEqual({ valid: true, messages: [], display: true });
        });

        test('custom fail', () => {
            expect(validate('', { custom: (val) => val === 'test' })).toEqual({ valid: false, messages: [{ type: 'custom', text: ERROR_MESSAGE.CUSTOM }], display: true });
            expect(validate('', { custom: [(val) => val === 'test', 'Failed'] })).toEqual({ valid: false, messages: [{ type: 'custom', text: 'Failed' }], display: true });
        });

        test('combined: required and regex success', () => {
            expect(validate('test', { required: true, regex: /test/ })).toEqual({ valid: true, messages: [], display: true });
        });

        test('combined: required and regex fail', () => {
            expect(validate('', { required: true, regex: /test/ })).toEqual({ valid: false, messages: [{ type: 'required', text: ERROR_MESSAGE.REQUIRED }, { type: 'regex', text: ERROR_MESSAGE.REGEX }], display: true });
        });
    });
});

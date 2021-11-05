/* eslint-env jest */

import { detectInputType, getValueFromAutocomplete } from './helper-fns';

describe('helper-fns', () => {
    describe('detectInputType', () => {
        test('autocomplete', () => {
            expect(detectInputType({ autoComplete: false })).toEqual('autocomplete');
            // eslint-disable-next-line
            expect(detectInputType({ getOptionLabel: (n: any) => n })).toEqual('autocomplete');
        });

        test('picker', () => {
            expect(detectInputType({ allowKeyboardControl: false })).toEqual('picker');
            expect(detectInputType({ KeyboardButtonProps: [] })).toEqual('picker');
        });

        test('textfield', () => {
            expect(detectInputType({})).toEqual('textfield');
        });
    });

    describe('getValueFromAutocomplete', () => {
        test('options simple string type', () => {
            expect(getValueFromAutocomplete('A', {})).toBe('A');
            expect(getValueFromAutocomplete(null, {})).toBe('');
        });

        test('options complex object type', () => {
            // eslint-disable-next-line
            expect(getValueFromAutocomplete({ name: 'A' }, { props: { getOptionLabel: (option: any) => option.name } })).toBe('A');
            // eslint-disable-next-line
            expect(getValueFromAutocomplete(null, { props: { getOptionLabel: (option: any) => option.name } })).toBe('');
        });
    });
});

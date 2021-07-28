/* eslint-env jest */

import { detectInputType } from './helper-fns';

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
});

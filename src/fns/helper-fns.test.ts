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
            expect(detectInputType({ inputFormat: '' })).toEqual('picker');
            expect(detectInputType({ mask: '' })).toEqual('picker');
            expect(detectInputType({ minDate: '' })).toEqual('picker');
            expect(detectInputType({ maxDate: '' })).toEqual('picker');
            expect(detectInputType({ disableMaskedInput: true })).toEqual('picker');
            expect(detectInputType({ disableOpenPicker: true })).toEqual('picker');
            expect(detectInputType({ disableHighlightToday: true })).toEqual('picker');
            expect(detectInputType({ desktopModeMediaQuery: '' })).toEqual('picker');
            expect(detectInputType({ defaultCalendarMonth: 1 })).toEqual('picker');
            expect(detectInputType({ allowSameDateSelection: true })).toEqual('picker');
            expect(detectInputType({ onMonthChange: () => {} })).toEqual('picker');
            expect(detectInputType({ onYearChange: () => {} })).toEqual('picker');
            expect(detectInputType({ showDaysOutsideCurrentMonth: true })).toEqual('picker');
            expect(detectInputType({ OpenPickerButtonProps: {} })).toEqual('picker');
            expect(detectInputType({ renderDay: 1 })).toEqual('picker');
            expect(detectInputType({ shouldDisableDate: true })).toEqual('picker');
            expect(detectInputType({ shouldDisableYear: true })).toEqual('picker');
            expect(detectInputType({ showTodayButton: true })).toEqual('picker');
            expect(detectInputType({ todayText: 'today' })).toEqual('picker');
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

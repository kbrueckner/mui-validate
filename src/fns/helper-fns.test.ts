/* eslint-env jest */

import { detectInputType, getValueFromAutocomplete } from './helper-fns';

describe('helper-fns', () => {
    describe('detectInputType', () => {
        test('autocomplete', () => {
            expect(detectInputType({ autoComplete: false })).toEqual('autocomplete');
            // eslint-disable-next-line
            expect(detectInputType({ getOptionLabel: (n: any) => n })).toEqual('autocomplete');
        });

        test('picker (v5)', () => {
            expect(detectInputType({ allowKeyboardControl: false })).toEqual('picker');
            expect(detectInputType({ KeyboardButtonProps: [] })).toEqual('picker');
            expect(detectInputType({ inputFormat: '' })).toEqual('picker');
            expect(detectInputType({ mask: '' })).toEqual('picker');
            expect(detectInputType({ disableMaskedInput: true })).toEqual('picker');
            expect(detectInputType({ allowSameDateSelection: true })).toEqual('picker');
            expect(detectInputType({ OpenPickerButtonProps: {} })).toEqual('picker');
            expect(detectInputType({ renderDay: 1 })).toEqual('picker');
            expect(detectInputType({ showTodayButton: true })).toEqual('picker');
            expect(detectInputType({ todayText: 'today' })).toEqual('picker');
        });

        test('datepicker (v6)', () => {
            expect(detectInputType({ slots: {} })).toEqual('datepicker');
            expect(detectInputType({ slotProps: {} })).toEqual('datepicker');
            expect(detectInputType({ dayOfWeekFormatter: () => {} })).toEqual('datepicker');
            expect(detectInputType({ minDate: '' })).toEqual('datepicker');
            expect(detectInputType({ maxDate: '' })).toEqual('datepicker');
            expect(detectInputType({ disableOpenPicker: true })).toEqual('datepicker');
            expect(detectInputType({ disableHighlightToday: true })).toEqual('datepicker');
            expect(detectInputType({ desktopModeMediaQuery: '' })).toEqual('datepicker');
            expect(detectInputType({ defaultCalendarMonth: 1 })).toEqual('datepicker');
            expect(detectInputType({ onMonthChange: () => {} })).toEqual('datepicker');
            expect(detectInputType({ onYearChange: () => {} })).toEqual('datepicker');
            expect(detectInputType({ showDaysOutsideCurrentMonth: true })).toEqual('datepicker');
            expect(detectInputType({ shouldDisableDate: true })).toEqual('datepicker');
            expect(detectInputType({ shouldDisableYear: true })).toEqual('datepicker');
            expect(detectInputType({ shouldDisableMonth: true })).toEqual('datepicker');
            expect(detectInputType({ disableFuture: false })).toEqual('datepicker');
            expect(detectInputType({ closeOnSelect: false })).toEqual('datepicker');
            expect(detectInputType({ disablePast: false })).toEqual('datepicker');
            expect(detectInputType({ displayWeekNumber: false })).toEqual('datepicker');
            expect(detectInputType({ fixedWeekNumber: 1 })).toEqual('datepicker');
            expect(detectInputType({ format: 'YYYY-MM-DD' })).toEqual('datepicker');
            expect(detectInputType({ formatDensity: 'dense' })).toEqual('datepicker');
            expect(detectInputType({ localeText: {} })).toEqual('datepicker');
            expect(detectInputType({ monthsPerRow: 4 })).toEqual('datepicker');
            expect(detectInputType({ yearsPerRow: 4 })).toEqual('datepicker');
            expect(detectInputType({ onSelectedSectionsChange: () => {} })).toEqual('datepicker');
            expect(detectInputType({ onViewChange: () => {} })).toEqual('datepicker');
            expect(detectInputType({ openTo: 'day' })).toEqual('datepicker');
            expect(detectInputType({ reduceAnimations: true })).toEqual('datepicker');
            expect(detectInputType({ selectedSections: 'all' })).toEqual('datepicker');
            expect(detectInputType({ timezone: 'default' })).toEqual('datepicker');
        });

        test('textfield', () => {
            expect(detectInputType({})).toEqual('textfield');
            // #10 bug: detection of textfield does not work
            expect(detectInputType({ autoComplete: 'some text' })).toEqual('textfield');
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

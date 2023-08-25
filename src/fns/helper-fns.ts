import { InputType } from '../type';

// eslint-disable-next-line
export const detectInputType = (props: any): InputType => {
    if (typeof props.autoComplete === 'boolean' || props.getOptionLabel !== undefined) { return 'autocomplete'; }
    if ([
        // date picker up to v5
        props.allowKeyboardControl, props.KeyboardButtonProps, props.inputFormat,
        props.mask, props.minDate, props.maxDate, props.disableMaskedInput, props.disableOpenPicker,
        props.disableHighlightToday, props.desktopModeMediaQuery, props.defaultCalendarMonth,
        props.allowSameDateSelection, props.onMonthChange, props.onYearChange, props.showDaysOutsideCurrentMonth,
        props.OpenPickerButtonProps, props.renderDay, props.shouldDisableDate, props.shouldDisableYear,
        props.showTodayButton, props.todayText,
        // date picker v6
        // tbd ... e.g. props.slots,
    ].some((val) => val !== undefined)) { return 'picker'; }
    return 'textfield'; // select and textfield have the same behavior in the lib
};

// eslint-disable-next-line
export const getValueFromAutocomplete = (option: any, children: any): string => {
    let value;

    if (!option) {
        value = '';
    } else {
        // eslint-disable-next-line
        // @ts-ignore-next-line
        value = children?.props?.getOptionLabel ? children.props.getOptionLabel(option) : option;
    }

    return value;
};

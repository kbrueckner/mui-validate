import { InputType } from '../type';

// eslint-disable-next-line
const detectAutocomplete = (props: any): boolean => typeof props.autoComplete === 'boolean' || props.getOptionLabel !== undefined;

// eslint-disable-next-line
const detectPickerV5 = (props: any): boolean => [
    props.allowKeyboardControl, props.KeyboardButtonProps, props.inputFormat,
    props.mask, props.minDate, props.maxDate, props.disableMaskedInput, props.disableOpenPicker,
    props.disableHighlightToday, props.desktopModeMediaQuery, props.defaultCalendarMonth,
    props.allowSameDateSelection, props.onMonthChange, props.onYearChange, props.showDaysOutsideCurrentMonth,
    props.OpenPickerButtonProps, props.renderDay, props.shouldDisableDate, props.shouldDisableYear,
    props.showTodayButton, props.todayText,
].some((val) => val !== undefined);

// eslint-disable-next-line
export const detectInputType = (props: any): InputType => {
    if (
        detectAutocomplete(props)
    ) { return 'autocomplete'; }

    if (
        detectPickerV5(props)
    ) { return 'picker'; }

    // select and textfield remain but have the same behavior in the lib
    return 'textfield';
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

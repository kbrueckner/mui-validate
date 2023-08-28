import { InputType } from '../type';

// eslint-disable-next-line
const detectAutocomplete = (props: any): boolean => typeof props.autoComplete === 'boolean' || props.getOptionLabel !== undefined;

// eslint-disable-next-line
const detectPickerV5 = (props: any): boolean => [
    props.allowKeyboardControl, props.KeyboardButtonProps, props.inputFormat,
    props.mask, props.disableMaskedInput, props.allowSameDateSelection,
    props.OpenPickerButtonProps, props.renderDay,
    props.showTodayButton, props.todayText,
].some((val) => val !== undefined);

// eslint-disable-next-line
const detectPickerV6 = (props: any): boolean => [
    props.slots, props.dayOfWeekFormatter, props.defaultCalendarMonth, props.desktopModeMediaQuery,
    props.disableFuture, props.disableHighlightToday, props.closeOnSelect, props.disableOpenPicker,
    props.disablePast, props.displayWeekNumber, props.fixedWeekNumber, props.format, props.formatDensity,
    props.localeText, props.minDate, props.maxDate, props.monthsPerRow, props.onMonthChange,
    props.onSelectedSectionsChange, props.onViewChange, props.onYearChange, props.openTo, props.reduceAnimations,
    props.selectedSections, props.shouldDisableDate, props.shouldDisableYear, props.shouldDisableMonth,
    props.showDaysOutsideCurrentMonth, props.slotProps, props.timezone, props.yearsPerRow,
].some((val) => val !== undefined);

// eslint-disable-next-line
export const detectInputType = (props: any): InputType => {
    if (
        detectAutocomplete(props)
    ) { return 'autocomplete'; }

    if (
        detectPickerV6(props)
    ) { return 'datepicker'; }

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

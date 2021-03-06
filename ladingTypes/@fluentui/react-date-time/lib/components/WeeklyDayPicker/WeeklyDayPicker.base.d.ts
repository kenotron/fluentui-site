import * as React from 'react';
import { IWeeklyDayPickerProps } from './WeeklyDayPicker.types';
import { AnimationDirection } from '../Calendar/Calendar.types';
export interface IWeeklyDayPickerState {
    /** The currently focused date in the week picker, but not necessarily selected */
    navigatedDate: Date;
    /** The currently selected date in the calendar */
    selectedDate: Date;
    /** Tracking whether we just toggled showFullMonth */
    previousShowFullMonth: boolean;
    /** Whether to animate veritcally or horizontally */
    animationDirection: AnimationDirection;
}
export declare class WeeklyDayPickerBase extends React.Component<IWeeklyDayPickerProps, IWeeklyDayPickerState> {
    static defaultProps: IWeeklyDayPickerProps;
    private _dayGrid;
    private _focusOnUpdate;
    private _initialTouchX;
    static getDerivedStateFromProps(nextProps: Readonly<IWeeklyDayPickerProps>, prevState: Readonly<IWeeklyDayPickerState>): Partial<IWeeklyDayPickerState> | null;
    constructor(props: IWeeklyDayPickerProps);
    focus(): void;
    render(): JSX.Element;
    componentDidUpdate(): void;
    private _onSelectDate;
    private _onNavigateDate;
    private _renderPreviousWeekNavigationButton;
    private _renderNextWeekNavigationButton;
    private _onSelectPrevDateRange;
    private _onSelectNextDateRange;
    private _navigateDate;
    private _onWrapperKeyDown;
    private _onButtonKeyDown;
    private _onTouchStart;
    private _onTouchMove;
    private _createPreviousWeekAriaLabel;
    private _createNextWeekAriaLabel;
    private _formatDateRange;
}

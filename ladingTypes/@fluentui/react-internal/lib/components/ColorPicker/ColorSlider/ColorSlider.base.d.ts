import * as React from 'react';
import { IColorSliderProps, IColorSlider } from './ColorSlider.types';
export interface IColorSliderState {
    currentValue: number;
}
/**
 * {@docCategory ColorPicker}
 */
export declare class ColorSliderBase extends React.Component<IColorSliderProps, IColorSliderState> implements IColorSlider {
    static defaultProps: Partial<IColorSliderProps>;
    private _disposables;
    private _root;
    constructor(props: IColorSliderProps);
    get value(): number;
    componentDidUpdate(prevProps: Readonly<IColorSliderProps>, prevState: Readonly<IColorSliderState>): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private get _type();
    private get _maxValue();
    private _onKeyDown;
    private _onMouseDown;
    private _onMouseMove;
    private _disposeListeners;
    private _updateValue;
}

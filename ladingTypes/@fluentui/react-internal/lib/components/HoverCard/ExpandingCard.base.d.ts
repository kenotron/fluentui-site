import * as React from 'react';
import { IExpandingCardProps } from './ExpandingCard.types';
export interface IExpandingCardState {
    firstFrameRendered: boolean;
    needsScroll: boolean;
}
export declare class ExpandingCardBase extends React.Component<IExpandingCardProps, IExpandingCardState> {
    static defaultProps: {
        compactCardHeight: number;
        expandedCardHeight: number;
        directionalHintFixed: boolean;
    };
    private _classNames;
    private _expandedElem;
    private _async;
    constructor(props: IExpandingCardProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onKeyDown;
    private _onRenderCompactCard;
    private _onRenderExpandedCard;
    private _checkNeedsScroll;
}

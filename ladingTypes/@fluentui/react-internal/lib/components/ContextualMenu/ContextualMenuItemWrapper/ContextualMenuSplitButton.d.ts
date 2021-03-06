import * as React from 'react';
import { ContextualMenuItemWrapper } from './ContextualMenuItemWrapper';
import { IContextualMenuItemWrapperProps } from './ContextualMenuItemWrapper.types';
export interface IContextualMenuSplitButtonState {
}
export declare class ContextualMenuSplitButton extends ContextualMenuItemWrapper {
    private _splitButton;
    private _lastTouchTimeoutId;
    private _processingTouch;
    private _ariaDescriptionId;
    private _async;
    private _events;
    private _getMemoizedMenuButtonKeytipProps;
    constructor(props: IContextualMenuItemWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
    protected _onItemKeyDown: (ev: React.KeyboardEvent<HTMLElement>) => void;
    protected _getSubmenuTarget: () => HTMLElement | undefined;
    protected _renderAriaDescription: (ariaDescription?: string | undefined, className?: string | undefined) => JSX.Element | null;
    private _renderSplitPrimaryButton;
    private _renderSplitDivider;
    private _renderSplitIconButton;
    private _onItemMouseEnterPrimary;
    private _onItemMouseEnterIcon;
    private _onItemMouseMovePrimary;
    private _onItemMouseMoveIcon;
    private _onIconItemClick;
    private _executeItemClick;
    private _onTouchStart;
    private _onPointerDown;
    private _handleTouchAndPointerEvent;
}

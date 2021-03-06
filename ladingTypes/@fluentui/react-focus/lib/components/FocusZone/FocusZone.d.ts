import * as React from 'react';
import { IFocusZone, IFocusZoneProps } from './FocusZone.types';
import { Point } from '@fluentui/utilities';
export declare class FocusZone extends React.Component<IFocusZoneProps> implements IFocusZone {
    static defaultProps: IFocusZoneProps;
    private _root;
    private _mergedRef;
    private _id;
    /** The most recently focused child element. */
    private _activeElement;
    /**
     * The index path to the last focused child element.
     */
    private _lastIndexPath;
    /**
     * Flag to define when we've intentionally parked focus on the root element to temporarily
     * hold focus until items appear within the zone.
     */
    private _isParked;
    /** The child element with tabindex=0. */
    private _defaultFocusElement;
    private _focusAlignment;
    private _isInnerZone;
    private _parkedTabIndex;
    /** Used to allow moving to next focusable element even when we're focusing on a input element when pressing tab */
    private _processingTabKey;
    private _windowElement;
    /** Used for testing purposes only. */
    static getOuterZones(): number;
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     * HEADS UP: This must not be an arrow function in order to be referentially equal among instances
     * for ref counting to work correctly!
     */
    private static _onKeyDownCapture;
    constructor(props: IFocusZoneProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focus(forceIntoFirstElement?: boolean): boolean;
    /**
     * Sets focus to the last tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focusLast(): boolean;
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * shouldReceiveFocus to create delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param element - The child element within the zone to focus.
     * @param forceAlignment - If true, focus alignment will be set according to the element provided.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focusElement(element: HTMLElement, forceAlignment?: boolean): boolean;
    /**
     * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference,
     * rather than a center based on the last horizontal motion.
     * @param point - the new reference point.
     */
    setFocusAlignment(point: Point): void;
    private _evaluateFocusBeforeRender;
    private _onFocus;
    /**
     * When focus is in the zone at render time but then all focusable elements are removed,
     * we "park" focus temporarily on the root. Once we update with focusable children, we restore
     * focus to the closest path from previous. If the user tabs away from the parked container,
     * we restore focusability to the pre-parked state.
     */
    private _setParkedFocus;
    private _onBlur;
    private _onMouseDown;
    private _setActiveElement;
    private _preventDefaultWhenHandled;
    /**
     * Handle the keystrokes.
     */
    private _onKeyDown;
    /**
     * Walk up the dom try to find a focusable element.
     */
    private _tryInvokeClickForFocusable;
    /**
     * Traverse to find first child zone.
     */
    private _getFirstInnerZone;
    private _moveFocus;
    private _moveFocusDown;
    private _moveFocusUp;
    private _moveFocusLeft;
    private _moveFocusRight;
    private _getHorizontalDistanceFromCenter;
    private _moveFocusPaging;
    private _setFocusAlignment;
    private _isImmediateDescendantOfZone;
    private _getOwnerZone;
    private _updateTabIndexes;
    private _isContentEditableElement;
    private _isElementInput;
    private _shouldInputLoseFocus;
    private _shouldWrapFocus;
    /**
     * Returns true if the element is a descendant of the FocusZone through a React portal.
     */
    private _portalContainsElement;
    private _getDocument;
}

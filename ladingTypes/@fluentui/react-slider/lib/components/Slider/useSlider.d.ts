import * as React from 'react';
import { ISliderProps } from './Slider.types';
export declare const ONKEYDOWN_TIMEOUT_DURATION = 1000;
export declare const useSlider: (props: ISliderProps, ref: React.Ref<HTMLDivElement>) => {
    root: {
        className: string;
        ref: React.Ref<HTMLDivElement>;
    };
    label: {
        className: string;
        children: string | undefined;
        disabled: boolean;
        htmlFor: string | undefined;
    };
    sliderBox: {
        className: string;
        role: string;
        tabIndex: number | undefined;
        'data-is-focusable': boolean;
        id: string;
        'aria-valuenow': number;
        'aria-valuemin': number;
        'aria-valuemax': number;
        'aria-valuetext': string | undefined;
        'aria-label': string | undefined;
        'aria-disabled': boolean;
    } | {
        className: string;
        role: string;
        tabIndex: number | undefined;
        'data-is-focusable': boolean;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        contentEditable?: boolean | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: boolean | undefined;
        hidden?: boolean | undefined;
        id: string;
        lang?: string | undefined;
        placeholder?: string | undefined;
        slot?: string | undefined;
        spellCheck?: boolean | undefined;
        style?: React.CSSProperties | undefined;
        title?: string | undefined;
        inputMode?: string | undefined;
        is?: string | undefined;
        radioGroup?: string | undefined;
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
        'aria-activedescendant'?: string | undefined;
        'aria-atomic'?: boolean | "false" | "true" | undefined;
        'aria-autocomplete'?: "none" | "both" | "inline" | "list" | undefined;
        'aria-busy'?: boolean | "false" | "true" | undefined;
        'aria-checked'?: boolean | "mixed" | "false" | "true" | undefined;
        'aria-colcount'?: number | undefined;
        'aria-colindex'?: number | undefined;
        'aria-colspan'?: number | undefined;
        'aria-controls'?: string | undefined;
        'aria-current'?: boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date" | undefined;
        'aria-describedby'?: string | undefined;
        'aria-details'?: string | undefined;
        'aria-disabled': boolean | "false" | "true";
        'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
        'aria-errormessage'?: string | undefined;
        'aria-expanded'?: boolean | "false" | "true" | undefined;
        'aria-flowto'?: string | undefined;
        'aria-grabbed'?: boolean | "false" | "true" | undefined;
        'aria-haspopup'?: boolean | "dialog" | "menu" | "listbox" | "grid" | "false" | "true" | "tree" | undefined;
        'aria-hidden'?: boolean | "false" | "true" | undefined;
        'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        'aria-keyshortcuts'?: string | undefined;
        'aria-label': string | undefined;
        'aria-labelledby'?: string | undefined;
        'aria-level'?: number | undefined;
        'aria-live'?: "off" | "assertive" | "polite" | undefined;
        'aria-modal'?: boolean | "false" | "true" | undefined;
        'aria-multiline'?: boolean | "false" | "true" | undefined;
        'aria-multiselectable'?: boolean | "false" | "true" | undefined;
        'aria-orientation'?: "horizontal" | "vertical" | undefined;
        'aria-owns'?: string | undefined;
        'aria-placeholder'?: string | undefined;
        'aria-posinset'?: number | undefined;
        'aria-pressed'?: boolean | "mixed" | "false" | "true" | undefined;
        'aria-readonly'?: boolean | "false" | "true" | undefined;
        'aria-relevant'?: "all" | "text" | "additions" | "additions text" | "removals" | undefined;
        'aria-required'?: boolean | "false" | "true" | undefined;
        'aria-roledescription'?: string | undefined;
        'aria-rowcount'?: number | undefined;
        'aria-rowindex'?: number | undefined;
        'aria-rowspan'?: number | undefined;
        'aria-selected'?: boolean | "false" | "true" | undefined;
        'aria-setsize'?: number | undefined;
        'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
        'aria-valuemax': number;
        'aria-valuemin': number;
        'aria-valuenow': number;
        'aria-valuetext': string | undefined;
        children?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        onCopy?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
        onCopyCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
        onCut?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
        onCutCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
        onPaste?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
        onPasteCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
        onCompositionEnd?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
        onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
        onCompositionStart?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
        onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
        onCompositionUpdate?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
        onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
        onFocus?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
        onFocusCapture?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
        onBlur?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
        onBlurCapture?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
        onChange?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onChangeCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onBeforeInput?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onBeforeInputCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onInput?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onInputCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onReset?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onResetCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onSubmit?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onSubmitCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onInvalid?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onInvalidCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
        onLoad?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onLoadCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onError?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onErrorCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onKeyDown?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
        onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
        onKeyPress?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
        onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
        onKeyUp?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
        onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
        onAbort?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onAbortCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onCanPlay?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onDurationChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onEmptied?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onEncrypted?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onEnded?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onEndedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onLoadedData?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onLoadStart?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onPause?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onPauseCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onPlay?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onPlayCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onPlaying?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onPlayingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onProgress?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onProgressCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onRateChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onSeeked?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onSeekedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onSeeking?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onSeekingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onStalled?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onStalledCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onSuspend?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onSuspendCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onTimeUpdate?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onVolumeChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onWaiting?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onWaitingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onAuxClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onAuxClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onContextMenu?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onContextMenuCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onDoubleClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onDoubleClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onDrag?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragEnd?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragEndCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragEnter?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragEnterCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragExit?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragExitCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragLeave?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragLeaveCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragOver?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragOverCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragStart?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDragStartCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDrop?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onDropCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
        onMouseDown?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseDownCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseEnter?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseLeave?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseMove?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseMoveCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseOut?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseOutCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseOver?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseOverCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseUp?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onMouseUpCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        onSelect?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onSelectCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
        onTouchCancel?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
        onTouchCancelCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
        onTouchEnd?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
        onTouchEndCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
        onTouchMove?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
        onTouchMoveCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
        onTouchStart?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
        onTouchStartCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
        onPointerDown?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerDownCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerMove?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerMoveCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerUp?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerUpCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerCancel?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerCancelCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerEnter?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerEnterCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerLeave?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerOver?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerOverCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerOut?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onPointerOutCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onGotPointerCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onLostPointerCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
        onScroll?: ((event: React.UIEvent<HTMLDivElement>) => void) | undefined;
        onScrollCapture?: ((event: React.UIEvent<HTMLDivElement>) => void) | undefined;
        onWheel?: ((event: React.WheelEvent<HTMLDivElement>) => void) | undefined;
        onWheelCapture?: ((event: React.WheelEvent<HTMLDivElement>) => void) | undefined;
        onAnimationStart?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
        onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
        onAnimationEnd?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
        onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
        onAnimationIteration?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
        onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
        onTransitionEnd?: ((event: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
        onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
    };
    container: {
        className: string;
    };
    valueLabel: false | {
        className: string;
        children: string | number;
        disabled: boolean;
    };
    thumb: {
        ref: React.RefObject<HTMLSpanElement>;
        className: string;
        style: {
            [x: string]: string;
        };
    };
    zeroTick: false | {
        className: string;
        style: {
            [x: string]: string;
        };
    } | undefined;
    activeTrack: {
        className: string;
        style: {
            [x: string]: string;
        };
    };
    topInactiveTrack: {
        className: string;
        style: {
            [x: string]: string;
        };
    };
    bottomInactiveTrack: {
        className: string;
        style: {
            [x: string]: string;
        };
    };
    sliderLine: {
        ref: React.RefObject<HTMLDivElement>;
        className: string;
    };
};

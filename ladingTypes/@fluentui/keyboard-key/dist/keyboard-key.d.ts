
export declare const AmpersandKey: 55;

export declare const ArrowDownKey: 40;

export declare const ArrowLeftKey: 37;

export declare const ArrowRightKey: 39;

export declare const ArrowUpKey: 38;

export declare const AtSignKey: 50;

export declare const BackSlashKey: 220;

export declare const CaretKey: 54;

export declare const ColonKey: 186;

export declare const CommaKey: 188;

export declare const DecimalKey: 190;

export declare const Digit0Key: 48;

export declare const Digit1Key: 49;

export declare const Digit2Key: 50;

export declare const Digit3Key: 51;

export declare const Digit4Key: 52;

export declare const Digit5Key: 53;

export declare const Digit6Key: 54;

export declare const Digit7Key: 55;

export declare const Digit8Key: 56;

export declare const Digit9Key: 57;

export declare const DivisionSignKey: 191;

export declare const DoubleQuoteKey: 222;

export declare const EndKey: 35;

export declare const EnterKey: 13;

export declare const EqualsSignKey: 187;

export declare const ExclamationPointKey: 49;

/**
 * Get the `keyCode` or `which` value from a keyboard event or `key` name.
 * If an object is provided, the precedence of properties is `keyCode`, `which`, `key`.
 * @param eventOrKey - A keyboard event-like object or `key` name. If an object, at least one of
 * `key`, `keyCode`, or `which` must be defined.
 */
export declare function getCode(eventOrKey: Partial<KeyboardEventLike> | string): number | undefined;

/**
 * Get the key name from a keyboard event, `keyCode`, or `which` value.
 * If an object is provided, the precedence of properties is `key`, `keyCode`, `which`.
 * @param eventOrCode - A keyboard event-like object or key code. If an object, at least one of
 * `key`, `keyCode`, or `which` must be defined.
 */
export declare function getKey(eventOrCode: Partial<KeyboardEventLike> | number): string | undefined;

export declare const GraveAccentKey: 192;

export declare const HomeKey: 36;

export declare type KeyboardEventLike = Pick<KeyboardEvent, 'key' | 'keyCode' | 'which' | 'shiftKey'>;

/**
 * Mapping of keyboard keys with aliases and codes.
 */
export declare const keyboardKey: KeyNames;

export declare interface KeyNames {
    Cancel: 3;
    Help: 6;
    Backspace: 8;
    Tab: 9;
    Clear: 12;
    Enter: 13;
    Shift: 16;
    Control: 17;
    Alt: 18;
    Pause: 19;
    CapsLock: 20;
    Escape: 27;
    Convert: 28;
    NonConvert: 29;
    Accept: 30;
    ModeChange: 31;
    ' ': 32;
    PageUp: 33;
    PageDown: 34;
    End: 35;
    Home: 36;
    ArrowLeft: 37;
    ArrowUp: 38;
    ArrowRight: 39;
    ArrowDown: 40;
    Select: 41;
    Print: 42;
    Execute: 43;
    PrintScreen: 44;
    Insert: 45;
    Delete: 46;
    0: 48;
    ')': 48;
    1: 49;
    '!': 49;
    2: 50;
    '@': 50;
    3: 51;
    '#': 51;
    4: 52;
    $: 52;
    5: 53;
    '%': 53;
    6: 54;
    '^': 54;
    7: 55;
    '&': 55;
    8: 56;
    '*': 56;
    9: 57;
    '(': 57;
    a: 65;
    A: 65;
    b: 66;
    B: 66;
    c: 67;
    C: 67;
    d: 68;
    D: 68;
    e: 69;
    E: 69;
    f: 70;
    F: 70;
    g: 71;
    G: 71;
    h: 72;
    H: 72;
    i: 73;
    I: 73;
    j: 74;
    J: 74;
    k: 75;
    K: 75;
    l: 76;
    L: 76;
    m: 77;
    M: 77;
    n: 78;
    N: 78;
    o: 79;
    O: 79;
    p: 80;
    P: 80;
    q: 81;
    Q: 81;
    r: 82;
    R: 82;
    s: 83;
    S: 83;
    t: 84;
    T: 84;
    u: 85;
    U: 85;
    v: 86;
    V: 86;
    w: 87;
    W: 87;
    x: 88;
    X: 88;
    y: 89;
    Y: 89;
    z: 90;
    Z: 90;
    OS: 91;
    ContextMenu: 93;
    F1: 112;
    F2: 113;
    F3: 114;
    F4: 115;
    F5: 116;
    F6: 117;
    F7: 118;
    F8: 119;
    F9: 120;
    F10: 121;
    F11: 122;
    F12: 123;
    F13: 124;
    F14: 125;
    F15: 126;
    F16: 127;
    F17: 128;
    F18: 129;
    F19: 130;
    F20: 131;
    F21: 132;
    F22: 133;
    F23: 134;
    F24: 135;
    NumLock: 144;
    ScrollLock: 145;
    VolumeMute: 181;
    VolumeDown: 182;
    VolumeUp: 183;
    ';': 186;
    ':': 186;
    '=': 187;
    '+': 187;
    ',': 188;
    '<': 188;
    '-': 189;
    _: 189;
    '.': 190;
    '>': 190;
    '/': 191;
    '?': 191;
    '`': 192;
    '~': 192;
    '[': 219;
    '{': 219;
    '\\': 220;
    '|': 220;
    ']': 221;
    '}': 221;
    "'": 222;
    '"': 222;
    Meta: 224;
    AltGraph: 225;
    Attn: 246;
    CrSel: 247;
    ExSel: 248;
    EraseEof: 249;
    Play: 250;
    ZoomOut: 251;
}

export declare const LeftAngleBracketKey: 188;

export declare const LeftCurlyBraceKey: 219;

export declare const LeftParenthesisKey: 57;

export declare const LeftSquareBracketKey: 219;

export declare const MinusSignKey: 189;

export declare const MultiplicationSignKey: 56;

export declare const PageDownKey: 34;

export declare const PageUpKey: 33;

export declare const PercentSignKey: 53;

export declare const PipeKey: 220;

export declare const PlusSignKey: 187;

export declare const PoundSignKey: 51;

export declare const QuestionMarkKey: 191;

export declare const RightAngleBracketKey: 190;

export declare const RightCurlyBraceKey: 221;

export declare const RightParenthesisKey: 48;

export declare const RightSquareBracketKey: 221;

export declare const SemicolonKey: 186;

export declare const SingleQuoteKey: 222;

export declare const SpacebarKey: 32;

export declare const TabKey: 9;

export declare const TildeKey: 192;

export { }

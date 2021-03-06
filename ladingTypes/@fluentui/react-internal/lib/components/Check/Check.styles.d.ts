import { ICheckStyleProps, ICheckStyles } from './Check.types';
export declare const CheckGlobalClassNames: {
    root: string;
    circle: string;
    check: string;
    /** Must be manually applied to the parent element of the check. */
    checkHost: string;
};
export declare const getStyles: (props: ICheckStyleProps) => ICheckStyles;

import { Point } from './Point';
import { ISize } from './ISize';
/**
 * Determines the distance between two points.
 *
 * @public
 */
export declare function getDistanceBetweenPoints(point1: Point, point2: Point): number;
/**
 * The available fit modes. These should match the fit modes for CSS.
 */
export declare type FitMode = 'contain' | 'cover';
/**
 * Options for fitting content sizes into bounding sizes.
 */
export interface IFitContentToBoundsOptions {
    /**
     * The size of the content to fit to the bounds.
     * The output will be proportional to this value.
     */
    contentSize: ISize;
    /**
     * The size of the bounds.
     */
    boundsSize: ISize;
    /**
     * The fit mode to apply, either 'contain' or 'cover'.
     */
    mode: FitMode;
    /**
     * An optional maximum scale factor to apply. The default is 1.
     * Use Infinity for an unbounded resize.
     */
    maxScale?: number;
}
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options - the options for the bounds fit operation
 */
export declare function fitContentToBounds(options: IFitContentToBoundsOptions): ISize;
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value - the value to determine the precision of
 */
export declare function calculatePrecision(value: number | string): number;
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value - The value that is being rounded.
 * @param precision - The number of decimal places to round the number to
 */
export declare function precisionRound(value: number, precision: number, base?: number): number;

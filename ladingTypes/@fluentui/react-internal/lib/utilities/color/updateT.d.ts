import { IColor } from './interfaces';
/**
 * Gets a color with the given transparency value and the same other components as `color`.
 * Does not modify the original color.
 */
export declare function updateT(color: IColor, t: number): IColor;

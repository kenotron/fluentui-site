import { IColor } from './interfaces';
/**
 * Gets a color with the given alpha value and the same other components as `color`.
 * Does not modify the original color.
 */
export declare function updateA(color: IColor, a: number): IColor;

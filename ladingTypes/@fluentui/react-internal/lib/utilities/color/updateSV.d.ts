import { IColor } from './interfaces';
/**
 * Gets a color with the same hue as `color` and other components updated to match the given
 * saturation and value.
 *
 * Does not modify the original `color` and does not supply a default alpha value.
 */
export declare function updateSV(color: IColor, s: number, v: number): IColor;

import { IColor } from './interfaces';
/** Shades of a given color, from softest to strongest. */
export declare enum Shade {
    Unshaded = 0,
    Shade1 = 1,
    Shade2 = 2,
    Shade3 = 3,
    Shade4 = 4,
    Shade5 = 5,
    Shade6 = 6,
    Shade7 = 7,
    Shade8 = 8
}
/**
 * Returns true if the argument is a valid Shade value
 * @param shade - The Shade value to validate.
 */
export declare function isValidShade(shade?: Shade): boolean;
export declare function isDark(color: IColor): boolean;
/**
 * Given a color and a shade specification, generates the requested shade of the color.
 * Logic:
 * if white
 *  darken via tables defined above
 * if black
 *  lighten
 * if light
 *  strongen
 * if dark
 *  soften
 * else default
 *  soften or strongen depending on shade#
 * @param color - The base color whose shade is to be computed
 * @param shade - The shade of the base color to compute
 * @param isInverted - Default false. Whether the given theme is inverted (reverse strongen/soften logic)
 */
export declare function getShade(color: IColor, shade: Shade, isInverted?: boolean): IColor | null;
export declare function getBackgroundShade(color: IColor, shade: Shade, isInverted?: boolean): IColor | null;
export declare function getContrastRatio(color1: IColor, color2: IColor): number;

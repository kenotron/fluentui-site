import { ITheme, IPartialTheme } from '@fluentui/theme';
import { VariantThemeType } from './variantThemeType';
/**
 * Returns the specified variant theme for the given theme.
 * Do not generate a variant from a variant, the results will be ugly.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @param {VariantThemeType} variant the variant type designation
 * @returns {ITheme} the variant theme
 */
export declare function getVariant(theme: IPartialTheme, variant: VariantThemeType): ITheme;
/**
 * A variant where the background is a soft shade of the neutral color. Most other colors remain unchanged.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
export declare function getNeutralVariant(theme: IPartialTheme): ITheme;
/**
 * A variant where the background is a soft version of the primary color. Most other colors remain unchanged.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
export declare function getSoftVariant(theme: IPartialTheme): ITheme;
/**
 * A variant where the background is a strong version of the primary color. All colors change.
 * The background becomes shades of the primary color.
 * The foreground/text becomes shades of the background color.
 * The primary color becomes shades of the background.
 *
 * @export
 * @param {IPartialTheme} theme the theme to build a variant for
 * @returns {ITheme} the variant theme
 */
export declare function getStrongVariant(theme: IPartialTheme): ITheme;

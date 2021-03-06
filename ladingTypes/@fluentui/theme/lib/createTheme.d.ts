import { PartialTheme, Theme } from './types/index';
/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
export declare function createTheme(theme?: PartialTheme, depComments?: boolean): Theme;

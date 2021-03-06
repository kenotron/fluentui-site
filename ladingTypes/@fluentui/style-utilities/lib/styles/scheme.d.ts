import { ICustomizerContext } from '@fluentui/utilities';
import { ISchemeNames, ITheme } from '../interfaces/index';
/**
 * @internal
 * This function is still in experimental phase in support of Foundation experimental development.
 * Its API signature and existence are subject to change.
 *
 * Modify context to activate the specified scheme or theme. For schemes, look in context (if available) and fall back
 * to global Customizations. If both scheme and theme are specified, scheme will be looked up in theme. In this case,
 * scheme must be present in theme arg, otherwise new context will default to theme arg (there is no fallback to
 * settings to look up scheme.)
 *
 * @param context - Context in which to get schemed customizations.
 * @param scheme - Scheme to get customizations for from theme arg (if supplied) OR from context and global settings.
 * @param theme - Theme to merge into context.
 * @returns modified schemed context if scheme is valid and not already applied, unmodified context otherwise.
 */
export declare function getThemedContext(context: ICustomizerContext, scheme?: ISchemeNames, theme?: ITheme): ICustomizerContext;

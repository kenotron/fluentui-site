import { IRefObject } from '@fluentui/utilities';
import { IStyle } from '@fluentui/style-utilities';
import { IStyleFunctionOrObject } from '@fluentui/utilities';
import { ITheme } from '@fluentui/style-utilities';
import * as React from 'react';

/**
 * {@docCategory Link}
 */
export declare interface ILink {
    /** Sets focus to the link. */
    focus(): void;
}

/**
 * @deprecated No longer used.
 */
export declare interface ILinkHTMLAttributes<T> extends React.HTMLAttributes<T> {
    type?: string;
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    target?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    value?: string | string[] | number;
    /** Any other props for HTMLElements or a React component passed to `as` */
    [key: string]: any;
}

/**
 * Link component props. All built-in props for `<a>` and `<button>` are supported (including
 * various event handlers) even if not listed below.
 * {@docCategory Link}
 */
export declare interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement>, Omit<React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement>, 'type'>, React.RefAttributes<HTMLElement> {
    /**
     * Optional callback to access the ILink interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ILink>;
    /**
     * URL the link points to. If not provided, the link renders as a button (unless that behavior is
     * overridden using `as`).
     */
    href?: string;
    /**
     * Where to open the linked URL. Common values are `_blank` (a new tab or window),
     * `_self` (the current window/context), `_parent`, and `_top`.
     */
    target?: string;
    /**
     * Relationship to the linked URL (can be a space-separated list).
     * Most common values are `noreferrer` and/or `noopener`.
     */
    rel?: string;
    /**
     * Click handler for the link.
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLElement>) => void;
    /**
     * Whether the link is disabled
     */
    disabled?: boolean;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ILinkStyleProps, ILinkStyles>;
    /**
     * Theme (provided through customization.)
     */
    theme?: ITheme;
    /**
     * A component type or primitive that is rendered as the type of the root element.
     */
    as?: React.ElementType;
    /**
     * Built-in HTML attribute with different behavior depending on how the link is rendered.
     * If rendered as `<a>`, hints at the MIME type.
     * If rendered as `<button>`, override the type of button (`button` is the default).
     */
    type?: string;
    /** Any other props for elements or a React component passed to `as` */
    [key: string]: any;
}

/**
 * {@docCategory Link}
 */
export declare interface ILinkStyleProps {
    className?: string;
    isButton?: boolean;
    isDisabled?: boolean;
    theme: ITheme;
}

/**
 * {@docCategory Link}
 */
export declare interface ILinkStyles {
    root: IStyle;
}

export declare const Link: React.FunctionComponent<ILinkProps>;

export declare const LinkBase: React.FunctionComponent<ILinkProps>;

export { }

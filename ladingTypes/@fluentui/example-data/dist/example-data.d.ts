/**
 * @packageDocumentation
 * This package is for use in Fabric examples and tests only. It's considered internal, so APIs
 * are subject to change without notice. (The only reason it uses api-extractor is so the types
 * can easily be added to the live example editor.)
 */


/** @internal */
export declare function createGroups(groupCount: number, groupDepth: number, startIndex: number, itemsPerGroup: number, level?: number, key?: string, isCollapsed?: boolean): IExampleGroup[];

/** @internal */
export declare function createListItems(count: number, startIndex?: number): IExampleItem[];

/** @internal */
export declare const facepilePersonas: IExampleFacepilePersona[];

/** @internal */
export declare const groupOne: (IExampleExtendedPersonaProps & {
    key: string | number;
})[];

/** @internal */
export declare const groupTwo: (IExampleExtendedPersonaProps & {
    key: string | number;
})[];

/**
 * For use in this package only.
 * Partial mirror of IExtendedPersonaProps avoid a circular dependency.
 * If the real interface changes and this one starts causing compiler errors, update it.
 * @internal
 */
export declare interface IExampleExtendedPersonaProps {
    imageUrl?: string;
    imageInitials?: string;
    text?: string;
    secondaryText?: string;
    tertiaryText?: string;
    optionalText?: string;
    presence?: number;
    isValid: boolean;
    canExpand?: boolean;
}

/**
 * For use in this package only.
 * Partial mirror of IFacepilePersona avoid a circular dependency.
 * If the real interface changes and this one starts causing compiler errors, update it.
 * @internal
 */
export declare interface IExampleFacepilePersona {
    imageUrl?: string;
    imageInitials?: string;
    initialsColor?: number;
    personaName?: string;
    onClick?: (ev: unknown, persona?: IExampleFacepilePersona) => void;
    data?: any;
}

/**
 * For use in this package only.
 * Partial mirror of IGroup from DetailsList avoid a circular dependency.
 * If the real interface changes and this one starts causing compiler errors, update it.
 * @internal
 */
export declare interface IExampleGroup {
    count: number;
    key: string;
    name: string;
    startIndex: number;
    level?: number;
    isCollapsed?: boolean;
    children?: IExampleGroup[];
}

/** @internal */
export declare interface IExampleItem {
    thumbnail: string;
    key: string;
    name: string;
    description: string;
    color: string;
    shape: string;
    location: string;
    width: number;
    height: number;
}

/** @internal */
export declare function isGroupable(key: string): boolean;

/** @internal */
export declare function lorem(wordCount: number): string;

/** @internal */
export declare const mru: (IExampleExtendedPersonaProps & {
    key: string | number;
})[];

/** Sample people and groups @internal */
export declare const people: (IExampleExtendedPersonaProps & {
    key: string | number;
})[];

/**
 * Creates an array of incrementing numbers from a specified start and end value.
 * @internal
 */
export declare const range: (start: number, end: number) => number[];

/** @internal */
export declare const TestImages: {
    choiceGroupBarUnselected: string;
    choiceGroupBarSelected: string;
    choiceGroupPieUnselected: string;
    choiceGroupPieSelected: string;
    documentPreview: string;
    documentPreviewTwo: string;
    documentPreviewThree: string;
    iconOne: string;
    iconPpt: string;
    personaFemale: string;
    personaMale: string;
};

export { }

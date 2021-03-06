import * as React from 'react';
import { IFacepileProps } from './Facepile.types';
/**
 * FacePile with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Component-Styling)
 */
export declare class FacepileBase extends React.Component<IFacepileProps, {}> {
    static defaultProps: IFacepileProps;
    private _ariaDescriptionId;
    private _classNames;
    constructor(props: IFacepileProps);
    render(): JSX.Element;
    protected onRenderAriaDescription(): "" | JSX.Element | undefined;
    private _onRenderVisiblePersonas;
    private _getPersonaControl;
    private _getPersonaCoinControl;
    private _getElementWithOnClickEvent;
    private _getElementWithoutOnClickEvent;
    private _getElementProps;
    private _getOverflowElement;
    private _getDescriptiveOverflowElement;
    private _getIconElement;
    private _getAddNewElement;
    private _onPersonaClick;
    private _onPersonaMouseMove;
    private _onPersonaMouseOut;
    private _renderInitials;
    private _renderInitialsNotPictured;
}

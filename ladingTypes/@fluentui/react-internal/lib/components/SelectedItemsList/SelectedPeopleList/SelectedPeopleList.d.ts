import * as React from 'react';
import { BaseSelectedItemsList } from '../BaseSelectedItemsList';
import { IBaseSelectedItemsListProps, ISelectedItemProps } from '../BaseSelectedItemsList.types';
import { IPersonaProps } from '../../../Persona';
import { IRenderFunction } from '../../../Utilities';
import { IBaseFloatingPickerProps } from '../../../FloatingPicker';
/**
 * {@docCategory SelectedPeopleList}
 */
export interface IExtendedPersonaProps extends IPersonaProps {
    key?: React.Key;
    isValid: boolean;
    blockRecipientRemoval?: boolean;
    shouldBlockSelection?: boolean;
    canExpand?: boolean;
    isEditing?: boolean;
}
/**
 * {@docCategory SelectedPeopleList}
 */
export interface ISelectedPeopleItemProps extends ISelectedItemProps<IExtendedPersonaProps> {
    onExpandItem?: () => void;
    renderPersonaCoin?: IRenderFunction<IPersonaProps>;
    renderPrimaryText?: IRenderFunction<IPersonaProps>;
}
/**
 * {@docCategory SelectedPeopleList}
 */
export interface ISelectedPeopleProps extends IBaseSelectedItemsListProps<IExtendedPersonaProps> {
    onExpandGroup?: (item: IExtendedPersonaProps) => void;
    removeMenuItemText?: string;
    copyMenuItemText?: string;
    editMenuItemText?: string;
    getEditingItemText?: (item: IExtendedPersonaProps) => string;
    onRenderFloatingPicker?: React.ComponentType<IBaseFloatingPickerProps<IPersonaProps>>;
    floatingPickerProps?: IBaseFloatingPickerProps<IPersonaProps>;
}
/**
 * {@docCategory SelectedPeopleList}
 */
export declare class BasePeopleSelectedItemsList extends BaseSelectedItemsList<IExtendedPersonaProps, ISelectedPeopleProps> {
}
/**
 * Standard People Picker.
 */
export declare class SelectedPeopleList extends BasePeopleSelectedItemsList {
    static defaultProps: any;
    protected renderItems: () => JSX.Element[];
    private _renderItem;
    private _beginEditing;
    private _completeEditing;
    private _createMenuItems;
}

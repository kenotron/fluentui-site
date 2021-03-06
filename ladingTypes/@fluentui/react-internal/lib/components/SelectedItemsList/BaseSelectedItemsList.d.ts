import * as React from 'react';
import { Selection } from '../../Selection';
import { IBaseSelectedItemsList, IBaseSelectedItemsListProps } from './BaseSelectedItemsList.types';
import { IObjectWithKey } from '../../Utilities';
export interface IBaseSelectedItemsListState<T> {
    items: T[];
}
export declare class BaseSelectedItemsList<T, P extends IBaseSelectedItemsListProps<T>> extends React.Component<P, IBaseSelectedItemsListState<T>> implements IBaseSelectedItemsList<T> {
    protected root: HTMLElement;
    private _defaultSelection;
    static getDerivedStateFromProps(newProps: IBaseSelectedItemsListProps<any>): {
        items: any[];
    } | null;
    constructor(basePickerProps: P);
    get items(): T[];
    addItems: (items: T[]) => void;
    removeItemAt: (index: number) => void;
    removeItem: (item: T) => void;
    replaceItem: (itemToReplace: T, itemsToReplaceWith: T[]) => void;
    removeItems: (itemsToRemove: any[]) => void;
    removeSelectedItems(): void;
    /**
     * Controls what happens whenever there is an action that impacts the selected items.
     * If selectedItems is provided, this will act as a controlled component and will not update its own state.
     */
    updateItems(items: T[], focusIndex?: number): void;
    onCopy: (ev: React.ClipboardEvent<HTMLElement>) => void;
    hasSelectedItems(): boolean;
    componentDidUpdate(oldProps: P, oldState: IBaseSelectedItemsListState<IObjectWithKey>): void;
    unselectAll(): void;
    highlightedItems(): T[];
    componentDidMount(): void;
    protected get selection(): Selection;
    render(): any;
    protected renderItems: () => JSX.Element[];
    protected onSelectionChanged: () => void;
    protected onChange(items?: T[]): void;
    protected onItemChange: (changedItem: T, index: number) => void;
    protected copyItems(items: T[]): void;
    private _onSelectedItemsUpdated;
    private _canRemoveItem;
}

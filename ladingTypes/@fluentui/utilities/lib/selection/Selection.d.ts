import { IObjectWithKey, ISelection, SelectionMode } from './Selection.types';
/**
 * {@docCategory Selection}
 */
export interface ISelectionOptions<TItem = IObjectWithKey> {
    onSelectionChanged?: () => void;
    /** Custom logic to generate item keys. Required if `TItem` does not have a `key` property. */
    getKey?: (item: TItem, index?: number) => string | number;
    canSelectItem?: (item: TItem, index?: number) => boolean;
    selectionMode?: SelectionMode;
    items?: TItem[];
}
/**
 * Selection options with required `getKey` property.
 * {@docCategory Selection}
 */
export declare type ISelectionOptionsWithRequiredGetKey<TItem> = ISelectionOptions<TItem> & Required<Pick<ISelectionOptions<TItem>, 'getKey'>>;
/**
 * {@docCategory Selection}
 */
export declare class Selection<TItem = IObjectWithKey> implements ISelection<TItem> {
    /** Number of items selected. Do not modify. */
    count: number;
    readonly mode: SelectionMode;
    private _getKey;
    private _canSelectItem;
    private _changeEventSuppressionCount;
    private _items;
    private _selectedItems;
    private _selectedIndices;
    private _isAllSelected;
    private _exemptedIndices;
    private _exemptedCount;
    private _keyToIndexMap;
    private _anchoredIndex;
    private _onSelectionChanged;
    private _hasChanged;
    private _unselectableIndices;
    private _unselectableCount;
    private _isModal;
    /**
     * Create a new Selection. If `TItem` does not have a `key` property, you must provide an options
     * object with a `getKey` implementation. Providing options is optional otherwise.
     * (At most one `options` object is accepted.)
     */
    constructor(...options: TItem extends IObjectWithKey ? [] | [ISelectionOptions<TItem>] : [ISelectionOptionsWithRequiredGetKey<TItem>]);
    canSelectItem(item: TItem, index?: number): boolean;
    getKey(item: TItem, index?: number): string;
    setChangeEvents(isEnabled: boolean, suppressChange?: boolean): void;
    isModal(): boolean;
    setModal(isModal: boolean): void;
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    setItems(items: TItem[], shouldClear?: boolean): void;
    getItems(): TItem[];
    getSelection(): TItem[];
    getSelectedCount(): number;
    getSelectedIndices(): number[];
    isRangeSelected(fromIndex: number, count: number): boolean;
    isAllSelected(): boolean;
    isKeySelected(key: string): boolean;
    isIndexSelected(index: number): boolean;
    setAllSelected(isAllSelected: boolean): void;
    setKeySelected(key: string, isSelected: boolean, shouldAnchor: boolean): void;
    setIndexSelected(index: number, isSelected: boolean, shouldAnchor: boolean): void;
    selectToKey(key: string, clearSelection?: boolean): void;
    selectToIndex(index: number, clearSelection?: boolean): void;
    toggleAllSelected(): void;
    toggleKeySelected(key: string): void;
    toggleIndexSelected(index: number): void;
    toggleRangeSelected(fromIndex: number, count: number): void;
    private _updateCount;
    private _setAllSelected;
    private _change;
}

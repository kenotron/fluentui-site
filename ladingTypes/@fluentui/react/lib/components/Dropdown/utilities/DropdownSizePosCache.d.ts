import { IDropdownOption } from '../Dropdown.types';
/**
 * A utility class to cache size and position in cache.
 *
 * Dropdown options has non-selectable display types. It is therefore not cheap to determine
 * the total number of actual selectable options as well as the position an option is in the
 * list of options - O(n) cost for each lookup.
 *
 * Given that we potentially have to make this determination on every single render pass, this
 * cache should provide a little bit of relief.
 */
export declare class DropdownSizePosCache {
    private _cachedOptions;
    private _displayOnlyOptionsCache;
    private _size;
    /**
     * Invalidates the cache and recalculate the size of selectable options.
     */
    updateOptions(options: IDropdownOption[]): void;
    /**
     * The size of all the selectable options.
     */
    get optionSetSize(): number;
    /**
     * The chached options array.
     */
    get cachedOptions(): IDropdownOption[];
    /**
     * Returns the position of this option element relative to the full set of selectable option elements.
     * Note: the first selectable element is position 1 in the set.
     * @param index The raw index of the option element.
     */
    positionInSet(index: number | undefined): number | undefined;
}

import { RefCallback } from '@fluentui/react-hooks';
/**
 * Callback to notify the user that the items in the overflow have changed. This should ensure that the overflow menu
 * is visible, and contains all of the overflowing items.
 *
 * @param overflowIndex - The index of the first item in the overflow, or items.length if nothing is overflowing.
 * @param items - The list of all items in the container, and whether that particular item is in the overflow
 */
export declare type OverflowItemsChangedCallback = (overflowIndex: number, items: {
    ele: HTMLElement;
    isOverflowing: boolean;
}[]) => void;
/** Parameters for {@see useOverflow} */
export declare type OverflowParams = {
    /** Callback to notify the user that the items in the overflow have changed. */
    onOverflowItemsChanged: OverflowItemsChangedCallback;
    /** True if the element containing overflowMenuButtonRef is in right-to-left order */
    rtl: boolean;
    /** Optional: Index of item that should never go into the overflow menu. */
    pinnedIndex?: number;
};
/** Return value for {@see useOverflow} */
export declare type OverflowRefs = {
    /** Set the overflow menu button's ref to this ref callback */
    menuButtonRef: RefCallback<HTMLElement>;
};
/**
 * Track whether any items don't fit within their container, and move them to the overflow menu.
 * Items are moved into the overflow menu from back to front, excluding pinned items.
 *
 * The overflow menu button must be the last sibling of all of the items that can be put into the overflow, and it
 * must be hooked up to the `setMenuButtonRef` setter function that's returned by `useOverflow`:
 * ```ts
 * const overflow = useOverflow(...);
 * ```
 * ```jsx
 * <Container>
 *  <Item /> // Index 0
 *  <Item /> // Index 1
 *  ...
 *  <Button ref={overflow.setMenuButtonRef} /> // Can be any React.Component or HTMLElement
 * </Container>
 * ```
 */
export declare const useOverflow: ({ onOverflowItemsChanged, rtl, pinnedIndex }: OverflowParams) => OverflowRefs;

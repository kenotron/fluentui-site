/**
 * Wrapper for ResizeObserver, with fallback for browsers that don't support ResizeObserver.
 *
 * Calls the onResize callback once layout is complete, and again whenever any of the target(s) change size.
 * Or if ResizeObserver isn't supported, calls the callback whenever the window changes size.
 *
 * @param target - Either a single element, or array of elements to watch for size changes.
 * @param onResize - Callback to be notified when layout is complete, and when the target(s) change size.
 *    If this browser supports ResizeObserver, the callback will be passed the ResizeObserverEntry[] array.
 *    Otherwise, the entries array will be undefined, and you'll need to find another way to get the element's size,
 *    (e.g. clientWidth/clientHeight or getBoundingClientRect).
 *
 * @returns A function to clean up the observer/listener.
 */
export declare const observeResize: (target: Element | Element[], onResize: (entries: readonly ResizeObserverEntry[] | undefined) => void) => () => void;
/** Temporary type definition for ResizeObserverEntry. Can be removed when official types are available. */
declare type ResizeObserverEntry = {
    readonly contentRect: DOMRectReadOnly;
    readonly target: Element;
};
export {};

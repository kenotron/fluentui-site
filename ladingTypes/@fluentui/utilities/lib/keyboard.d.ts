/**
 * Returns true if the keycode is a directional keyboard key.
 */
export declare function isDirectionalKeyCode(which: number): boolean;
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
export declare function addDirectionalKeyCode(which: number): void;

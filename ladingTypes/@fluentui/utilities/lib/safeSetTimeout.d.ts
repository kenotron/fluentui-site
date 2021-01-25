import * as React from 'react';
/**
 * Generates a function to be attached to a React component, which can be called
 * as a replacement to setTimeout. In-flight async calls will be auto canceled if the component
 * is unmounting before the async code is executed, preventing bugs where code
 * accesses things within the component after being unmounted.
 */
export declare const safeSetTimeout: (component: React.Component<{}, {}, any>) => (cb: Function, duration: number) => void;

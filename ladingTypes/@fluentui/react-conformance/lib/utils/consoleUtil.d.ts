/// <reference types="node" />
/**
 * Enable console logging.
 */
export declare const enable: () => Console & {
    memory: any;
    assert(condition?: boolean | undefined, message?: string | undefined, ...data: any[]): void;
    assert(value: any, message?: string | undefined, ...optionalParams: any[]): void;
    clear(): void;
    clear(): void;
    count(label?: string | undefined): void;
    count(label?: string | undefined): void;
    debug(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    dir(value?: any, ...optionalParams: any[]): void;
    dir(obj: any, options?: NodeJS.InspectOptions | undefined): void;
    dirxml(value: any): void;
    dirxml(...data: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    exception(message?: string | undefined, ...optionalParams: any[]): void;
    group(groupTitle?: string | undefined, ...optionalParams: any[]): void;
    group(...label: any[]): void;
    groupCollapsed(groupTitle?: string | undefined, ...optionalParams: any[]): void;
    groupCollapsed(): void;
    groupEnd(): void;
    groupEnd(): void;
    info(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    markTimeline(label?: string | undefined): void;
    markTimeline(label?: string | undefined): void;
    profile(reportName?: string | undefined): void;
    profile(label?: string | undefined): void;
    profileEnd(reportName?: string | undefined): void;
    profileEnd(label?: string | undefined): void;
    table(...tabularData: any[]): void;
    table(tabularData: any, properties?: string[] | undefined): void;
    time(label?: string | undefined): void;
    time(label?: string | undefined): void;
    timeEnd(label?: string | undefined): void;
    timeEnd(label?: string | undefined): void;
    timeStamp(label?: string | undefined): void;
    timeStamp(label?: string | undefined): void;
    timeline(label?: string | undefined): void;
    timeline(label?: string | undefined): void;
    timelineEnd(label?: string | undefined): void;
    timelineEnd(label?: string | undefined): void;
    trace(message?: any, ...optionalParams: any[]): void;
    trace(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    Console: NodeJS.ConsoleConstructor;
    countReset(label?: string | undefined): void;
    timeLog(label?: string | undefined, ...data: any[]): void;
};
/**
 * Disable console logging.
 */
export declare const disable: () => Console & {
    log: () => undefined;
    error: () => undefined;
    debug: () => undefined;
    warn: () => undefined;
    info: () => undefined;
};
/**
 * Silence the console for a single test.  It will be re-enabled after it().
 */
export declare const disableOnce: () => void;
declare const _default: {
    enable: () => Console & {
        memory: any;
        assert(condition?: boolean | undefined, message?: string | undefined, ...data: any[]): void;
        assert(value: any, message?: string | undefined, ...optionalParams: any[]): void;
        clear(): void;
        clear(): void;
        count(label?: string | undefined): void;
        count(label?: string | undefined): void;
        debug(message?: any, ...optionalParams: any[]): void;
        debug(message?: any, ...optionalParams: any[]): void;
        dir(value?: any, ...optionalParams: any[]): void;
        dir(obj: any, options?: NodeJS.InspectOptions | undefined): void;
        dirxml(value: any): void;
        dirxml(...data: any[]): void;
        error(message?: any, ...optionalParams: any[]): void;
        error(message?: any, ...optionalParams: any[]): void;
        exception(message?: string | undefined, ...optionalParams: any[]): void;
        group(groupTitle?: string | undefined, ...optionalParams: any[]): void;
        group(...label: any[]): void;
        groupCollapsed(groupTitle?: string | undefined, ...optionalParams: any[]): void;
        groupCollapsed(): void;
        groupEnd(): void;
        groupEnd(): void;
        info(message?: any, ...optionalParams: any[]): void;
        info(message?: any, ...optionalParams: any[]): void;
        log(message?: any, ...optionalParams: any[]): void;
        log(message?: any, ...optionalParams: any[]): void;
        markTimeline(label?: string | undefined): void;
        markTimeline(label?: string | undefined): void;
        profile(reportName?: string | undefined): void;
        profile(label?: string | undefined): void;
        profileEnd(reportName?: string | undefined): void;
        profileEnd(label?: string | undefined): void;
        table(...tabularData: any[]): void;
        table(tabularData: any, properties?: string[] | undefined): void;
        time(label?: string | undefined): void;
        time(label?: string | undefined): void;
        timeEnd(label?: string | undefined): void;
        timeEnd(label?: string | undefined): void;
        timeStamp(label?: string | undefined): void;
        timeStamp(label?: string | undefined): void;
        timeline(label?: string | undefined): void;
        timeline(label?: string | undefined): void;
        timelineEnd(label?: string | undefined): void;
        timelineEnd(label?: string | undefined): void;
        trace(message?: any, ...optionalParams: any[]): void;
        trace(message?: any, ...optionalParams: any[]): void;
        warn(message?: any, ...optionalParams: any[]): void;
        warn(message?: any, ...optionalParams: any[]): void;
        Console: NodeJS.ConsoleConstructor;
        countReset(label?: string | undefined): void;
        timeLog(label?: string | undefined, ...data: any[]): void;
    };
    disable: () => Console & {
        log: () => undefined;
        error: () => undefined;
        debug: () => undefined;
        warn: () => undefined;
        info: () => undefined;
    };
    disableOnce: () => void;
};
export default _default;

import { IRawStyle } from '@fluentui/merge-styles';
declare function _continuousPulseAnimationDouble(beaconColorOne: string, beaconColorTwo: string, innerDimension: string, outerDimension: string, borderWidth: string): string;
declare function _continuousPulseAnimationSingle(beaconColorOne: string, beaconColorTwo: string, innerDimension: string, outerDimension: string, borderWidth: string): string;
declare function _createDefaultAnimation(animationName: string, delayLength?: string): IRawStyle;
export declare const PulsingBeaconAnimationStyles: {
    continuousPulseAnimationDouble: typeof _continuousPulseAnimationDouble;
    continuousPulseAnimationSingle: typeof _continuousPulseAnimationSingle;
    createDefaultAnimation: typeof _createDefaultAnimation;
};
export {};

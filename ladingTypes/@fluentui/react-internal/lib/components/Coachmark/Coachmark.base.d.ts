import * as React from 'react';
import { ICoachmarkProps } from './Coachmark.types';
export declare const COACHMARK_ATTRIBUTE_NAME = "data-coachmarkid";
/**
 * An interface for the cached dimensions of entity inner host.
 */
export interface IEntityRect {
    width?: number;
    height?: number;
}
export declare const CoachmarkBase: React.FunctionComponent<ICoachmarkProps>;

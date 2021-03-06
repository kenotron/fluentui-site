import * as React from 'react';
import { IPositioningContainerProps } from './PositioningContainer.types';
export declare function useHeightOffset({ finalHeight }: IPositioningContainerProps, contentHost: React.RefObject<HTMLDivElement | null>): number;
export declare const PositioningContainer: React.FunctionComponent<IPositioningContainerProps>;

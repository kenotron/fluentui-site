import * as React from 'react';
import { ComponentProps } from '../utils/commonTypes';
export interface ImageProps extends ComponentProps, React.ImgHTMLAttributes<HTMLImageElement> {
}
export declare type ImageState = ImageProps;

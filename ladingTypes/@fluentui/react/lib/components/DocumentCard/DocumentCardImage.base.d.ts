import * as React from 'react';
import { IDocumentCardImageProps } from './DocumentCardImage.types';
export interface IDocumentCardImageState {
    readonly imageHasLoaded: boolean;
}
/**
 * {@docCategory DocumentCard}
 */
export declare class DocumentCardImageBase extends React.Component<IDocumentCardImageProps, IDocumentCardImageState> {
    private _classNames;
    constructor(props: IDocumentCardImageProps);
    render(): JSX.Element;
    private _onImageLoad;
    private _renderCenterIcon;
    private _renderCornerIcon;
}

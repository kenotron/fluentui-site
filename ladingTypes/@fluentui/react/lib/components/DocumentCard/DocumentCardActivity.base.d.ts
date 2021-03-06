import * as React from 'react';
import { IDocumentCardActivityProps } from './DocumentCardActivity.types';
/**
 * {@docCategory DocumentCard}
 */
export declare class DocumentCardActivityBase extends React.Component<IDocumentCardActivityProps, any> {
    private _classNames;
    constructor(props: IDocumentCardActivityProps);
    render(): JSX.Element | null;
    private _renderAvatars;
    private _renderAvatar;
    private _getNameString;
}

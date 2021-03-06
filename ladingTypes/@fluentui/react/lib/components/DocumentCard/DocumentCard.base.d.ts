import * as React from 'react';
import { IDocumentCard, IDocumentCardProps } from './DocumentCard.types';
/**
 * {@docCategory DocumentCard}
 */
export declare class DocumentCardBase extends React.Component<IDocumentCardProps, any> implements IDocumentCard {
    static defaultProps: IDocumentCardProps;
    private _rootElement;
    private _classNames;
    constructor(props: IDocumentCardProps);
    render(): JSX.Element;
    focus(): void;
    private _onClick;
    private _onKeyDown;
    private _onAction;
}

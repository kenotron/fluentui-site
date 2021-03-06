import * as React from 'react';
import { IDialogProps } from './Dialog.types';
export declare class DialogBase extends React.Component<IDialogProps, {}> {
    static defaultProps: IDialogProps;
    private _id;
    private _defaultTitleTextId;
    private _defaultSubTextId;
    constructor(props: IDialogProps);
    render(): JSX.Element;
    private _getSubTextId;
    private _getTitleTextId;
}

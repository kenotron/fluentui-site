import * as React from 'react';
import { IPlainCardProps } from './PlainCard.types';
export declare class PlainCardBase extends React.Component<IPlainCardProps, {}> {
    private _classNames;
    constructor(props: IPlainCardProps);
    render(): JSX.Element;
    private _onKeyDown;
}

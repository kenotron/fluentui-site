import * as React from 'react';
import { IActivityItemProps } from './ActivityItem.types';
/**
 * {@docCategory ActivityItem}
 */
export declare class ActivityItem extends React.Component<IActivityItemProps, {}> {
    constructor(props: IActivityItemProps);
    render(): JSX.Element;
    private _onRenderIcon;
    private _onRenderActivityDescription;
    private _onRenderComments;
    private _onRenderTimeStamp;
    private _onRenderPersonaArray;
    private _getClassNames;
}

import * as React from 'react';
import { IColumn } from './DetailsList.types';
import { IDetailsRowBaseProps } from './DetailsRow.types';
import { IDetailsRowCheckProps } from './DetailsRowCheck.types';
export interface IDetailsRowSelectionState {
    isSelected: boolean;
    isSelectionModal: boolean;
}
export interface IDetailsRowState {
    selectionState: IDetailsRowSelectionState;
    columnMeasureInfo?: {
        index: number;
        column: IColumn;
        onMeasureDone: (measuredWidth: number) => void;
    };
    isDropping?: boolean;
}
export declare class DetailsRowBase extends React.Component<IDetailsRowBaseProps, IDetailsRowState> {
    private _events;
    private _root;
    private _cellMeasurer;
    private _focusZone;
    private _droppingClassNames;
    /** Whether this.props.onDidMount has been called */
    private _onDidMountCalled;
    private _dragDropSubscription;
    private _classNames;
    private _rowClassNames;
    static getDerivedStateFromProps(nextProps: IDetailsRowBaseProps, previousState: IDetailsRowState): IDetailsRowState;
    constructor(props: IDetailsRowBaseProps);
    componentDidMount(): void;
    componentDidUpdate(previousProps: IDetailsRowBaseProps): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: IDetailsRowBaseProps, nextState: IDetailsRowState): boolean;
    render(): JSX.Element;
    /**
     * measure cell at index. and call the call back with the measured cell width when finish measure
     *
     * @param index - The cell index
     * @param onMeasureDone - The call back function when finish measure
     */
    measureCell(index: number, onMeasureDone: (width: number) => void): void;
    focus(forceIntoFirstElement?: boolean): boolean;
    protected _onRenderCheck(props: IDetailsRowCheckProps): JSX.Element;
    private _onSelectionChanged;
    private _getRowDragDropOptions;
    /**
     * update isDropping state based on the input value, which is used to change style during drag and drop
     *
     * when change to true, that means drag enter. we will add default dropping class name
     * or the custom dropping class name (return result from onDragEnter) to the root elemet.
     *
     * when change to false, that means drag leave. we will remove the dropping class name from root element.
     *
     * @param newValue - New isDropping state value
     * @param event - The event trigger dropping state change which can be dragenter, dragleave etc
     */
    private _updateDroppingState;
}

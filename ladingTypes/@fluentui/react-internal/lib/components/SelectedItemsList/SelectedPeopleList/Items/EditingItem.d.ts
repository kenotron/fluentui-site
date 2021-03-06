import * as React from 'react';
import { IPeoplePickerItemState } from './ExtendedSelectedItem';
import { IEditingSelectedPeopleItemProps } from './EditingItem.types';
export declare class EditingItem extends React.Component<IEditingSelectedPeopleItemProps, IPeoplePickerItemState> {
    private _editingInput;
    private _editingFloatingPicker;
    constructor(props: IEditingSelectedPeopleItemProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private _renderEditingSuggestions;
    private _resolveInputRef;
    private _onInputClick;
    private _onInputBlur;
    private _onInputChange;
    private _onInputKeyDown;
    private _onSuggestionSelected;
}

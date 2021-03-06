import { IComboBoxStyles, IComboBoxOptionStyles } from './ComboBox.types';
export interface IComboBoxClassNames {
    container: string;
    label: string;
    root: string;
    input: string;
    errorMessage: string;
    callout: string;
    optionsContainer: string;
    header: string;
    divider: string;
    optionsContainerWrapper: string;
    screenReaderText: string;
}
export interface IComboBoxOptionClassNames {
    optionText: string;
    root: string;
    optionTextWrapper: string;
}
export declare const getClassNames: (styles: Partial<IComboBoxStyles>, className: string, isOpen: boolean, disabled: boolean, required: boolean, focused: boolean, allowFreeForm: boolean, hasErrorMessage: boolean) => IComboBoxClassNames;
export declare const getComboBoxOptionClassNames: (styles: Partial<IComboBoxOptionStyles>) => IComboBoxOptionClassNames;

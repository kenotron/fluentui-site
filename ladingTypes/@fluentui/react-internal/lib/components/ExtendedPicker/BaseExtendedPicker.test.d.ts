import { IBaseExtendedPickerProps } from './BaseExtendedPicker.types';
import { BaseExtendedPicker } from './BaseExtendedPicker';
export interface ISimple {
    key: string;
    name: string;
}
export declare type TypedBaseExtendedPicker = BaseExtendedPicker<ISimple, IBaseExtendedPickerProps<ISimple>>;

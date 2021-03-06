import { IBaseCardProps } from '../BaseCard.types';
export interface ICardCalloutProps extends IBaseCardProps<{}, {}, {}> {
    finalHeight?: number;
    content?: JSX.Element;
}
export declare const CardCallout: (props: ICardCalloutProps) => JSX.Element;

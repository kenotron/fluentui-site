import { IActivityItemStyles } from './ActivityItem.types';
import { IPersonaProps } from '../../Persona';
export interface IActivityItemClassNames {
    root?: string;
    activityContent?: string;
    activityText?: string;
    personaContainer?: string;
    activityPersona?: string;
    activityTypeIcon?: string;
    commentText?: string;
    timeStamp?: string;
    pulsingBeacon?: string;
}
export declare const getClassNames: (styles: IActivityItemStyles, className: string, activityPersonas: IPersonaProps[], isCompact: boolean) => IActivityItemClassNames;

import * as React from 'react';
import { BaseSlots, SlotProps } from '@fluentui/react-compose';
import { ComponentProps } from '@fluentui/react-compose/lib/next/index';
import { ColorTokenSet } from '@fluentui/theme';
export declare type CardSectionProps = ComponentProps & React.HTMLAttributes<HTMLDivElement> & {
    /** A card section can be fitted, without any space above or below it. */
    fitted?: boolean;
};
export interface CardSectionState extends CardSectionProps {
}
export interface CardSectionSlots extends BaseSlots {
}
export declare type CardSectionSlotProps = SlotProps<CardSectionSlots, CardSectionProps, React.HTMLAttributes<HTMLDivElement>>;
export declare type CardSectionTokens = ColorTokenSet & {};

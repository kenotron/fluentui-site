import * as React from 'react';
import { IFloatingSuggestionsHeaderFooterProps } from '../../FloatingSuggestionsComposite/FloatingSuggestionsHeaderFooterItem/FloatingSuggestionsHeaderFooterItem.types';
export interface IUseFloatingSuggestionItems<T> {
    focusItemIndex: number;
    setFocusItemIndex: React.Dispatch<React.SetStateAction<number>>;
    suggestionItems: T[];
    setSuggestionItems: React.Dispatch<React.SetStateAction<T[]>>;
    footerItemIndex: number;
    setfooterItemIndex: React.Dispatch<React.SetStateAction<number>>;
    footerItems: IFloatingSuggestionsHeaderFooterProps[];
    setFooterItems: React.Dispatch<React.SetStateAction<IFloatingSuggestionsHeaderFooterProps[]>>;
    headerItemIndex: number;
    setHeaderItemIndex: React.Dispatch<React.SetStateAction<number>>;
    headerItems: IFloatingSuggestionsHeaderFooterProps[];
    setHeaderItems: React.Dispatch<React.SetStateAction<IFloatingSuggestionsHeaderFooterProps[]>>;
    isSuggestionsShown: boolean;
    showPicker: (show: boolean) => void;
    selectNextSuggestion: () => void;
    selectPreviousSuggestion: () => void;
    getFocusedSuggestion: () => T;
    hasSuggestionSelected: () => void;
    removeSuggestion: (index: number) => void;
}
export declare const useFloatingSuggestionItems: <T extends {}>(floatingSuggestionItems: T[], footerSuggestionItems?: IFloatingSuggestionsHeaderFooterProps[] | undefined, headerSuggestionItems?: IFloatingSuggestionsHeaderFooterProps[] | undefined, focusSuggestionIndex?: number | undefined, focusFooterIndex?: number | undefined, focusHeaderIndex?: number | undefined, isSuggestionsVisible?: boolean | undefined) => {
    focusItemIndex: number;
    setFocusItemIndex: React.Dispatch<React.SetStateAction<number>>;
    suggestionItems: T[];
    setSuggestionItems: React.Dispatch<React.SetStateAction<T[]>>;
    footerItemIndex: number;
    setFooterItemIndex: React.Dispatch<React.SetStateAction<number>>;
    footerItems: IFloatingSuggestionsHeaderFooterProps[] | undefined;
    setFooterItems: React.Dispatch<React.SetStateAction<IFloatingSuggestionsHeaderFooterProps[] | undefined>>;
    headerItemIndex: number;
    setHeaderItemIndex: React.Dispatch<React.SetStateAction<number>>;
    headerItems: IFloatingSuggestionsHeaderFooterProps[] | undefined;
    setHeaderItems: React.Dispatch<React.SetStateAction<IFloatingSuggestionsHeaderFooterProps[] | undefined>>;
    isSuggestionsShown: boolean;
    showPicker: (show: boolean) => void;
    selectNextSuggestion: () => void;
    selectPreviousSuggestion: () => void;
    getFocusedSuggestion: () => T;
    hasSuggestionSelected: () => boolean;
    removeSuggestion: (index: number) => void;
};

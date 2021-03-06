import { ISuggestionModel } from '../../../Pickers';
export declare type SuggestionsStoreOptions<T> = {
    getAriaLabel?: (item: T) => string;
};
export declare class SuggestionsStore<T> {
    suggestions: ISuggestionModel<T>[];
    private getAriaLabel?;
    constructor(options?: SuggestionsStoreOptions<T>);
    updateSuggestions(newSuggestions: T[]): void;
    getSuggestions(): ISuggestionModel<T>[];
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    removeSuggestion(index: number): void;
    convertSuggestionsToSuggestionItems(suggestions: Array<ISuggestionModel<T> | T>): ISuggestionModel<T>[];
    private _isSuggestionModel;
    private _ensureSuggestionModel;
}

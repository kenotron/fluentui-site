import { ComposePreparedOptions, MergePropsResult, GenericDictionary } from './types';
/**
 * Merge props takes in state and compose options, and resolves slots and slotProps.
 * It's expected that the component will call mergeProps(state, options) from within
 * render; after resolving state and before rendering slots and slotProps.
 */
export declare function mergeProps<TProps, TState = TProps, TSlots = GenericDictionary, TSlotProps = {
    [key in keyof TSlots]: any;
}>(state: TState, options: ComposePreparedOptions<TProps, TState>): MergePropsResult<TState, TSlots, TSlotProps>;

import { KeytipDataOptions } from './KeytipData.types';
export interface IKeytipData {
    ariaDescribedBy: string | undefined;
    keytipId: string | undefined;
}
/**
 * Hook that creates attributes for components which are enabled with Keytip.
 */
export declare function useKeytipData(options: KeytipDataOptions): IKeytipData;

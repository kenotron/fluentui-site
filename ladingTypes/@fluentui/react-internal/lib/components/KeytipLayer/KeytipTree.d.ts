import { IKeytipProps } from '../../Keytip';
import { IKeytipTreeNode } from './IKeytipTreeNode';
/**
 * This class is responsible for handling the parent/child relationships between keytips
 */
export declare class KeytipTree {
    currentKeytip?: IKeytipTreeNode;
    root: IKeytipTreeNode;
    nodeMap: {
        [nodeId: string]: IKeytipTreeNode;
    };
    /**
     * KeytipTree constructor
     */
    constructor();
    /**
     * Add a keytip node to this KeytipTree
     *
     * @param keytipProps - Keytip to add to the Tree
     * @param uniqueID - Unique ID for this keytip
     * @param persisted - T/F if this keytip should be marked as persisted
     */
    addNode(keytipProps: IKeytipProps, uniqueID: string, persisted?: boolean): void;
    /**
     * Updates a node in the tree
     *
     * @param keytipProps - Keytip props to update
     * @param uniqueID - Unique ID for this keytip
     */
    updateNode(keytipProps: IKeytipProps, uniqueID: string): void;
    /**
     * Removes a node from the KeytipTree
     *
     * @param sequence - full string of the node to remove
     */
    removeNode(keytipProps: IKeytipProps, uniqueID: string): void;
    /**
     * Searches the currentKeytip's children to exactly match a sequence. Will not match disabled nodes but
     * will match persisted nodes
     *
     * @param keySequence - string to match
     * @param currentKeytip - The keytip whose children will try to match
     * @returns The node that exactly matched the keySequence, or undefined if none matched
     */
    getExactMatchedNode(keySequence: string, currentKeytip: IKeytipTreeNode): IKeytipTreeNode | undefined;
    /**
     * Searches the currentKeytip's children to find nodes that start with the given sequence. Will not match
     * disabled nodes but will match persisted nodes
     *
     * @param keySequence - string to partially match
     * @param currentKeytip - The keytip whose children will try to partially match
     * @returns List of tree nodes that partially match the given sequence
     */
    getPartiallyMatchedNodes(keySequence: string, currentKeytip: IKeytipTreeNode): IKeytipTreeNode[];
    /**
     * Get the non-persisted children of the give node
     * If no node is given, will use the 'currentKeytip'
     *
     * @param node - Node to get the children for
     * @returns List of node IDs that are the children of the node
     */
    getChildren(node?: IKeytipTreeNode): string[];
    /**
     * Gets all nodes from their IDs
     *
     * @param ids - List of keytip IDs
     * @returns Array of nodes that match the given IDs, can be empty
     */
    getNodes(ids: string[]): IKeytipTreeNode[];
    /**
     * Gets a single node from its ID
     *
     * @param id - ID of the node to get
     * @returns Node with the given ID, if found
     */
    getNode(id: string): IKeytipTreeNode | undefined;
    /**
     * Tests if the currentKeytip in this.keytipTree is the parent of 'keytipProps'
     *
     * @param keytipProps - Keytip to test the parent for
     * @returns T/F if the currentKeytip is this keytipProps' parent
     */
    isCurrentKeytipParent(keytipProps: IKeytipProps): boolean;
    private _getParentID;
    private _getFullSequence;
    private _getNodeSequence;
    private _createNode;
}

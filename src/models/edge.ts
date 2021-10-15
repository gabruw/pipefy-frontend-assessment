//#region Imports

import { FetchPipe } from './pipe';

//#endregion

interface Edge {
    cursor: string;
    node: FetchPipe;
}

export interface FetchEdge {
    edges: Array<Edge>;
}

export default Edge;

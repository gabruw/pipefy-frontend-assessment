//#region Imports

import { FetchEdge } from './edge';
import { PageInfo } from './page';

//#endregion

export interface FetchCards {
    cards: FetchEdge;
    pageInfo: PageInfo;
}

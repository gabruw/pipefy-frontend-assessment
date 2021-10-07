//#region Imports

import Pipe from './pipe';

//#endregion

interface Organization {
    pipes: Array<Pipe>;
}

export interface Organizations {
    organization: Organization;
}

export default Organization;

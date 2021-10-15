//#region Imports

import Snackbar from 'components/Snackbar';
import { FC } from 'react';
import { useSnackbarDispatch } from 'storages/system/hooks/snackbar';

//#endregion

const TSnackbar: FC = () => {
    const { setSnackbarDispatch } = useSnackbarDispatch();
    setSnackbarDispatch({ isVisible: true, text: 'Text test' });

    return <Snackbar />;
};

export default TSnackbar;

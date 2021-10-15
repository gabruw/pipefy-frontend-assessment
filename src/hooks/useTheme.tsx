//#region Imports

import { ptBR } from '@material-ui/core/locale';
import { createTheme } from '@material-ui/core/styles';
import { useMemo } from 'react';
import { useThemeSelector } from 'storages/system/hooks/theme';
import darkTheme from 'utils/themes/dark-theme';
import lightTheme from 'utils/themes/light-theme';

//#endregion

const useTheme = () => {
    const theme = useThemeSelector();
    const selectedTheme = useMemo(() => (theme.schema === 'light' ? lightTheme : darkTheme), [theme]);

    return createTheme(
        {
            palette: {
                type: theme.schema,
                ...selectedTheme
            },
            typography: {
                h1: {
                    fontSize: 28
                },
                h2: {
                    fontSize: 24
                },
                h3: {
                    fontSize: 20
                },
                h4: {
                    fontSize: 18
                },
                h5: {
                    fontSize: 16
                },
                h6: {
                    fontSize: 14
                },
                subtitle1: {
                    fontSize: 12
                },
                subtitle2: {
                    fontSize: 10
                }
            }
        },
        ptBR
    );
};

export default useTheme;

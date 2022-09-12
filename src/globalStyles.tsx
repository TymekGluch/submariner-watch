import { createGlobalStyle } from 'styled-components';
import { COLORS } from './consts/COLORS';

export const GlobalStyle = createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            list-style: none;
        }


        *,
        *::after,
        *::before {
            box-sizing: border-box;
        }


        body {
            overflow: hidden;
            background: ${COLORS.BACKGROUND_COLOR};
        }
`;

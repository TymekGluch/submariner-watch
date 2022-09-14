import { createGlobalStyle } from 'styled-components';
import { COLORS } from './consts/COLORS';

export const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Six+Caps&display=swap');

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

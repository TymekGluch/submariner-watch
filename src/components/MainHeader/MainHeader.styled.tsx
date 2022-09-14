import styled from 'styled-components';
import { COLORS } from '../../consts/COLORS';

export const MainHeaderStyled = styled.header`
  display: flex;
  justify-content: center;
`;

export const HeadingStyled = styled.h1`
  font-size: 1.2rem;
  padding: 0.5rem;
  color: ${COLORS.ITEM_COLOR};
`;

import styled, { css } from 'styled-components'; 
import { COLORS } from '../../../../consts/COLORS';
import { PointProps } from './PointsWrapper.data'; 

type PointWrapperStyledProps = {
    rotation: PointProps['rotation'];
}

export const PointWrapperStyled = styled.div<PointWrapperStyledProps>`
    height: 115px;
    width: fit-content;
    z-index: 1;
    position: absolute;
    transform-origin: center bottom;
    transform: rotate(${(props) => props.rotation});
    top: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

export const PointStyled = styled.div<Omit<PointProps, 'rotation'>>`
    margin-top: ${(props) => props.marginTop};
    width: ${(props) => props.width}; 
    height: ${(props) => props.height}; 
    border-left: ${(props) => props.borderLeft};
    border-right: ${(props) => props.borderRight};
    border-top: ${(props) => props.borderTop};
    background-color: ${(props) => props.backgroundColor};
    
    ${(props) => typeof props.content === 'string' && css`
        display: flex;
        justify-content: center;

        ::after {
            display: flex;
            margin-top: -0.2rem;
            content: '${props.content}';
            font-size: 25px;
            color: ${COLORS.CASE_COLOR};
            font-weight: 200;
            font-family: 'Six Caps', sans-serif;
        } 
    `}
`;
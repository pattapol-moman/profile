import styled , { keyframes }from 'styled-components';
import { fadeInLeft , fadeInRight , fadeIn} from 'react-animations';

export const fadeLeftAnimation = keyframes`${fadeInLeft}`;
export const fadeRightAnimation = keyframes`${fadeInRight}`;
export const fadeIneAnimation = keyframes`${fadeIn}`;

export const FadeDiv = styled.div`
  animation: 0.5s ${props => props.checkIndex === 1 ? fadeRightAnimation : fadeLeftAnimation};
`;

export const FadeInputDiv = styled.div`
  animation: 3s ${fadeIneAnimation};
`;


export const FadeInputOverDelayDiv = styled.div`
  animation: 3s ${fadeIneAnimation};
  margin-bottom: 20px;
`;

export const FadeInputOver2DelayDiv = styled.div`
  animation: 5s ${fadeIneAnimation};
  margin-bottom: 20px;
`;
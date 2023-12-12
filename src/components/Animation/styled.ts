import { styled, keyframes } from 'styled-components';
import IconGhost from '../Icons/IconGhost';
import IconShadow from '../Icons/IconShadow';

export const ContainerFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

const float = keyframes`
  50% {
    transform: translate(0, 5px);
  }
`;

const shrink = keyframes`
  0% {
    width: 92%;
    margin: 0 6%;
  }
  50% {
    width: 62%;
    margin: 0 19%;
  }
  100% {
    width: 92%;
    margin: 0 6%;
  }
`;

export const IconBlank = styled(IconGhost)`
  width: 30px;
  height: 30px;
  fill: #ced4da;
  flex-shrink: 0;
  cursor: pointer;
  animation: ${float} 3s ease-out infinite;
`;

export const IconShadowGhost = styled(IconShadow)`
  width: 30px;
  height: 30px;
  fill: rgba(155, 155, 155, 0.5);
  flex-shrink: 0;
  cursor: pointer;
  animation: ${shrink} 3s ease-out infinite;
  transform-origin: center center;
  ellipse {
    transform-origin: center center;
  }
`;

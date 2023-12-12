import { styled, keyframes } from 'styled-components';
import IconGhost from '../Icons/IconGhost';
import IconShadow from '../Icons/IconShadow';

export const Container = styled.div`
  width: 146px;
  height: 100px;
  border-radius: 5px;
  gap: 10px;
  background: linear-gradient(
    357deg,
    ${(props) => props.theme.colors.blk_theme_border_secondary} 0%,
    ${(props) => props.theme.colors.blk_theme_neutral_hover} 35%,
    ${(props) => props.theme.colors.blk_theme_elevation_3} 100%
  );

  position: absolute;
  left: 6rem;
  bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10;
`;

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
  fill: ${({ theme }) => theme.colors.blk_theme_text};
  flex-shrink: 0;
  cursor: pointer;
  animation: ${float} 3s ease-out infinite;
`;

export const IconShadowGhost = styled(IconShadow)`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) =>
    theme.colors.blk_theme_toggle_btn_background};
  flex-shrink: 0;
  cursor: pointer;
  animation: ${shrink} 3s ease-out infinite;
  transform-origin: center center;
  ellipse {
    transform-origin: center center;
  }
`;

export const Logo = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blk_theme_text};
`;

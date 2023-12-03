import { styled } from 'styled-components';
import IconGhost from '../Icons/IconGhost';

export const Container = styled.div`
  width: 146px;
  height: 100px;
  border-radius: 5px;
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

export const IconBlank = styled(IconGhost)`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.colors.blk_theme_text};
  flex-shrink: 0;
  cursor: pointer;
`;

export const Logo = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blk_theme_text};
`;

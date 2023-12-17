import { styled, css } from 'styled-components';
import IconUsers from '../Icons/IconUsers';
import IconMobileDevices from '../Icons/IconMobileDevices';
import IconDiagramProject from '../Icons/IconDiagramProject';

const IconStyled = css`
  fill: ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
`;

export const UsersIcon = styled(IconUsers)`
  ${IconStyled}
`;

export const OsIcon = styled(IconMobileDevices)`
  ${IconStyled}
  width: 0.9rem;
  height: 0.9rem;
`;

export const ProIcon = styled(IconDiagramProject)`
  ${IconStyled}
  width: 0.9rem;
  height: 0.9rem;
`;

export const Container = styled.div`
  color: white;
  position: sticky;
  top: 0;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: ${({ theme }) => theme.colors.blk_theme_background};
  border-bottom: solid 0.1rem
    ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
  z-index: 3;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: bold;
    gap: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(0.95);
      font-weight: bold;
      color: ${({ theme }) => theme.colors.blk_theme_btn_bg};

      & ${UsersIcon}, ${OsIcon}, ${ProIcon} {
        fill: ${({ theme }) => theme.colors.blk_theme_btn_bg};
      }
    }
  }
`;

import { styled } from 'styled-components';
import IconBxChevronDown from '../Icons/IconBxChevronDown';

export const Container = styled.div`
  padding: 0rem 6rem;
  background: ${({ theme }) => theme.colors.blk_theme_primary_light};
  border-top: solid 0.05rem
    ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
  height: 90px;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const ButtonContainer = styled.div`
  width: 90px;
  height: 35px;
`;

export const DropMenu = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blk_theme_text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blk_theme_btn_bg};
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IconArrow = styled(IconBxChevronDown)`
  width: 23px;
  height: 23px;
  flex-shrink: 0;
`;

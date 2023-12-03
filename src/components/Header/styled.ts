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

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: none;
  background: ${({ theme }) => theme.colors.blk_theme_elevation_3};
  min-width: 300px;
  min-height: 300px;
  position: absolute;
  top: 100%;
  border-radius: 5px;
  border: solid 0.05rem
    ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
  z-index: 1;
  box-shadow: 0 0 4px 4px
    ${({ theme }) => theme.colors.blk_theme_blue_light};
  ${DropdownWrapper}:hover & {
    display: block;
    transition: all 0.3s ease;
  }
  left: 0;
  right: auto;
`;

export const DropdownLink = styled.span`
  display: block;
  color: #000;
  text-decoration: none;
  padding: 17px;
  font-size: 18px;

  &:hover {
    background: #ddd;
  }
`;

export const IconArrow = styled(IconBxChevronDown)`
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  transition: transform 0.4s ease-in-out;

  ${DropdownWrapper}:hover & {
    transform: rotate(180deg);
  }
`;

import { css, styled } from 'styled-components';
import IconBxChevronDown from '../Icons/IconBxChevronDown';
import IconInfo from '../Icons/IconInfo';
import IconQuestionLg from '../Icons/IconQuestionLg';
import IconCog from '../Icons/IconCog';
import IconExtensionPuzzleSharp from '../Icons/IconExtensionPuzzleSharp';
import IconBxsDonateHeart from '../Icons/IconBxsDonateHeart';
import IconBriefcase from '../Icons/IconBriefcase';
import IconSecurity from '../Icons/IconSecurity';
import IconGit_pull_request from '../Icons/IconGit_pull_request';
import IconMoneyBillWave from '../Icons/IconMoneyBillWave';
import IconGlobe from '../Icons/IconGlobe';
import IconBagFill from '../Icons/iconBagFill';
import IconUsers from '../Icons/IconUsers';
import IconEmail from '../Icons/IconEmail';
import IconSale from '../Icons/IconSalet';
import IconNewspaper from '../Icons/IconNewspaper';

export const Container = styled.div`
  padding: 0rem 6rem;
  background: ${({ theme }) => theme.colors.blk_theme_primary_light};
  border-top: solid 0.05rem
    ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
  border-bottom: solid 0.05rem
    ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
  height: 90px;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const ButtonGlogalContainer = styled.div`
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
  min-height: auto;
  position: absolute;
  top: 100%;
  right: -40%;
  border-radius: 5px;
  border: solid 0.05rem
    ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
  z-index: 5;
  box-shadow: 0 0 4px 4px
    ${({ theme }) => theme.colors.blk_theme_blue_light};
  ${DropdownWrapper}:hover & {
    display: block;
    transition: all 0.3s ease;
  }
`;

export const Line = styled.div`
  width: 0.01rem;
  height: auto;
  background: ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
  margin: 0px 15px;
`;

export const DrowRowContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  padding: 10px;
  width: 100%;
`;

export const DropdownContentItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`;

export const DropTitle = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.blk_theme_text};
`;

export const DropdownItem = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.blk_theme_text};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  &:hover {
    color: ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
  }
`;

export const DrodCard = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
  border-radius: 0 0 5px 5px;
  gap: 10px;
  justify-content: space-between;
  padding: 10px 0;
  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-start;
    justify-content: center;

    h4 {
      font-size: 1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.blk_theme_text};
    }
    span {
      text-align: start;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.blk_theme_text};
    }
  }
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 120px;
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

const IconStyled = css`
  fill: ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
`;

export const InfoIcon = styled(IconInfo)`
  ${IconStyled}
  width: 0.9rem;
  height: 0.9rem;
`;

export const QuestIcon = styled(IconQuestionLg)`
  ${IconStyled}
`;

export const ConfIcon = styled(IconCog)`
  ${IconStyled}
  width: 1.2rem;
  height: 1.2rem;
`;

export const PuzzleIcon = styled(IconExtensionPuzzleSharp)`
  ${IconStyled}
  width: 0.9rem;
  height: 0.9rem;
`;

export const SuportIcon = styled(IconBxsDonateHeart)`
  ${IconStyled}
`;

export const BusinessIcon = styled(IconBriefcase)`
  ${IconStyled}
  width: 0.9rem;
  height: 0.9rem;
`;

export const UpdateIcon = styled(IconGit_pull_request)`
  ${IconStyled}
  color:  ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
`;

export const SecurityIcon = styled(IconSecurity)`
  ${IconStyled}
`;

export const MoneyIcon = styled(IconMoneyBillWave)`
  ${IconStyled}
  width: 0.9rem;
  height: 0.9rem;
`;

export const GlobeIcon = styled(IconGlobe)`
  ${IconStyled}
  width: 0.9rem;
  height: 0.9rem;
`;

export const BagIcon = styled(IconBagFill)`
  ${IconStyled}
  width: 0.9rem;
  height: 0.9rem;
`;

export const UserIcon = styled(IconUsers)`
  ${IconStyled}
`;

export const ContactIcon = styled(IconEmail)`
  ${IconStyled}
`;

export const PromotionIcon = styled(IconSale)`
  ${IconStyled}
`;

export const NewsIcon = styled(IconNewspaper)`
  ${IconStyled}
`;

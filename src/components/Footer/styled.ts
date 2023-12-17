import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: ${({ theme }) => theme.colors.blk_theme_border};
  display: flex;
  flex-direction: column;
`;

export const SectionFooter = styled.div`
  padding: 3rem 6rem;
  height: inherit;
  display: flex;
  flex-direction: row;
  gap: 10px;
  /* flex-wrap: wrap; */
  justify-content: center;
  width: 100%;
`;

export const SectionFooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  form {
    height: 32px;
    position: relative;
    display: flex;
    width: 250px;
    input {
      border: 0;
      max-width: 240px;

      background: ${({ theme }) =>
        theme.colors.blk_theme_toggle_opacity};
      height: 100%;
      border-radius: 6px;
      color: ${({ theme }) => theme.colors.blk_theme_text_code};
      font-size: 14px;
      padding: 0 85px 0 12px;
      outline: none;
    }
    button {
      background: ${({ theme }) =>
        theme.colors.blk_theme_background_hover};
      font-size: 12px;
      border-radius: 4px;
      position: absolute;
      padding: 2px 6px;
      right: 6%;
      top: 20%;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blk_theme_text_code};
      border: 1px solid
        ${({ theme }) => theme.colors.blk_theme_text_code};
      &:hover {
        background: ${({ theme }) =>
          theme.colors.blk_theme_border_secondary};
      }
    }
  }
`;

export const TextFooterLinks = styled.span`
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;

  text-align: justify;
  color: ${({ theme }) => theme.colors.blk_theme_btn_bg};
  &:hover {
    color: ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
  }
`;

export const TitleFooter = styled.div`
  width: 100%;
  font-size: 0.96rem;
  color: ${({ theme }) => theme.colors.blk_theme_text_code};
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Footer = styled.div`
  height: 40px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.blk_theme_primary_light};
  p {
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blk_theme_text};
  }
`;

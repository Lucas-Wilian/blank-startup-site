import { css, styled } from 'styled-components';

const ButtonStyle = css`
  font-size: 1.7rem;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blk_theme_btn_bg};
  font-weight: bold;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h2`
  font-weight: 400;
  font-size: 60px;
  color: ${({ theme }) => theme.colors.blk_theme_contrast};
`;

export const SectionButton = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonGlogalSection = styled.div``;

export const Button = styled.button`
  ${ButtonStyle}
  background: ${({ theme }) => theme.colors.blk_theme_btn_bg};
`;

export const ButtonUnderline = styled.button`
  ${ButtonStyle}
  background:transparent;
  color: ${({ theme }) => theme.colors.blk_theme_btn_bg};
`;

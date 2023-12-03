import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 14px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blk_theme_btn_bg};
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1rem;
    font-weight: bold;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
  }
`;

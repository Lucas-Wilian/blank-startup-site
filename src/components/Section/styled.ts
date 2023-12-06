import { styled } from 'styled-components';

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

export const SectionButtonGlogals = styled.div``;

export const ButtonGlogalSection = styled.div``;

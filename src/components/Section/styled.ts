import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0rem 6rem;
`;

export const Text = styled.h2`
  position: relative;
  z-index: 2;
  font-weight: 400;
  font-size: 60px;
  color: ${({ theme }) => theme.colors.blk_theme_contrast};
`;

export const SectionButton = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonGlogalSection = styled.div``;

import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.2;
  text-align: center;
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.blk_theme_contrast};
`;

export const SectionButton = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  height: 90px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const SectionFooter = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.blk_theme_btn_bg};
  align-items: center;
  justify-content: center;
  display: flex;
  p {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blk_theme_background};
  }
`;

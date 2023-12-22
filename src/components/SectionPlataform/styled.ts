import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 0rem 6rem;
  margin: 9rem 0;
  display: flex;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  gap: 30px;
  button {
    width: 270px;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.blk_theme_btn_bg};
`;

export const Content = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blk_theme_text};
  font-size: 2.8rem;
`;

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.blk_theme_text_code};
`;

export const ImageContainer = styled.div``;

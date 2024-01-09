import { css, styled } from 'styled-components';

const Collum = css`
  border-radius: 5px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.blk_theme_primary_light};
  border: 0.1rem solid
    ${({ theme }) => theme.colors.blk_theme_toggle_btn_background};
`;

export const Container = styled.div`
  width: 100%;
  height: 650px;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  margin: 2rem 0;
  color: ${({ theme }) =>
    theme.colors.blk_theme_toggle_btn_background};
`;

export const GridProjects = styled.div`
  width: 100%;
  columns: 5;
  column-gap: 15px;
  padding: 15px;
  /* height: 400px; */
`;

export const ContainerImg = styled.div`
  ${Collum}
  width: 100%;
  margin-bottom: 15px;
`;

export const CollumGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 370px;
`;

export const CollumGridSpan = styled.div`
  ${Collum}
  width: 370px;
  height: 100%;
`;

export const BackgroundContainer = styled.div`
  cursor: pointer;
  position: absolute;
  opacity: 0.5;
  bottom: 0%;
  height: 140px;
  width: 100%;
  z-index: 1;
  background-image: linear-gradient(
    to bottom,
    transparent,
    rgba(${({ theme }) => theme.colors.blk_theme_background_rgb}) 80%
  );
`;

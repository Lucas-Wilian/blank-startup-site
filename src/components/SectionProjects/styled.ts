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

export const CollumGrid = styled.div`
  ${Collum}
  height: 250px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
`;

export const GridProjects = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  ${CollumGrid}:nth-child(6) {
    height: 180px;
  }
`;

export const CollumGridSpan = styled.div`
  ${Collum}
  grid-row: span 2;
`;

export const GridCollum = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.blk_theme_toggle_opacity};
`;

export const BackgroundContainer = styled.div`
  cursor: pointer;
  position: absolute;
  opacity: 0.5;
  bottom: 10%;
  height: 140px;
  width: 100%;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(${({ theme }) => theme.colors.blk_theme_background_rgb}) 80%
  );
`;

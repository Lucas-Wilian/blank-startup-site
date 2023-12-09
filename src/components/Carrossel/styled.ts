import { css, styled } from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 100%;
  padding: 10px 0;
`;

export const Carrossel = styled.div`
  margin: auto;
  height: 100px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const CarrosselComponent = styled.div`
  width: 250px;
  height: 100px;
  background: white;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid
    ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
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

const Blur = css`
  width: 60px;
  height: 100px;
  position: absolute;
  top: 0;
  z-index: 5;
`;

export const Left = styled.div`
  ${Blur}
  left: 0%;
  border-radius: 0px 10px 10px 0px;
  background: linear-gradient(
    to right,
    rgba(${({ theme }) => theme.colors.blk_theme_background_rgb}, 1) 0,
    rgba(${({ theme }) => theme.colors.blk_theme_background_rgb}, 0)
      100%
  );
`;
export const Right = styled.div`
  ${Blur}
  right: 0%;
  border-radius: 10px 0px 0px 10px;
  background: linear-gradient(
    to left,
    rgba(${({ theme }) => theme.colors.blk_theme_background_rgb}, 1) 0,
    rgba(${({ theme }) => theme.colors.blk_theme_background_rgb}, 0)
      100%
  );
`;

import { styled } from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 100%;
  padding: 10px 0;
`;

// export const Carrossel = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

export const Title = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  margin: 2rem 0;

  color: ${({ theme }) =>
    theme.colors.blk_theme_toggle_btn_background};
`;

export const ContainerImg = styled.div`
  height: 100px;
  width: 250px;
  border-radius: 8px;
  background: #fff;
`;

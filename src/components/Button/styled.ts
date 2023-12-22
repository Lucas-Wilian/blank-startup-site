import { styled, css } from 'styled-components';

interface PropsGlobal {
  font_size?: string;
  background?: boolean;
  width?: string;
  height?: string;
}

export const Container = styled.button<PropsGlobal>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.font_size};
  background: ${(props) =>
    props.background
      ? ({ theme }) => theme.colors.blk_theme_btn_bg
      : 'transparent'};
  border-radius: 5px;
  border: ${(props) =>
    props.background ? 'transparent' : 'solid 1px #5c9fd8'};
  cursor: pointer;
  transition: background 0.3s ease;
  color: ${(props) => (props.background ? '#000' : ' #5c9fd8')};
  p {
    font-size: ${(props) => props.font_size};
    font-weight: bold;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.blk_theme_btn_hover_bg};
    color: ${(props) => (props.background ? null : '#000')};
  }
`;

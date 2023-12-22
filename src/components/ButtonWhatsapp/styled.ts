import { styled } from 'styled-components';
import IconBxlWhatsapp from '../Icons/IconBxlWhatsapp';

export const Container = styled.button`
  background: #29e0a9;
  width: 3.5rem;
  height: 3.5rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30%;
  border: none;
  position: fixed;
  right: 1.5%;
  top: 85%;
  z-index: 5;
  cursor: pointer;
  &:hover {
    border: solid 0.12rem
      ${({ theme }) => theme.colors.blk_theme_contrast};
  }
`;

export const WhatsappIcon = styled(IconBxlWhatsapp)`
  fill: ${({ theme }) => theme.colors.blk_theme_contrast};
  flex-shrink: 0;
  width: 2.8rem;
  height: 2.8rem;
`;

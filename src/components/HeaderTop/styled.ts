import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
  background: ${({ theme }) => theme.colors.blk_theme_border};
  padding: 0rem 6rem;
  span {
    font-size: 0.9rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blk_theme_text};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 250px;
  height: 100px;
  background: white;
`;

export const Title = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const IconContainer = styled.div`
  svg {
    flex-shrink: 0;
    width: 4.3rem;
    height: 4.3rem;
  }
`;

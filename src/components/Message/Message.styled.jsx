import styled from 'styled-components';

export const MessageWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.mp(2)};
`;

export const MessageText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin: 0;
`;

import styled from 'styled-components';

export const PageFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 0 0 auto;
  width: 100%;
  height: 140px;
  margin: ${p => p.theme.mp(3, 0, 0)};
  background-color: rgba(0, 17, 136, 0.15);
`;

import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 1.2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.4rem 3rem;
  background-color: ${props => props.theme.primary.default};

  ${props => props.size === 'sm' ? css`
      font-size: 12px;
      width: 85px;
      height: 30px;
    ` : ''}

  ${props => props.size === 'md' ? css`
      font-size: 13px;
      width: 90px;
      height: 30px;
    ` : ''}

  ${props => props.size === 'lg' ? css`
      font-size: 14px;
      width: 100px;
      height: 32px;
    ` : ''}

  &:hover {
    background-color: red;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.textColor || 'white'};
  font-weight: 500;
  letter-spacing: 0.025rem;
`
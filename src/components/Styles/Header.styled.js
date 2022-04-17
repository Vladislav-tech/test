import styled from 'styled-components';
import { Logo as RawLogo} from '../../assets';

export const HeaderBody = styled.header`
  display: none;

    @media (min-width: 1024px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;

      display: grid;
      grid-template-columns: 100px 500px 1fr;

      height: 9.2rem;
      padding: 2rem;

      z-index: 999;

      background-color: ${props => props.theme.white};  
}
  
`

export const Logo = styled(RawLogo)`
  fill: ${props => props.theme.primary.default};
`;
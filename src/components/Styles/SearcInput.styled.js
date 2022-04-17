import styled, { css } from 'styled-components';
import { Close } from '../../assets';
import { Search } from '../../assets';


const handeWrapperState = (isActive, variables) => {
  console.log(isActive, variables)
  if (isActive) {
    return css`
      outline: 2px solid ${variables.black};
      background-color: ${variables.white};
    `
  }
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.gray_scale_off.white};
  border-radius: 1rem;
  height: 4.4rem;
  padding: 1.2rem;
  min-width: 24.6rem;
  min-height: 5.6rem;
  transition: ${props => props.theme.duration};

  svg {
    cursor: pointer;
  };

  ${props => handeWrapperState(props.isActive, { 
    black: props.theme.gray_scale_off.black,
    white: props.theme.gray_scale_off.white,
  })}
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 85%;
`

export const Input = styled.input`
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 1rem;
  color: ${props => props.theme.gray_scale_off.black};
`

/**
 * Gets the current state and returns css code to show the state position
 * @param {String} state 
 * @returns css code
 */

const handleSpanState = (state) => {
  if (state === 'up') {
    return css`
      top: -1rem;
      font-size: 1.2rem;
    `
  } else {
    return css`
      top: 0rem;
    `
  }
};

export const Span = styled.span`
  position: absolute;
  left: 3rem;
  color: ${props => props.theme.gray_scale_off.label};
  pointer-events: none;
  transition: ${props => props.theme.duration};

  ${props => handleSpanState(props.state)}
`;

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseIcon = styled(Close)`
  margin-right: 1rem;
`

export const SearchIcon = styled(Search)`
  stroke: ${props => props.theme.gray_scale_off.label}
`
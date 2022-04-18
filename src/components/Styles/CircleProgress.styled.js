import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SVG = styled.svg`
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: ${props => props.stroke};
  stroke-width: ${props => props.strokeWidth + 'px'};
`;

export const CircleProgress = styled.circle`
  fill: none;

  stroke-width: ${props => props.strokeWidth + 'px'};

  stroke-dasharray: ${props => props.dashArray};
  stroke-dashoffset: ${props => props.dashOffset};

  stroke: ${props => props.stroke};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const Text = styled.text`
  font-weight: bold;
  font-size: 2rem;
`

export const Title = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: ${props => props.theme.gray_scale_off.label};
  margin-top: 0.5rem;
`

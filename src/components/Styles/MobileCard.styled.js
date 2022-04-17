import styled from 'styled-components';

export const Card = styled.div`
  width: 226px;
  min-height: 180px;
  border-radius: 1.2rem 1.2rem 0 0;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  flex-direction: column;

`

export const Image = styled.img`
  border-radius: 1.2rem;
  left: 0;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: 100%; 
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: ${props => props.theme.gray_scale_off.black};
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.gray_scale_off.label};
`;
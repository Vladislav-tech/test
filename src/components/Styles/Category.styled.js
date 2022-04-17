import styled from 'styled-components';

export const CategoryBody = styled.div`
  position: relative;
  display: inline-block;
`;

export const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);  
  display: inline-block;

  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.gray_scale_off.white};

  z-index: 999;
`;

export const OverlayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.41);
  cursor: pointer;
`;

export const Image = styled.img`
  border-radius: 100%;
`;
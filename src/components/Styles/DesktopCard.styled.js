import styled from 'styled-components';
import { Heart } from '../../assets';

export const Card = styled.div`
  position: relative;
  display: inline-block;
  width: 45rem;
  min-height: 32rem;

  border-radius: 3.2rem;
  border: 1px solid ${props => props.theme.dark_gray};
`;

export const CardBody = styled.div`
  padding: 0 2rem 2rem;
`

export const Tags = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, max-content) repeat(auto-fill, 100px);
  gap: 1rem;
`
export const Paragraph = styled.p`
  margin-top: 2rem;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${props => props.theme.gray_scale_off.label};
`

export const Title = styled.h3`
  margin: 1rem 0 1.6rem 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${props => props.theme.gray_scale_off.black};
`

export const Image = styled.img`
  border-radius: 3.2rem 3.2rem 0 0;
  width: 100%;
  height: 22.9rem;

  object-fit: cover;
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  height: 4.4rem;
  width: 4.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 100%;
  background-color: ${props => props.theme.primary.default};
  cursor: pointer;
`;

export const LikeIcon = styled(Heart)`
  stroke: ${props => props.theme.white};
  fill: ${props => props.theme.white};
`;

import styled, { css } from 'styled-components';
import { Search, Heart, Settings, AlignRight } from '../../assets';

export const NavBody = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 5.8rem;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 12px 12px 0px 0px;

  background-color: ${props => props.theme.white};

  @media (min-width: 1024px) {
    top: 0;
    left: 0;
    height: 100%;
    width: 9.7rem;
    border-radius: 0px;
  }
`;

// const getStroke = (active, colors) => active ? colors.activeColor : colors.notActiveColor;

export const SearchIcon = styled(Search)`
  stroke: ${props => {
    if (props.$active) {
      return props.theme.primary.default;
    } else {
      return props.theme.gray_scale_off.label;
    }
  }};

  @media (min-width: 1024px) {
    width: 3.2rem;
    height: 3.2rem;
  }

`;

export const HeartIcon = styled(Heart)`
  stroke: ${props => {
    if (props.$active) {
      return props.theme.primary.default;
    } else {
      return props.theme.gray_scale_off.label;
    }
  }};

  @media (min-width: 1024px) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const SettingIcon = styled(Settings)`
  stroke: ${props => {
    if (props.$active) {
      return props.theme.primary.default;
    } else {
      return props.theme.gray_scale_off.label;
    }
  }};
  @media (min-width: 1024px) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const AlignRightIcon = styled(AlignRight)`
  stroke: ${props => {
    if (props.$active) {
      return props.theme.primary.default;
    } else {
      return props.theme.gray_scale_off.label;
    }
  }};

  @media (min-width: 1024px) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 5.8rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
  height: 4.2rem;
  width: 4.2rem;
  margin: auto;
  transition: 0.4s ease;

  ${props => props.active ? css`
    background-color: ${props.theme.primary.bg};
  ` : ''}

  @media (min-width: 1024px) {
    width: 7.2rem;
    height: 7.2rem;
  }`;
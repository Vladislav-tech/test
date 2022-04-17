import React from 'react';
import { HeaderBody, Logo } from './Styles/Header.styled';
import { SearchInput } from './index'


const Header = () => {
  return (
    <HeaderBody>
      <Logo/>
      <SearchInput/>
    </HeaderBody>
  )
};

export default Header;
import React, { useState } from 'react';
import { NavBody, NavList, NavItem, SearchIcon, HeartIcon, SettingIcon, AlignRightIcon } from './Styles/Navigation.styled';

const icons = [<SearchIcon/>, <HeartIcon/>, <SettingIcon/>, <AlignRightIcon/>];

console.log(SearchIcon)

const Navigation = () => {

  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index) => {
    setActiveItem(index)
  }

  return (
    <NavBody>
      <NavList>
        {icons.map((item, index) => {
          return (
            <NavItem key={index} onClick={() => handleClick(index)} active={ activeItem === index }>
              { React.cloneElement(item, { $active: activeItem === index }) }
            </NavItem>
          )
        })}
      </NavList>
    </NavBody>
  );
};

export default Navigation;
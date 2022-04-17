import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../assets/Search.svg';
import { ReactComponent as OptionsIcon } from '../assets/Configure.svg';

import {Wrapper, InputWrapper, Input, Span, SvgWrapper, CloseIcon } from './Styles/SearcInput.styled';

function SearchInput({ placeholder }) {
  const [text, setText] = useState('');
  const [isActive, setActive] = useState(false);

  const handleClick = (event) => {
    setText(event.target.value);
  };

  const handleFocus = () => setActive(true);
  const handleBlur = () => setActive(false);

  return (
    <Wrapper isActive={isActive}>
      <InputWrapper>
        <SearchIcon/>
        <Input
          value={text}
          onChange={handleClick} 
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        <Span state={text.length ? 'up' : 'down'}>{placeholder}</Span>
      </InputWrapper>
      <SvgWrapper>
        {text.length ?
        <Tippy content="delete">
            <CloseIcon onClick={() => setText('')} /> 
        </Tippy>
          : ''}
        <Tippy content="options">
          <OptionsIcon />
        </Tippy>
      </SvgWrapper>
    </Wrapper>
  );
}

SearchInput.defaultProps = {
  placeholder: 'Search',
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchInput;

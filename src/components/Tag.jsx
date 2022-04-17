import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Text} from './Styles/Tag.styles';

const Tag = ({ children, size, bgColor, textColor }) => {
  return (
    <Wrapper bgColor={bgColor} size={size}>
      <Text textColo={textColor}>{children}</Text>
    </Wrapper>
  );
};


Tag.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

Tag.defaultProps = {
  children: '',
  size: 'sm',
  textColor: '#000',
  bgColor: '#fff'
}

export default Tag;
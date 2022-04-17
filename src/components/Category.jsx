import React from 'react';
import PropTypes from 'prop-types';

import { CategoryBody, Image, Title, Overlay, OverlayWrapper } from './Styles/Category.styled';

const Category = ({ image, title, size }) => {
  return (
    <CategoryBody size={size}>
      <Title>{title}</Title>
      <OverlayWrapper>
        <Overlay/>
        <Image src={image} title={title}/>
      </OverlayWrapper>
    </CategoryBody>
  );
};

Category.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
};

Category.defaultProps = {
  image: '',
  title: '',
  size: 'sm',
};

export default Category;
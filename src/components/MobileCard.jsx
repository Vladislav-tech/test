import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Title, Text } from './Styles/MobileCard.styled';

const MobileCard = ({ image, title, summary }) => {
  return (
    <Card>
      <Image src={image} title={title}/>
      <Title>{title}</Title>
      <Text>{summary}</Text>
    </Card>
  );
};

MobileCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
};

MobileCard.defaultProps = {
  image: '',
  title: '',
  summary: ''
};

export default MobileCard;
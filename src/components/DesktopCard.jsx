import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, LikeButton, LikeIcon,Title, CardBody, Tags, Paragraph } from './Styles/DesktopCard.styled';
import { Tag } from './index'

const DesktopCard = ({ image, title, summary, tags}) => {
  return (
    <Card>
      <Image src={image} title={title}/>
      <LikeButton>
        <LikeIcon/>
      </LikeButton>
      <CardBody>
        <Title>{title}</Title>
        <Tags>
          {tags.map((item, index) => {
            return <Tag key={`${index}_${item}`} size="lg">{item}</Tag>
          })}
        </Tags>

        <Paragraph>{summary}</Paragraph>
      </CardBody>
    </Card>
  );
};

DesktopCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

DesktopCard.defaultProps = {
  image: '',
  title: '',
  summary: '',
  tags: [],
}

export default DesktopCard;
import React from 'react';
import PropTypes from 'prop-types';
import { 
  Wrapper, 
  SVG, 
  CircleBackground, 
  CircleProgress,
  Text,
  Title
  } from './Styles/CircleProgress.styled';


const CircleProgressBar = ({ sqSize, strokeWidth, percentage, title, primaryColor, secondaryColor }) => {

  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * percentage / 100;

  console.log(dashOffset)

  return (
    <Wrapper>
      <SVG 
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}
      >
        <CircleBackground
          sqSize={sqSize}
          radius={radius}
          strokeWidth={strokeWidth}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          stroke={secondaryColor}
        />
        <CircleProgress
          sqSize={sqSize}
          radius={radius}
          strokeWidth={strokeWidth}
          dashArray={dashArray}
          dashOffset={dashOffset}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          stroke={primaryColor}
        />
        <Text x="50%" y="50%" dy=".3em" textAnchor="middle">{percentage}%</Text>
      </SVG>
    <Title>{title}</Title>
    </Wrapper>
  )
};

CircleProgressBar.propTypes = {
  title: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  sqSize: PropTypes.number,
  strokeWidth: PropTypes.number,
  percentage: function(prop, propName) {
    if (isNaN(Number(prop[propName]))) {
      return new Error('It must be number')
    }
    if (prop[propName] > 100 || prop[propName] < 0) {
      return new Error(`Ivalid prop ${propName}. It must be number from 0 to 100`)
    }  
  },
}

// CircleProgress.propTypes = {
//   title: PropTypes.string,
//   value: function(prop, propName) {
//     if (isNaN(Number(prop[propName]))) {
//       return new Error('It must be number')
//     }
//     if (prop[propName] > 100 || prop[propName] < 0) {
//       return new Error(`Ivalid prop ${propName}. It must be number from 0 to 100`)
//     }
//   },
//   mainColor: PropTypes.string,
//   secondaryColor: PropTypes.string,
// }

CircleProgressBar.defaultProps = {
  sqSize: 100,
  percentage: 50,
  strokeWidth: 5
};

export default CircleProgressBar;
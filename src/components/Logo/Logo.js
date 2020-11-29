import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const animation = keyframes`
  0% {
    border-color: #fff;
    color: #fff;
  }
  12% {
    border-color: #f1f1e7;
    color: #f1f1e7;
  }
  24% {
    border-color: #cc9;
    color: #cc9;
  }
  36% {
    border-color: #666;
    color: #666;
  }
  48% {
    border-color: #555;
    color: #555;
  }
  60% {
    border-color: #3c4831;
    color: #3c4831;
  }
  72% {
    border-color: #7f7f56;
    color: #7f7f56;
  }
  86% {
    border-color: #90ce70;
    color: #90ce70;
  }
  100% {
    border-color: #484832;
    color: #484832;
  }
`;

const LogoText = styled.h1(
  {
    cursor: 'default',
    fontFamily: 'devil',
    textDecoration: 'none',
    margin: '7px 5px',
    letterSpacing: -4,
    fontSize: 42,
    fontWeight: 400,
  },
  (props) => ({ ...props.textStyle }),
);

const LogoCircle = styled.div(
  {
    cursor: 'default',
    height: 50,
    width: 50,
    borderRadius: '50%',
    border: '2px solid #555',
    background: 'transparent',
    margin: '24px 0',
  },
  (props) =>
    props.animationTiming && {
      '&:hover': {
        animation: `${animation} ${props.animationTiming} linear infinite alternate`,
        '& > h1': {
          animation: `${animation} ${props.animationTiming} linear infinite alternate`,
        },
      },
    },
);

const Logo = ({ style, textStyle, animationTiming }) => {
  return (
    <LogoCircle style={style} animationTiming={animationTiming}>
      <LogoText style={textStyle}>KF</LogoText>
    </LogoCircle>
  );
};

Logo.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  animationTiming: PropTypes.string,
};

Logo.defaultProps = {
  animationTiming: '2000ms',
  style: {},
  textStyle: {},
};

export default Logo;

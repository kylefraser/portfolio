import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import useWindowDimensions from '../../utils/getWindowSize';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

const breakpoints = [480, 768, 1024];
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Container = styled.div(
  mq({
    display: ['none', 'none', 'block'],
  }),
);

const Clouds = () => {
  const { width } = useWindowDimensions();
  const [resetOrbit, setResetOrbit] = useState(false);
  const [reset, setReset] = useState(false);

  const cloudAnimOne = useSpring({
    from: { transform: `translate3d(-200px, 0 , 0)` },
    to: { transform: `translate3d(${width}px, 0, 0)` },
    onRest: () => setResetOrbit((state) => !state),
    reset: resetOrbit,
    delay: 500,
    config: {
      duration: 200000,
    },
  });

  const cloudAnimTwo = useSpring({
    from: { transform: `translate3d(-${width * 2}px, 0, 0)` },
    to: { transform: `translate3d(${width * 2}px, 0, 0)` },
    onRest: () => setReset((s) => !s),
    reset: reset,
    config: {
      duration: 170000,
    },
  });

  const cloudAnimThree = useSpring({
    from: { transform: `translate3d(-${width + 600}px, 0 , 0)` },
    to: { transform: `translate3d(${width}px, 0, 0)` },
    onRest: () => setResetOrbit((state) => !state),
    reset: resetOrbit,
    delay: 3000,
    config: {
      duration: 200000,
    },
  });

  const data = useStaticQuery(graphql`
    query {
      clouds: file(relativePath: { eq: "clouds.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 30) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      clouds1: file(relativePath: { eq: "clouds1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 30) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <animated.div
        style={{
          ...cloudAnimOne,
          position: 'absolute',
          zIndex: 2,
          width: '100%',
          height: '100%',
          top: '10%',
          opacity: 0.15,
        }}
      >
        <Image fluid={data.clouds1.childImageSharp.fluid} />
      </animated.div>
      <animated.div
        style={{
          ...cloudAnimThree,
          position: 'absolute',
          zIndex: 2,
          width: '100%',
          height: '100%',
          top: '10%',
          opacity: 0.15,
        }}
      >
        <Image fluid={data.clouds1.childImageSharp.fluid} />
      </animated.div>
      <animated.div
        style={{
          ...cloudAnimTwo,
          position: 'absolute',
          zIndex: 2,
          width: '100%',
          height: '100%',
          top: '10%',
          opacity: 0.15,
        }}
      >
        <Image fluid={data.clouds.childImageSharp.fluid} />
      </animated.div>
    </Container>
  );
};

export default Clouds;

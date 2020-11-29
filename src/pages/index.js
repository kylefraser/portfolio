import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Clouds, Logo } from '../components';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import '../css/fonts.css';
import { keyframes } from '@emotion/core';

const enterAnim = keyframes`
  0% {
    color: #cc9;
  }
  30% {
    color: #3c4831;
  }
  60% {
    color: #7f7f56;
  }
  90% {
    color: #484832;
  }
`;

const EnterText = styled.p({
  color: '#7f7f56',
  fontSize: 20,
  fontFamily: "'Roboto Condensed', sans-serif",
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 2,
  opacity: 0.7,
  animation: `${enterAnim} 10000ms linear infinite alternate`,
  textAlign: 'center',
  marginTop: 90,
});

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      forest: file(relativePath: { eq: "forest.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#2b331b',
        position: 'relative',
      }}
    >
      <SEO />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
          display: `['none', 'block']`,
        }}
      >
        <Image
          fluid={data.forest.childImageSharp.fluid}
          style={{
            display: 'block',
            margin: 0,
            width: '100vw',
            height: '100vh',
            opacity: 0.5,
            position: 'absolute',
            zIndex: 1,
          }}
        />
        <Clouds />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            cursor: 'pointer',
            zIndex: 3,
          }}
        >
          <Link
            to="/home"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              textDecoration: 'none',
            }}
          >
            <Logo
              style={{
                cursor: 'pointer',
                borderColor: '#ffffff',
                overflow: 'hidden',
                transform: 'scale(5)',
                zIndex: 3,
              }}
              textStyle={{
                color: '#ffffff',
                cursor: 'pointer',
              }}
              animationTiming="4000ms"
            />
            <EnterText>Click to ENTER</EnterText>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import '../css/layout.css';
import '../css/fonts.css';
import { Logo } from './Logo';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import facepaint from 'facepaint';
// import AnimateHeight from 'react-animate-height';

const breakpoints = [480, 768];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const Container = styled.div({
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  webkitFontSmoothing: 'antialiased',
  maxWidth: 1100,
});

const Content = styled.div(
  {
    color: '#555',
    maxWidth: 720,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  mq({
    paddingLeft: ['20px', '40px'],
    paddingRight: ['20px', '40px'],
  }),
);

const Name = styled.h2({
  fontFamily: "'Roboto Condensed', sans-serif",
  marginTop: 0,
  marginBottom: 4,
  letterSpacing: 1,
});

const Description = styled.h3({
  fontFamily: "'Roboto Condensed', sans-serif",
  fontSize: '1rem',
  marginTop: 0,
  letterSpacing: 1,
});

const SubHeader = styled.h4({ fontFamily: "'Roboto Condensed', sans-serif" });

const Text = styled.p({
  fontFamily: "'PT Serif', serif",
  fontWeight: 400,
  lineHeight: 1.5,
});

const List = styled.ul({ listStyle: 'none', padding: 0, margin: '0 0 0 12px' });

const Divider = styled.hr({ backgroundColor: '#90ce70', height: 1 });

const LinkItem = styled.a({
  boxShadow: '0 1px 0 0 currentColor',
  color: '#478527',
  textDecoration: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
});

const ListItem = styled.li({
  fontFamily: "'PT Serif', serif",
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: 32,
  '&:before': {
    content: '"• "',
    color: '#90ce70',
    marginLeft: -12,
  },
});

const MinimalListItem = styled.li({
  fontFamily: "'PT Serif', serif",
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: 12,
  '&:before': {
    content: '"• "',
    color: '#90ce70',
    marginLeft: -12,
  },
  '&:last-of-type': {
    marginBottom: 32,
  },
});

const ListText = styled.p({ fontSize: 14, marginTop: 12, paddingRight: 32 });

// const Span = styled.span({color: '#90ce70', fontWeight: 700})

// const ProcessContainer = styled(AnimateHeight)(
//   {
//     background: '#3c442e',
//     position: 'relative',
//   },
//   (props) => ({
//     left: `calc(-${props.offset + 40}px)`,
//   }),
//   mq({
//     width: ['110vw', '100vw'],
//   }),
// );

// const ProcessInnerContainer = styled.div(
//   {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     maxWidth: 1100,
//     padding: 40,
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   (props) => ({
//     left: props.offset,
//   }),
// );

// const OrdnanceLogo = styled.p({
//   fontFamily: "'Tomorrow', sans-serif",
//   fontSize: 40,
//   textTransform: 'uppercase',
//   color: '#ffffff',
//   '& > span': {
//     color: '#A6CF70',
//     fontSize: 35,
//     position: 'relative',
//     top: -3,
//     left: 6,
//   },
// });

// const Button = styled.button({
//   background: '#90ce70',
//   color: '#ffffff',
//   cursor: 'pointer',
//   fontSize: 13,
//   fontWeight: 700,
//   borderRadius: 4,
//   border: 0,
//   boxShadow: 0,
//   padding: '4px 16px',
//   transition: '500ms',
//   '&:hover': {
//     background: '#83bc66',
//   },
// });

const Layout = () => {
  // const [show, setShow] = useState(false);
  const [offset, setOffset] = useState();

  let wrapperRef = useRef();

  useEffect(() => {
    setOffset(wrapperRef.current.offsetLeft);

    function handleResize() {
      setOffset(wrapperRef.current.offsetLeft);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [offset]);

  const data = useStaticQuery(graphql`
    query {
      topbar: file(relativePath: { eq: "topbar.png" }) {
        childImageSharp {
          fixed(height: 10) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ordnanceImages: allFile(
        filter: { relativeDirectory: { eq: "ordnance" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <Image
        fixed={data.topbar.childImageSharp.fixed}
        style={{
          display: 'block',
          margin: 0,
          width: '100%',
        }}
      />
      <Container>
        <Content id="wrapper" ref={wrapperRef}>
          <Logo />
          <Name>Kyle Fraser</Name>
          <Description as="h2">Frontend Developer</Description>
          <Divider />
          <SubHeader>Mission</SubHeader>
          <Text>
            To leverage and continually expand my skillset in an effective and
            efficient manner as a member of a proficient team with strong
            culture towards providing a well thought out and innovative product.
          </Text>
          <SubHeader>About</SubHeader>
          <Text>
            Raised in Maine, being surrounded by nature has given me a strong
            respect for the beauty of the outdoors. I try to bring these
            parallels into everyday life, especially when thinking of design.
          </Text>
          <Text>
            My first experience with computers was at 4 years old. I would help
            my mother load 8" floppy disks with DOS onto the elementary school
            computers, where she volunteered. The first PC I built was at 12
            years old with my friends father's help, an IBM employee, who was
            able to provide us with a LAN gaming paradise. It was a 900mhz
            powerhouse, before the days of "gigahertz", named GOD - the Guardian
            of Data. A self-taught coder, I quickly gained an affection for
            creating and hacking during the days of 28.8kbps dial up.{' '}
            <span role="img" aria-label="Pirate Flag">
              🏴‍☠️
            </span>
          </Text>
          <Text>
            An ardent believer in the balance of mind, body, and spirit, along
            with a positive mental attitude, I do my best to emanate the common
            good. Constantly evolving with each new introduction, I value the
            insights gained from all people.
          </Text>
          <Text>Always Forward.</Text>
          <SubHeader>Experience</SubHeader>
          <List>
            <ListItem>
              <LinkItem
                href="https://starburst.io"
                target="_blank"
                rel="noopener"
              >
                Starburst Data
              </LinkItem>{' '}
              - Web Developer
            </ListItem>
            <ListItem>
              <LinkItem
                href="https://robinpowered.com"
                target="_blank"
                rel="noopener"
              >
                Robin Powered
              </LinkItem>{' '}
              - Frontend Designer
              <ListText>
                Planning, development, and management of graphics and user
                interface design projects. Provide support for products
                developed for both internal use and for customers.
              </ListText>
            </ListItem>
            <ListItem>
              <LinkItem
                href="https://hellobonfire.com"
                target="_blank"
                rel="noopener"
              >
                Bonfire Studios
              </LinkItem>{' '}
              - Frontend Web Developer
              <ListText>
                Cut up and integrate designs into beautiful responsive code.
                Proficiency implementing user interfaces (and UI elements), with
                a keen eye on the larger experience. Collaborate seamlessly with
                the Bonfire team towards rapid iteration and integration given
                creative direction.
              </ListText>
            </ListItem>
          </List>
          <SubHeader>Education</SubHeader>
          <List>
            <ListItem>
              Full Stack Open - University of Helsinki MOOC, Online 2020
              <ListText>
                Full Stack Open is a deep dive into modern web development. The
                course is offered by the University of Helsinki's Department of
                Computer Science through their Massive Open Online Course (MOOC)
                program. The main focus is on building single page applications
                with ReactJS that use REST APIs built with Node.js.
              </ListText>
            </ListItem>
            <ListItem>
              Web Design & Development - Startup Institute, Boston 2017
              <ListText>
                UI/UX design, user research, rapid ideation, data visualization,
                front-end development, responsive design, information
                architecture, product management, wireframing and rapid
                prototyping, typography.
              </ListText>
            </ListItem>
            <ListItem>
              Bachelor of Science in Business Administration - Finance &
              Management, University of Maine 2010
            </ListItem>
          </List>
          <SubHeader>Recreation</SubHeader>
          <List>
            <MinimalListItem>Outdoor everything enthusiast</MinimalListItem>
            <MinimalListItem>Fish more, worry less</MinimalListItem>
            <MinimalListItem>Salt water paddler</MinimalListItem>
            <MinimalListItem>Mountains and plains hiker</MinimalListItem>
            <MinimalListItem>Toyota Tacoma offroad driver</MinimalListItem>
            <MinimalListItem>Rock 'n Roll guitar player</MinimalListItem>
          </List>
          <SubHeader>Contact</SubHeader>
          <Text>
            I can be reached by e-mail at
            <LinkItem
              href="mailto:FraserKC@gmail.com"
              style={{
                paddingLeft: '0.5ch',
              }}
            >
              FraserKC@gmail.com
            </LinkItem>
          </Text>
          <footer>
            <Text>
              Made in
              <span
                role="img"
                aria-label="America"
                style={{
                  padding: '0 0.5ch',
                }}
              >
                🇺🇸
              </span>
              — © {new Date().getFullYear()}, Kyle Fraser
            </Text>
          </footer>
        </Content>
      </Container>
    </>
  );
};

export default Layout;

/** @jsx jsx */
import { Box, Container, Flex, Heading, jsx, Link, Text } from 'theme-ui'
import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { TypeAnimation } from '../components/TypeAnimation'
import DoubleArrows from '../assets/double-down-arrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faXingSquare } from '@fortawesome/free-brands-svg-icons'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'

const IndexPage = () => {
  const imgData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "markus-sterner-circle.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  useEffect(() => scrollSnapPolyfill(), [])

  return (
    <Layout>
      <SEO title="Home" />
      <div
        sx={{
          bg: 'black',
          maxHeight: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
        }}
      >
        <Container
          sx={{
            variant: 'container.inverted',
            height: '100vh',
            scrollSnapAlign: 'start',
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              flexDirection: 'column',
              paddingTop: '30vh',
            }}
          >
            <Heading as="h1">Hi,</Heading>
            <Heading as="h1">I am Markus and&nbsp;</Heading>
            <Heading as="h1" sx={{ textAlign: 'center' }}>
              <TypeAnimation />
            </Heading>
            <DoubleArrows
              id="double-down-arrows"
              sx={{
                height: '3rem',
                marginTop: '30vh',
              }}
            />
          </Flex>
        </Container>
        <Container
          sx={{
            variant: 'container.inverted',
            height: '100vh',
            scrollSnapAlign: 'start',
          }}
        >
          <Flex
            sx={{
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Flex
              sx={{
                alignContent: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                height: '90%',
                flexWrap: 'wrap-reverse',
              }}
            >
              <Box sx={{ marginX: 4 }}>
                <Heading as="h1">Get in touch</Heading>
                <Heading as="h2" sx={{ marginTop: 4, fontSize: '1.4rem' }}>
                  Markus Sterner
                </Heading>

                <Text sx={{ marginBottom: 3 }}>Software Developer</Text>
                <Link href="mailto:info@markus-sterner.de">
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/markus-sterner-software-engineer"
                  target="_blank"
                  sx={{ marginLeft: 2 }}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                  href="https://www.xing.com/profile/Markus_Sterner2/cv"
                  target="_blank"
                  sx={{ marginLeft: 2 }}
                >
                  <FontAwesomeIcon icon={faXingSquare} size="2x" />
                </Link>
              </Box>
              <Box sx={{ height: 200, width: 200, marginX: 4 }} mb={5}>
                <Img
                  fixed={imgData.file.childImageSharp.fixed}
                  alt="Markus Sterner Picture"
                />
              </Box>
            </Flex>
            <footer sx={{ paddingBottom: 2 }}>
              <Link href="/imprint" sx={{ paddingLeft: 2 }}>
                Imprint
              </Link>
            </footer>
          </Flex>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage

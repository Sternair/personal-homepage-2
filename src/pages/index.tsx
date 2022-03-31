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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('css-scroll-snap-polyfill')()
    }
  }, [])

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
            <Heading as="h1" sx={{ textAlign: 'center' }}>
              Hi,
              <br />I am Markus and
              <br />
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
              alignContent: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              height: '100%',
              flexWrap: 'wrap-reverse',
            }}
          >
            <Box sx={{ marginX: 4 }}>
              <Heading
                as="h2"
                sx={{ fontSize: '2em', textAlign: 'center' }}
                mb={4}
              >
                About me
              </Heading>
              <Text
                as="p"
                sx={{
                  maxWidth: 500,
                  maxHeight: 'calc(100vh - 100px)',
                  overflow: 'scroll',
                }}
              >
                Having worked many different jobs in my career, I have finally
                found my passion in 2014. During my studies of media informatics
                at LMU Munich, I wrote my first lines of computer code that
                sparked my curiosity, joy and enthusiasm for software
                development. Like a good code base, I tried to constantly
                improve myself ever since. After working on different projects
                with different people, I learned much more than new technical
                skills. I am now able to compare various approaches around
                developing and operating software, but also around product and
                people management. In addition to the practical experience, I
                constantly gather theoretical knowledge through books, blogs,
                newsletters, meetups and workshops.
                <br />
                <br />
                In April 2021 I co-founded{' '}
                <Link href="https://nomizz.com" target="_blank">
                  nomizz
                </Link>{' '}
                and made my dream come true of becoming an entrepreneur. During
                one year I could learn countless invaluable lessons of operating
                a company and building a SaaS application from the ground up as
                a CTO, product manager and engineer. In March 2022 I left
                nomizz, while my co-founder continues working on the product.
                <br />
                <br />
                Now I am looking for new opportunities to support other
                companies and software engineering teams as a freelancer. My
                biggest strength is serving as the link between the business and
                engineering, while coding on the front- and backend myself. If
                you think I can be of any help for you and your team, feel free
                to reach out to me any time!
                <br />
                <br />
                By the way: I wrote a little game just for fun, available both
                on&nbsp;
                <Link
                  href="https://play.google.com/store/apps/details?id=de.markussterner.color_quiz"
                  target="_blank"
                >
                  Google&nbsp;Play
                </Link>{' '}
                and the{' '}
                <Link
                  href="https://apps.apple.com/us/app/id1504745363"
                  target="_blank"
                >
                  App&nbsp;Store
                </Link>
                &nbsp;:)
              </Text>
            </Box>
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
                <Heading as="h2" sx={{ fontSize: '2em' }}>
                  Get in touch
                </Heading>
                <Heading as="h3" sx={{ marginTop: 4, fontSize: '1.4rem' }}>
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
              <Box
                sx={{
                  height: 200,
                  width: 200,
                  marginX: 4,
                }}
                mb={5}
              >
                <Img
                  fixed={imgData.file.childImageSharp.fixed}
                  alt="Markus Sterner Picture"
                  loading="eager"
                />
              </Box>
            </Flex>
            <footer sx={{ paddingBottom: 2 }}>
              <Link
                href="/imprint"
                sx={{
                  paddingLeft: 2,
                  color: '#707070',
                  textDecoration: 'none',
                }}
              >
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

import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  //SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
//import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
//import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub,IoLogoFacebook } from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        大家好, 我是在德国柏林工作的一条咸鱼
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            托尼 卡尔纳斯
          </Heading>
          <p>一名足球教练和个人投资者</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/karnas.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          概述
        </Heading>
        <Paragraph>
         我是在德国工作的一条咸鱼，没事就去踢足球和玩玩FM。小时候就幻想自己在球场上大杀四方
         在球赛中成为救世主。可惜的是理想很美好现实却很骨感。没办法既然成为不了球员只能成为
         教练了，目前在柏林的一家小俱乐部当教练（当然不是主教练）。现在还在筹划着开一家足球学院养家糊口
         
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        足球
        </Heading>
        <BioSection>
          <BioYear>主队</BioYear>
          皇马
        </BioSection>
        <BioSection>
          <BioYear>欣赏的球员
          </BioYear>
          皇马的所有球员
        </BioSection>
        <BioSection>
          <BioYear>最喜欢的球员</BioYear>
          魔笛和阿宽
        </BioSection>
 </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          爱好 ♥
        </Heading>
        <Paragraph>
          艺术, 音乐,{' '}
          
            踢足球
          
          , 旅行,{' '}
            摄像
          
          ,玩FM
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/blankzsh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @blankzsh
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/korestub" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @korestub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/profile.php?id=100089808147159" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @toni.karnas
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/toni.karnas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @toni.karnas
              </Button>
            </Link>
          </ListItem>
        </List>


        <Heading as="h3" variant="section-title">
          邮箱
        </Heading>
        <p>
        如果你有问题想找我请点击下面的按钮
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:korestub@gmail.com"
            scroll={false}
            //leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            向我发邮件
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

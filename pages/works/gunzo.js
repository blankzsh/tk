import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Gunzo Face">
    <Container>
      <Title>
        Gunzo 头像制作器 <Badge>2023-</Badge>
      </Title>
      <P>
      我翻译的fm头像制作器Gunzo Face
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>网站</Meta>
          <Link href="https://gz.ftos.top/">
            https://gz.ftos.top/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>下载应用</Meta>
          <Link href="https://www.playgm.cn/forum.php?mod=viewthread&tid=959149&extra=page%3D1%26filter%3Dtypeid%26typeid%3D603">
            https://playgm.cn/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>使用环境</Meta>
          <span>Windows/macOS/web</span>
        </ListItem>
        <ListItem>
          <Meta>编写语言</Meta>
          <span>HTML/JS</span>
        </ListItem>
        
      </List>

      <WorkImage src="/images/works/gunzo.png" alt="Inkdrop" />
      <WorkImage src="/images/works/gunzo1.png" alt="Inkdrop" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

'use client';

import { Blog, Dtp } from '../types/blog';

import {
  Container,
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Image,
} from '@chakra-ui/react';
import { Heading2 } from './HeadingTwo';
import { contentData } from '../app/data/getContentData';
import { Button } from '../components/Button';

export const Work = () => {
  const siteData = contentData('blogs', undefined);
  const dtpData = contentData('dtp', undefined);

  return (
    <Box pos={'relative'} mb={'280px'} id="work">
      <Container maxW={'1200px'}>
        <Image
          sx={{ transform: 'translateY(-30%)' }}
          pos={'absolute'}
          right={'0'}
          w={'700px'}
          alt={''}
          src="/design-scroll-i-bee.png"
        />
        <Image
          sx={{ transform: 'translateY(40%)' }}
          pos={'absolute'}
          right={'0'}
          w={'600px'}
          alt={''}
          src="/design-scroll-bokukimi.png"
        />

        <Heading2 subheading="Work" heading="成果物" />
        <Box
          flexDir={'column'}
          gap={'24px'}
          display={'flex'}
          ml={'24px'}
          color={'gray.200'}
        >
          <Text>
            以下に私が参加あるいは主導した成果物をリストアップしています。
            <br />
            作品を閲覧できるようになっています。
          </Text>
          <Heading as={'h3'} fontSize={'md'}>
            webサイト
          </Heading>
          <Box fontSize={'md'}>
            <Text
              w={'522px'}
              mb={'16px'}
              lineHeight={'24px'}
              letterSpacing={'0.48px'}
            >
              私は学生時代を含め6年間長崎県佐世保市に拠点を置き、そこでwebサイトを作成していたため、長崎県に拠点を置いている組織のサイトが多いです。
            </Text>
            <UnorderedList
              sx={{ listStyleType: 'none' }}
              flexDir={'column'}
              gap={'16px'}
              display={'flex'}
              maxW={'522px'}
            >
              {siteData.contents.map((article: Blog) => (
                <ListItem key={article.id} suppressHydrationWarning>
                  <Button href={`/works/website/${article.id}`}>
                    {article.title}
                  </Button>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Heading as={'h3'} fontSize={'md'}>
            DTP
          </Heading>
          <Box>
            <Text
              w={'522px'}
              mb={'16px'}
              lineHeight={'24px'}
              letterSpacing={'0.48px'}
            >
              webデザインをしていく中でDTPにも挑戦しています。
            </Text>
            <UnorderedList
              sx={{ listStyleType: 'none' }}
              flexDir={'column'}
              gap={'16px'}
              display={'flex'}
              maxW={'522px'}
            >
              {dtpData.contents.map((article: Dtp) => (
                <ListItem key={article.id} suppressHydrationWarning>
                  <Button href={`/works/dtp/${article.id}`}>
                    {article.title}
                  </Button>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

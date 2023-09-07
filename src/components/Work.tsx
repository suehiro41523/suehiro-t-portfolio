import { use } from 'react';
import { Blog } from '../types/blog';

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

async function getData() {
  const result = await fetch('https://suehiro.microcms.io/api/v1/blogs', {
    headers: {
      'X-MICROCMS-API-KEY': process.env.API_KEY as string,
    },
  }).then((res) => res.json());
  return result;
}

export const Work = () => {
  const data = use(getData());
  console.log(data);

  return (
    <Container maxW={'1200px'} id="work">
      <Heading2 subheading="Work" heading="成果物" />
      <Box color={'gray.200'}>
        <Text>
          以下に私が参加あるいは主導した成果物をリストアップしています。
          <br />
          作品を閲覧できるようになっています。
        </Text>
        <Heading as={'h3'}>webサイト</Heading>
        <Box>
          <Text w={'522px'} lineHeight={'24px'} letterSpacing={'0.48px'}>
            私は学生時代を含め6年間長崎県佐世保市に拠点を置き、そこでwebサイトを作成していたため、長崎県に拠点を置いている組織のサイトが多いです。
          </Text>
          <UnorderedList
            sx={{ listStyleType: 'none' }}
            flexDir={'column'}
            gap={'16px'}
            display={'flex'}
            maxW={'522px'}
          >
            {data.contents.map((article: Blog) => (
              <ListItem key={article.id}>
                <Link
                  justifyContent={'space-between'}
                  display={'flex'}
                  border={'1px solid var(--chakra-colors-yellow-400)'}
                  borderRadius={'8px'}
                  href={`/works/${article.id}`}
                  paddingBlock={'8px'}
                  paddingInline={'16px'}
                >
                  {article.title}
                  <Image alt="" src="/arrowRight.svg" />
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Container>
  );
};

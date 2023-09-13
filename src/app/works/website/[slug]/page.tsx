import {
  extendTheme,
  Box,
  Container,
  ChakraProvider,
  Heading,
  Link,
  Image,
} from '@chakra-ui/react';
import { ExternalLinkIcon, ArrowUpDownIcon } from '@chakra-ui/icons';

import { HeaderForDynamic } from '../../../../components/HeaderForDynamic';
import { Footer } from '../../../../components/Footer';
import { contentData } from '../../../data/getContentData';

export default function Page({ params }: { params: { slug: string } }) {
  const theme = extendTheme({});
  const data = contentData('blogs', params.slug);
  const workNumber = ('0' + data.workNumber).slice(-2);
  return (
    <ChakraProvider theme={theme}>
      <Box minH={'100vh'} bg={'gray.700'}>
        <HeaderForDynamic />
        <Container maxW={'1200px'} mx={'auto'} mb={'170px'} color={'gray.200'}>
          <Heading as={'h2'} mb={'60px'} fontSize={'lg'}>
            <Box color={'gray.600'} fontSize={'sm'} fontWeight={'bold'}>
              Work{workNumber}
            </Box>
            <Link href={data.pageUrl} isExternal>
              {data.title}
              <ExternalLinkIcon />
            </Link>
          </Heading>
          <Box
            justifyContent={'space-between'}
            flexDir={{ base: 'column-reverse', lg: 'row' }}
            gap={'32px'}
            display={'flex'}
          >
            <Box
              className={'content'}
              maxW={'420px'}
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <Box pos={'relative'} h={'fit-content'}>
              {data.eyecatch !== undefined ? (
                <>
                  <Box
                    overflowY={'scroll'}
                    w={'fit-content'}
                    maxW={'440px'}
                    maxH={'755px'}
                    border={'10px solid var(--chakra-colors-gray-600)'}
                  >
                    <Image alt={''} src={data.eyecatch.url}></Image>
                  </Box>
                  <Box
                    sx={{
                      transform: 'translate(100%, -50%)',
                    }}
                    pos={'absolute'}
                    top={'50%'}
                    right={'0'}
                  >
                    <ArrowUpDownIcon boxSize={'36px'} color={'gray.500'} />
                  </Box>
                </>
              ) : (
                <Box>サイト画像がまだ登録されていません </Box>
              )}
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

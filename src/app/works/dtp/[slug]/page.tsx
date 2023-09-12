'use client';

import {
  extendTheme,
  Box,
  Container,
  ChakraProvider,
  Heading,
  Link,
  Image,
} from '@chakra-ui/react';

import { HeaderForDynamic } from '../../../../components/HeaderForDynamic';
import { Footer } from '../../../../components/Footer';
import { contentData } from '../../../data/getContentData';

export default function Page({ params }: { params: { slug: string } }) {
  const theme = extendTheme({});
  const data = contentData('dtp', params.slug);
  const workNumber = ('0' + data.workNumber).slice(-2);
  return (
    <ChakraProvider theme={theme}>
      <Box flexDir={'column'} display={'flex'} minH={'100vh'} bg={'gray.700'}>
        <HeaderForDynamic />
        <Container maxW={'1200px'}>
          <Box
            maxW={'1200px'}
            h={'100%'}
            mx={'auto'}
            mb={'170px'}
            color={'gray.200'}
          >
            <Heading as={'h2'} mb={'60px'} fontSize={'lg'}>
              <Box color={'gray.600'} fontSize={'sm'} fontWeight={'bold'}>
                Work{workNumber}
              </Box>
              <Link href={data.pageUrl} isExternal>
                {data.title}
              </Link>
            </Heading>
            <Box
              justifyContent={'space-between'}
              flexDir={'column-reverse'}
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
                    <Box w={'fit-content'} maxW={'540px'}>
                      <Image alt={''} src={data.eyecatch.url}></Image>
                    </Box>
                  </>
                ) : (
                  <Box>サイト画像がまだ登録されていません </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

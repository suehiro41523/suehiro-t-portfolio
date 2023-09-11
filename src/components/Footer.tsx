import { Box, Image, Link } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box mt={'auto'} bg={'gray.800'}>
      <Box maxW={'1200px'} mx={'auto'} py={'12px'}>
        <Box
          alignItems={'flex-start'}
          gap={'12px'}
          display={'flex'}
          mb={'32px'}
        >
          <Image alt="" src={'/footer/github-mark.svg'} />
          <Box
            flexDir={'column'}
            gap={'12px'}
            display={'flex'}
            color={'gray.400'}
            fontWeight={'bold'}
          >
            <Link href="https://github.com/suehiro41523" isExternal>
              suehiro41523
            </Link>
            <Link
              href="https://github.com/suehiro41523/suehiro-t-portfolio"
              isExternal
            >
              Suehiro&apos;s Portfolio
            </Link>
          </Box>
        </Box>
        <Box
          w={'100%'}
          color={'gray.700'}
          fontWeight={'bold'}
          textAlign={'center'}
        >
          © 2023 Suehiro
        </Box>
      </Box>
    </Box>
  );
};

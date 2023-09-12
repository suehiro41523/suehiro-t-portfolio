import { Box, Container, Image } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <Box
      pos={'relative'}
      mb={'8.94vw'}
      py={'42px'}
      color={'gray.700'}
      fontWeight={'bold'}
      bg={'gray.200'}
    >
      <Container
        justifyContent={'space-between'}
        display={'flex'}
        maxW={{ xl: '1200px' }}
      >
        <Box>Suehiro&apos;s portfolio</Box>
        {children}
      </Container>
      <Box
        pos={'absolute'}
        bottom={0}
        w={'100%'}
        transform={'auto'}
        translateY={'99%'}
      >
        <Image
          alt=""
          htmlWidth={'100%'}
          id="orn-cloud"
          src={'/header/cloud.svg'}
        />
      </Box>
    </Box>
  );
};

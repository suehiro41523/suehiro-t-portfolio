import {
  Box,
  UnorderedList,
  ListItem,
  Container,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <Box
      pos={'relative'}
      mb={'122px'}
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
        <Image alt="" htmlWidth={'100%'} src={'/header/cloud.svg'}></Image>
      </Box>
    </Box>
  );
};

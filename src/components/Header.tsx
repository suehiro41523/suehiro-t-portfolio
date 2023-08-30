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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Header = () => {
  return (
    <Box
      pos={'relative'}
      background={'gray.200'}
      paddingY={'42px'}
      marginBottom={'100px'}
      fontWeight={'bold'}
    >
      <Container
        maxW={{ xl: '1200px' }}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Box>Suehiro&apos;s portfolio</Box>
        {/* ハンバーガーメニュー */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as="a" href={'#profile'} fontWeight={'bold'}>
                Profile
              </MenuItem>
              <MenuItem as="a" href={'#skillset'} fontWeight={'bold'}>
                Skill-set
              </MenuItem>
              <MenuItem as="a" href={'#experience'} fontWeight={'bold'}>
                Experience
              </MenuItem>
              <MenuItem as="a" href={'#work'} fontWeight={'bold'}>
                Work
              </MenuItem>
              <MenuItem as="a" href={'#mythought'} fontWeight={'bold'}>
                My thought
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        {/* 常時展開メニュー */}
        <Box display={{ base: 'none', md: 'block' }}>
          <nav>
            <UnorderedList display={'flex'} styleType={'none'} gap={'42px'}>
              <ListItem as={'a'} href={'#profile'}>
                Profile
              </ListItem>
              <ListItem as={'a'} href={'#skillset'}>
                Skill-set
              </ListItem>
              <ListItem as={'a'} href={'#experience'}>
                Experience
              </ListItem>
              <ListItem as={'a'} href={'#work'}>
                Work
              </ListItem>
              <ListItem as={'a'} href={'#mythought'}>
                My thought
              </ListItem>
            </UnorderedList>
          </nav>
        </Box>
      </Container>
      <Box
        w={'100%'}
        bottom={0}
        translateY={'99%'}
        transform={'auto'}
        pos={'absolute'}
      >
        <Image htmlWidth={'100%'} src={'/header/cloud.svg'} alt=""></Image>
      </Box>
    </Box>
  );
};

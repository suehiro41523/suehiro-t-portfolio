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

export const Header = () => {
  return (
    <Box
      pos={'relative'}
      mb={'100px'}
      py={'42px'}
      fontWeight={'bold'}
      bg={'gray.200'}
    >
      <Container
        justifyContent={'space-between'}
        display={'flex'}
        maxW={{ xl: '1200px' }}
      >
        <Box>Suehiro&apos;s portfolio</Box>
        {/* ハンバーガーメニュー */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="outline"
            />
            <MenuList>
              <MenuItem as="a" fontWeight={'bold'} href={'#profile'}>
                Profile
              </MenuItem>
              <MenuItem as="a" fontWeight={'bold'} href={'#skillset'}>
                Skill-set
              </MenuItem>
              <MenuItem as="a" fontWeight={'bold'} href={'#experience'}>
                Experience
              </MenuItem>
              <MenuItem as="a" fontWeight={'bold'} href={'#work'}>
                Work
              </MenuItem>
              <MenuItem as="a" fontWeight={'bold'} href={'#mythought'}>
                My thought
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        {/* 常時展開メニュー */}
        <Box display={{ base: 'none', md: 'block' }}>
          <nav>
            <UnorderedList gap={'42px'} display={'flex'} styleType={'none'}>
              <ListItem>
                <Link href={'#profile'}>Profile</Link>
              </ListItem>
              <ListItem>
                <Link href={'#skillset'}>Skill-set</Link>
              </ListItem>
              <ListItem>
                <Link href={'#experience'}>Experience</Link>
              </ListItem>
              <ListItem>
                <Link href={'#work'}>Work</Link>
              </ListItem>
              <ListItem>
                <Link href={'#mythought'}>My thought</Link>
              </ListItem>
            </UnorderedList>
          </nav>
        </Box>
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

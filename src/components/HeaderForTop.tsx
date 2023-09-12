import { HamburgerIcon } from '@chakra-ui/icons';
import { Header } from './Header';
import {
  Box,
  IconButton,
  Link,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  UnorderedList,
} from '@chakra-ui/react';

export const HeaderForTop = () => {
  return (
    <Box pos={'relative'} zIndex={'20'}>
      <Header>
        {/* ハンバーガーメニュー */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              colorScheme="gray.700"
              icon={<HamburgerIcon />}
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
      </Header>
    </Box>
  );
};

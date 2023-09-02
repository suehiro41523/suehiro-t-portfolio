'use client';

import {
  extendTheme,
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { Heading2 } from '../components/HeadingTwo';
import { Firstview } from '../components/Firstview';
import { Profile } from '../components/Profile';
import { SkillSet } from '../components/SkillSet';
import { Experience } from '../components/Experience';

export default function Home() {
  const theme = extendTheme({});

  return (
    <main>
      <ChakraProvider theme={theme}>
        <Box minH={'100vh'} bgColor={'gray.700'}>
          <Firstview />
          <Profile />
          <SkillSet />
          <Experience />
        </Box>
      </ChakraProvider>
    </main>
  );
}

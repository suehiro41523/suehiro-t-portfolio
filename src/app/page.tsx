'use client';

import { extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import { Firstview } from '../components/Firstview';
import { Profile } from '../components/Profile';
import { SkillSet } from '../components/SkillSet';
import { Experience } from '../components/Experience';
import { Work } from '../components/Work';

export default function Home() {
  const theme = extendTheme({});

  return (
    <main>
      <ChakraProvider theme={theme}>
        <Box overflowX={'hidden'} minH={'100vh'} bgColor={'gray.700'}>
          <Firstview />
          <Profile />
          <SkillSet />
          <Experience />
          <Work />
        </Box>
      </ChakraProvider>
    </main>
  );
}

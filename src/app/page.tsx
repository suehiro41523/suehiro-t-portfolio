'use client';

import { extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import { Firstview } from '../components/Firstview';
import { Profile } from '../components/Profile';
import { SkillSet } from '../components/SkillSet';
import { Experience } from '../components/Experience';
import { Work } from '../components/Work';
import { MyThought } from '../components/MyThought';
import { Footer } from '../components/Footer';
import { Information } from '../components/Information';

export default function Home() {
  const theme = extendTheme({
    styles: {
      global: {
        'html, body': {
          bg: 'gray.700',
          lineHeight: 'tall',
        },
        a: {
          color: 'teal.500',
        },
      },
    },
  });

  return (
    <main>
      <ChakraProvider theme={theme}>
        <Box
          pos={'relative'}
          overflowX={'hidden'}
          minH={'100vh'}
          bgColor={'gray.700'}
        >
          <Firstview />
          <Profile />
          <SkillSet />
          <Experience />
          <Work />
          <MyThought />
          <Footer />
          <Box pos={'fixed'} zIndex={'20'} right={'24px'} bottom={'24px'}>
            <Information />
          </Box>
        </Box>
      </ChakraProvider>
    </main>
  );
}

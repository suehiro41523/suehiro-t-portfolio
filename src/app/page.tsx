'use client';

import { ChakraProvider, Box, Container, Heading } from '@chakra-ui/react';
export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <Box minH={'100vh'} backgroundColor={'gray.800'}>
          <Container>
            <Heading as={'h1'} color={'white'}>
              Hello world
            </Heading>
          </Container>
        </Box>
      </ChakraProvider>
    </main>
  );
}

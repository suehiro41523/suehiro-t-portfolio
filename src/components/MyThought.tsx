import { Box, Container, ListItem, UnorderedList } from '@chakra-ui/react';
import { Heading2 } from './HeadingTwo';

export const MyThought = () => {
  return (
    <Container maxW={'1200px'} mx={'auto'} mb={'180px'} id="mythought">
      <Heading2 subheading={'My Thought'} heading={'web開発における思い'} />
      <Box
        flexDir={'column'}
        gap={'24px'}
        display={'flex'}
        ml={'24px'}
        color={'gray.200'}
      >
        世の中に数多くの職種がある中で、web制作は私にとって長期にわたって携わりたいと思える職業です。
      </Box>
    </Container>
  );
};

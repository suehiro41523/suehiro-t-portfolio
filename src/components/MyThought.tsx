import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { Heading2 } from './HeadingTwo';

export const MyThought = () => {
  return (
    <Box maxW={'1200px'} mx={'auto'} mb={'180px'}>
      <Heading2 subheading={'My Thought'} heading={'web開発における思い'} />
      <Box
        flexDir={'column'}
        gap={'24px'}
        display={'flex'}
        ml={'24px'}
        color={'gray.200'}
      >
        世の中に数多くの職種がある中で、web制作は私にとって長期にわたって携わりたいと思える職業です。
        <UnorderedList flexDir={'column'} gap={'16px'} display={'flex'}>
          <ListItem>移り変わりが激しく飽きのない学習</ListItem>
          <ListItem>
            コンピュータという決まった反応をするものと対峙する時間が長いこと
          </ListItem>
          <ListItem>自分の学習次第で成果物の質が決まること</ListItem>
        </UnorderedList>
        これらの性質は私の性格に向いていると感じていますし、日々楽しく学習に励むことができています。
      </Box>
    </Box>
  );
};

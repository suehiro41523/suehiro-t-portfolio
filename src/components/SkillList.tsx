import { Box, Heading } from '@chakra-ui/react';
import { type } from 'os';
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from 'react';

type Props = {
  category: string;
  children: ReactNode;
};

export const SkillList = ({ category, children }: Props) => {
  return (
    <Box color={'gray.200'}>
      <Heading as="h3" mb={'8px'} fontSize={'lg'} fontWeight={'bold'}>
        {category}
      </Heading>
      <Box
        pos={'relative'}
        flexDir={'column'}
        display={'flex'}
        ml={'24px'}
        pl={'16px'}
        _before={{
          content: '""',
          position: 'absolute',
          left: '0',
          display: 'block',
          height: '100%',
          width: '2px',
          background: 'var(--chakra-colors-gray-200)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

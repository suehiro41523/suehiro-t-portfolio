import { Heading, Box } from '@chakra-ui/react';

type Props = {
  subheading: string;
  heading: string;
};
export const Heading2 = ({ subheading, heading }: Props) => {
  return (
    <Box
      pos={'relative'}
      mb={'24px'}
      pl={'16px'}
      color={'gray.200'}
      fontSize={'sm'}
      _before={{
        content: '""',
        position: 'absolute',
        left: '0',
        display: 'block',
        height: '100%',
        width: '4px',
        background: 'gray.200',
      }}
      paddingInline={'4px'}
    >
      <Box>{subheading}</Box>
      <Heading fontSize={'lg'}>{heading}</Heading>
    </Box>
  );
};

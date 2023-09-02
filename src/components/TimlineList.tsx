import { Box } from '@chakra-ui/react';

type Props = {
  period: string;
  career: string;
};
export const TimelineList = ({ period, career }: Props) => {
  return (
    <Box
      pos={'relative'}
      gap={'8px'}
      display={'flex'}
      _before={{
        content: '""',
        display: 'block',
        marginTop: '7px',
        marginRight: '16px',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'gray.800',
        border: '2px solid var(--chakra-colors-gray-700)',
      }}
    >
      <Box>{period}</Box>
      <Box>{career}</Box>
    </Box>
  );
};

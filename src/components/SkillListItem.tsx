import { Box } from '@chakra-ui/react';

type Props = {
  skillName: String;
};
export const SkillListItem = ({ skillName }: Props) => {
  return (
    <Box
      color={'gray.200'}
      fontSize={{ base: 'sm', lg: 'md' }}
      fontWeight={'bold'}
      paddingBlock={'8px'}
      paddingInline={'4px'}
    >
      {skillName}
    </Box>
  );
};

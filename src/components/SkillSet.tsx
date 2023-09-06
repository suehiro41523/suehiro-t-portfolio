import { Container, Box, Image } from '@chakra-ui/react';
import { SkillList } from './SkillList';
import { SkillListItem } from './SkillListItem';
import { Heading2 } from './HeadingTwo';

export const SkillSet = () => {
  return (
    <Container maxW={'1200px'} mb={'286px'} id="skillset">
      <Heading2 subheading="Skill-set" heading="スキルセット" />
      <Box
        justifyContent={'space-between'}
        display={'flex'}
        w={'930px'}
        ml={'24px'}
      >
        <SkillList category="使用言語">
          <SkillListItem skillName="HTML" />
          <SkillListItem skillName="CSS" />
          <SkillListItem skillName="JavaScript" />
          <SkillListItem skillName="TypeScript" />
        </SkillList>
        <SkillList category="フレームワーク">
          <SkillListItem skillName="Next.js" />
        </SkillList>
        <SkillList category="デザインツール">
          <SkillListItem skillName="HTML" />
          <SkillListItem skillName="CSS" />
          <SkillListItem skillName="JavaScript" />
          <SkillListItem skillName="TypeScript" />
        </SkillList>
        <SkillList category="CI/CD">
          <SkillListItem skillName="Git&Github" />
          <SkillListItem skillName="Vercel" />
        </SkillList>
      </Box>
      <Box pos={'relative'} h={'373px'}>
        <Image
          pos={'absolute'}
          left={'-30px'}
          w={'343px'}
          h={'193px'}
          alt={'HTMlLogo'}
          src={'/html.png'}
        />
        <Image
          pos={'absolute'}
          top={'170px'}
          left={'150px'}
          w={'343px'}
          h={'193px'}
          alt={'HTMlLogo'}
          src={'/css.png'}
        />
        <Image
          pos={'absolute'}
          left={'310px'}
          w={'343px'}
          h={'193px'}
          alt={'HTMlLogo'}
          src={'/typescript.png'}
        />
        <Image
          pos={'absolute'}
          top={'150px'}
          left={'520px'}
          w={'343px'}
          h={'193px'}
          alt={'HTMlLogo'}
          src={'/figma.png'}
        />
        <Image
          pos={'absolute'}
          left={'700px'}
          w={'343px'}
          h={'193px'}
          alt={'HTMlLogo'}
          src={'/github.png'}
        />
      </Box>
    </Container>
  );
};

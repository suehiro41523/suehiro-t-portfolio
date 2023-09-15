import { Container, Box, Image } from '@chakra-ui/react';
import { SkillList } from './SkillList';
import { SkillListItem } from './SkillListItem';
import { Heading2 } from './HeadingTwo';

export const SkillSet = () => {
  return (
    <Container maxW={'1200px'} mb={'286px'} id="skillset">
      <Heading2 subheading="Skill-set" heading="スキルセット" />
      <Box
        flexDir={{ base: 'row', lg: 'column' }}
        gap={{ base: '0', md: '40px' }}
        display={'flex'}
        w={'100%'}
      >
        <Box
          justifyContent={'space-between'}
          flexDir={{ base: 'column', lg: 'row' }}
          gap={'60px'}
          display={'flex'}
          maxW={'930px'}
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
            <SkillListItem skillName="Figma" />
            <SkillListItem skillName="Blender" />
            <SkillListItem skillName="Illustrator" />
          </SkillList>
          <SkillList category="CI/CD">
            <SkillListItem skillName="Git&Github" />
            <SkillListItem skillName="Vercel" />
          </SkillList>
        </Box>
        <Box pos={'relative'} w={{ base: '343px' }} h={{ lg: '373px' }}>
          <Image
            pos={'absolute'}
            left={{ base: '13vw', lg: '-30px' }}
            w={{ base: '228px', lg: '343px' }}
            h={{ base: '128px', lg: '193px' }}
            alt={'HTMlLogo'}
            src={'/html.png'}
          />
          <Image
            pos={'absolute'}
            top={{ base: '180px', lg: '170px' }}
            left={{ base: '-2vw', lg: '150px' }}
            w={{ base: '228px', lg: '343px' }}
            h={{ base: '128px', lg: '193px' }}
            alt={'HTMlLogo'}
            src={'/css.png'}
          />
          <Image
            pos={'absolute'}
            top={{ base: '370px', lg: 'auto' }}
            left={{ base: '20vw', lg: '310px' }}
            w={{ base: '228px', lg: '343px' }}
            h={{ base: '128px', lg: '193px' }}
            alt={'HTMlLogo'}
            src={'/typescript.png'}
          />
          <Image
            pos={'absolute'}
            top={{ base: '520px', lg: '150px' }}
            left={{ base: '-1vw', lg: '520px' }}
            w={{ base: '228px', lg: '343px' }}
            h={{ base: '128px', lg: '193px' }}
            alt={'HTMlLogo'}
            src={'/figma.png'}
          />
          <Image
            pos={'absolute'}
            top={{ base: '700px', lg: 'auto' }}
            left={{ base: '16vw', lg: '700px' }}
            w={{ base: '228px', lg: '343px' }}
            h={{ base: '128px', lg: '193px' }}
            alt={'HTMlLogo'}
            src={'/github.png'}
          />
        </Box>
      </Box>
    </Container>
  );
};

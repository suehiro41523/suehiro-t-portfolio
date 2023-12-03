import { Container, Box, Text } from '@chakra-ui/react';

import { Heading2 } from './HeadingTwo';
import { TimelineList } from './TimlineList';

export const Profile = () => {
  if (process.browser) {
    const elements = document.querySelectorAll('.fade-in');

    const handleIntersection = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50%以上が表示されたらコールバックを実行
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }

  return (
    <Container maxW={'1200px'} mb={'286px'} color={'gray.200'} id="profile">
      <Heading2 subheading="profile" heading="基本情報" />
      <Box
        className="fade-in"
        flexDir={{ base: 'column', lg: 'row' }}
        gap={'90px'}
        display={'flex'}
        mb={'380px'}
        opacity={0}
      >
        <Box>
          <Box ml={'24px'}>
            <Box mb={'24px'}>
              <Box fontSize={'sm'} letterSpacing={'0.3px'}>
                Suehiro Tatsuya
              </Box>
              <Box
                fontSize={'xl'}
                fontWeight={'bold'}
                lineHeight={'100%'}
                letterSpacing={'4px'}
              >
                末廣 達也
              </Box>
            </Box>
            <Box>
              <Box mb={'12px'} color={'yellow.300'} fontWeight={'bold'}>
                実は…
              </Box>
              <Text maxW={'420px'} ml={'24px'} letterSpacing={'0.48px'}>
                私は海外生活の経験があるため英語のドキュメントや動画を見て学習をすることもあります。
                <br />
                ネイティブほどではありませんが、文法などは染み付いているので、熟語や英単語の意味を理解していれば理解は容易です。
                <br />
                大学3回生で受験したTOEICでは915点を取得しています。
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          pos={'relative'}
          pl={{ base: '24px', lg: '0' }}
          _before={{
            content: '""',
            display: 'block',
            position: 'absolute',
            marginLeft: '4px',
            height: 'calc(100% - 16px)',
            width: '3px',
            background: 'gray.800',
            borderRadius: '2px',
          }}
        >
          <Box pos={'relative'}>
            <Box
              pos={'absolute'}
              color={'gray.600'}
              fontSize={'60px'}
              fontWeight={'bold'}
              opacity={'0.15'}
            >
              <Box pl={'18px'}>Career</Box>
              <Box pt={'32px'} pl={'80px'}>
                Timeline
              </Box>
            </Box>
            <Box flexDir={'column'} gap={'32px'} display={'flex'} mt={'24px'}>
              <TimelineList period={'2020/03'} career={'web学習開始'} />
              <TimelineList
                period={'2021/01'}
                career={'某障害福祉事業所 web講師としてアルバイトを開始'}
              />
              <TimelineList
                period={'2022/03'}
                career={'長崎県立大学経営学部国際経営学科卒業'}
              />
              <TimelineList
                period={'2022/04'}
                career={' 某障害福祉事業所入社 web講師'}
              />
              <TimelineList period={'2023/05'} career={'退社'} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

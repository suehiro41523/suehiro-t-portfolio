import { Container, Box, Text } from '@chakra-ui/react';

import { Heading2 } from './HeadingTwo';
import { TimelineList } from './TimlineList';

export const Profile = () => {
  return (
    <Container maxW={'1200px'} mb={'286px'} color={'gray.200'}>
      <Heading2 subheading="profile" heading="基本情報" />
      <Box gap={'90px'} display={'flex'} mb={'380px'}>
        <Box>
          <Box ml={'24px'}>
            <Box mb={'24px'}>
              <Box fontSize={'sm'} letterSpacing={'30%'}>
                Suehiro Tatsuya
              </Box>
              <Box
                fontSize={'xl'}
                fontWeight={'bold'}
                lineHeight={'100%'}
                letterSpacing={'20%'}
              >
                末廣 達也
              </Box>
            </Box>
            <Box>
              <Box mb={'12px'} color={'yellow.300'} fontWeight={'bold'}>
                実は…
              </Box>
              <Text w={'420px'} ml={'24px'}>
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
          <Box flexDir={'column'} gap={'32px'} display={'flex'} mt={'24px'}>
            <TimelineList period={'2020/03'} career={'web学習開始'} />
            <TimelineList
              period={'2021/01'}
              career={
                '一般社団法人ドーアキャッスル web講師としてアルバイトを開始'
              }
            />
            <TimelineList
              period={'2022/03'}
              career={'長崎県立大学経営学部国際経営学科卒業'}
            />
            <TimelineList
              period={'2022/04'}
              career={' 一般社団法人ドーアキャッスル入社 web講師'}
            />
            <TimelineList period={'2023/05'} career={'退社'} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

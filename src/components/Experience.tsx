import { Container, Box, Heading, Image, Text } from '@chakra-ui/react';
import { Heading2 } from './HeadingTwo';

export const Experience = () => {
  return (
    <Box pos={'relative'} id="experience">
      <Container maxW={'1200px'}>
        <Heading2 subheading="Experience" heading="過去の経験" />
        <Box ml={'24px'} pb={'26vw'} color={'gray.200'}>
          今の私に至るまでの道のりをご覧ください。
          <Box
            pos={'absolute'}
            left={'50%'}
            w={'100vw'}
            pt={'42px'}
            translateX={'-50%'}
          >
            <Image
              pos={'absolute'}
              left={'-50%'}
              w={'100vw'}
              alt=""
              src="/ornament-road.svg"
            />
          </Box>
          <Box pt={'26vw'}>
            <Heading as={'h3'} mb={'24px'} fontSize={'md'} fontWeight={'bold'}>
              道のり
            </Heading>
            <Box
              flexDir={'column'}
              gap={'24px'}
              display={'flex'}
              w={'fit-content'}
              maxW={'552px'}
              mb={'42px'}
              ml={'24px'}
              lineHeight={'24px'}
              letterSpacing={'0.48px'}
            >
              <Text paddingInline={'16px'}>
                私は地方文系大学出身のため、web開発は基本的に独学でおこなってきました。
                <br />
                基本的なHTML/CSSの文法の学習から、
                <br />
                VScodeなどのエディタの使用方法、
                <br />
                基礎の学習をYouTubeやudemyといったサービスを使い技術の向上を試みてきました。
              </Text>
              <Text
                bg={'gray.800'}
                borderRadius={'8px'}
                paddingBlock={'24px'}
                paddingInline={'16px'}
              >
                時には知人から実践的な学習と称し制作の一部を担うこともありました。
                <br />
                一般的な企業のホームページやECサイトの作成の一部を担ったことがあります。
              </Text>
              <Text paddingInline={'16px'}>
                約1年間の独学と人脈を経てweb講師として障害福祉の業界で働いていました。
                <br />
                そこでは今までの学習を活かし、施設の利用者様へ技術の共有をしてきました。
                <br />
                <Box as={'span'} color={'yellow.300'}>
                  web講師として働きながらもサイト制作を個人で受注することもありました。
                </Box>
              </Text>
            </Box>
            <Box>
              <Heading
                as={'h3'}
                mb={'24px'}
                fontSize={'md'}
                fontWeight={'bold'}
              >
                苦労したこと
              </Heading>
              <Box
                pos={'relative'}
                flexDir={'column'}
                gap={'32px'}
                display={'flex'}
                w={'fit-content'}
                maxW={'552px'}
                ml={'24px'}
                lineHeight={'24px'}
                letterSpacing={'0.48px'}
              >
                <Text paddingInline={'16px'}>
                  最初の苦労は独学でweb制作を学ぶ中での実践と学習の境目でした。
                </Text>
                <Text
                  bg={'gray.800'}
                  borderRadius={'8px'}
                  paddingBlock={'32px'}
                  paddingInline={'16px'}
                >
                  webサイトを0から公開するまでは先の見えない作業に取り組んでいるようでした。そのため、技術だけでなく、webサイトの案件例や公開フローなどの知識も身につけることで最初の苦労を突破しました。
                  <br />
                  この学習を通してそれまではただの点だった技術と知識が流れを知ることで線となり、知識の活かし方を知り始めました。同時にweb技術者に求められる幅広い知識の量に興奮を覚えたのを今でも覚えています。この経験から何かを新しく始めるという抵抗が格段に少なくなりました。
                </Text>
                <Text paddingInline={'16px'}>
                  第二、第三の苦労はwebサイトを依頼として引き受けた頃にを経験しました。
                  <br />
                  それは納期設定とコミュニケーションの苦労でした。
                </Text>
                <Text
                  bg={'gray.800'}
                  borderRadius={'8px'}
                  paddingBlock={'24px'}
                  paddingInline={'16px'}
                >
                  自習で作成したものは時間制限を自分で儲けることが出来ていましたが、依頼人がいる中での制作物となると先方との連絡や素材の受け渡しなどコミュケーションで生まれるラグを見越したスケジュールを立てる必要があり、それを意識してスケジュールを立てることが大変でした。大変どころか何度も計画の変更を行い先方へ迷惑をかけてしまいました。この経験を機に納期設定や先方とのすり合わせの重要性を学びました。
                </Text>
                <Text paddingInline={'16px'}>
                  対ヒトとの工程にはコンピューターほど完璧な方程式はないため、今でも意識しながら行っていますが、ビジネスでのコミュニケーションの壁は当時の私にはとても高く感じました。
                </Text>
                <Text paddingInline={'16px'}>
                  当時は先方にとって負担の少ない連絡を心がけ、できるだけ簡単に返答ができるよう意識していました。
                  <br />
                  <Box as={'span'} color={'yellow.300'}>
                    今でも依頼人のみならず、人とのコミュニケーションでは相手に負担の少ないように意識して連絡を入れるように心がけています。
                  </Box>
                </Text>
              </Box>
              <Image
                sx={{ transform: 'translateY(-50%)' }}
                pos={'absolute'}
                top={'50%'}
                right={0}
                alt=""
                src="/ornament-cliff.svg"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

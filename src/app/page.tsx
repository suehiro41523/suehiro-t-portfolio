'use client';
import {
  extendTheme,
  ChakraProvider,
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import * as THREE from 'three';
import Image from 'next/image';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { Header } from '../components/Header';
import { ornamentWebSvg, chevronDownSvg } from '../../public/index';

export default function Home() {
  let canvas: HTMLCanvasElement;
  let model: THREE.Group;
  let mixer: THREE.AnimationMixer;
  const clock = new THREE.Clock();
  const { width, height } = useWindowSize();
  // ファーストビューの3dモデルの表示
  useEffect(() => {
    const canvas = document.getElementById('top') as HTMLCanvasElement;

    const sizes = {
      width: width,
      height: height,
    };
    //scene(ファーストビュー用)
    const scene: THREE.Scene = new THREE.Scene();
    //scene(HTMLロゴ用)
    const sceneHtml: THREE.Scene = new THREE.Scene();

    //camera(ファーストビュー用)
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      2000,
    );
    camera.position.set(-2.8, 0, 5);

    //renderer(ファーストビュー用)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 3dモデルLoader
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      'https://www.gstatic.com/draco/versioned/decoders/1.5.6/',
    );
    dracoLoader.preload();
    gltfLoader.setDRACOLoader(dracoLoader);
    // ファーストビューモデル読み込み
    gltfLoader.load('/models/laptop-pop.gltf', (gltf) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      model = gltf.scene;
      model.rotateY(-Math.PI / 4);
      // model.rotateX(Math.PI / 8);
      model.scale.set(0.8, 0.8, 0.8);
      scene.add(model);
      // pcオブジェクト展開アニメーション
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mixer = new THREE.AnimationMixer(model);
      const clips = gltf.animations;
      clips.forEach(function (clip) {
        const tick = () => {
          renderer.render(scene, camera);
          const action = mixer.clipAction(clip);
          action.play();
          const delta = clock.getDelta();
          mixer.update(delta);
          let animation = mixer.clipAction(clip);
          animation.setLoop(THREE.LoopOnce, 1);
          animation.clampWhenFinished = true;
          animation.enabled = true;
          animation.play();
          requestAnimationFrame(tick);
        };

        tick();
      });
      // lighting(ファーストビュー用)
      const hemisphereLight = new THREE.HemisphereLight(
        0xaddeff,
        0x4169e1,
        1.8,
      );
      // scene.add(hemisphereLight);
      const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
      pointLight.position.set(7, 10, 7);
      scene.add(pointLight);
    });

    // 画面サイズが変わるごとにアニメーションを再発火し、レスポンシブ対応
  }, [width, height]);

  const theme = extendTheme({});

  return (
    <main>
      <ChakraProvider theme={theme}>
        <Box minH={'100vh'} backgroundColor={'gray.800'}>
          <Header />
          <Box
            color={'white'}
            marginX={'auto'}
            maxW={'1200px'}
            position={'relative'}
            height={'calc(100vh - 235px)'}
          >
            <Box
              marginLeft={'50px'}
              height={'calc(100vh - 235px)'}
              display={'flex'}
              flexDir={'column'}
              justifyContent={'center'}
              position={'relative'}
            >
              <Box position={'absolute'} bottom={'17%'}>
                <Image width="auto" height="auto" src={ornamentWebSvg} alt="" />
              </Box>
              <Box marginBottom={'52px'}>
                <Heading as={'h1'}>Suehiro&apos;s Portfolio</Heading>
                <Text fontWeight={'bold'}>
                  末廣のポートフォリオサイトへようこそ！
                </Text>
              </Box>
              <Box position={'relative'}>
                <Box marginBottom={4}>
                  本サイトでは末廣に関する以下のものを掲載しています。
                </Box>
                <UnorderedList display={'flex'} flexDir={'column'} gap={1}>
                  <ListItem>基本情報</ListItem>
                  <ListItem>スキルセット</ListItem>
                  <ListItem>過去の経験</ListItem>
                  <ListItem>成果物</ListItem>
                  <ListItem>web開発における思い</ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box position={'absolute'} top={0}>
              <canvas style={{ maxWidth: '100%' }} id="top" />
            </Box>
            <Box position="absolute" bottom={0} left={'50%'} translateX="-50%">
              <Image src={chevronDownSvg} alt="" width="auto" height="auto" />
            </Box>
          </Box>
        </Box>
      </ChakraProvider>
    </main>
  );
}

'use client';

import {
  Box,
  Container,
  Image,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import { HeaderForTop } from './HeaderForTop';

type size = {
  width: number;
  height: number;
};
export const Firstview = () => {
  let canvas: HTMLCanvasElement;
  let model: THREE.Group;
  let mixer: THREE.AnimationMixer;
  const clock = new THREE.Clock();
  const { width, height } = useWindowSize();
  // ファーストビューの3dモデルの表示
  useEffect(() => {
    const canvas = document.getElementById('top') as HTMLCanvasElement;

    //scene(ファーストビュー用)
    const scene: THREE.Scene = new THREE.Scene();
    //scene(HTMLロゴ用)
    const sceneHtml: THREE.Scene = new THREE.Scene();
    const sizes = {
      width: width,
      height: height,
    };
    //camera(ファーストビュー用)
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      2000,
    );
    sizes.width >= 900
      ? camera.position.set(-2.8, 0, 5)
      : camera.position.set(-0.8, -0.7, 7);

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
      sizes.width >= 900
        ? model.rotateY(-Math.PI / 4)
        : model.rotateY(-Math.PI / 5);
      // model.rotateX(Math.PI / 8);
      model = gltf.scene;
      sizes.width >= 900
        ? model.scale.set(0.8, 0.8, 0.8)
        : model.scale.set(1, 1, 1);
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
  }, [width]);
  return (
    <Box pos={'relative'}>
      <HeaderForTop />
      <Box
        pos={'relative'}
        zIndex={'10'}
        maxW={'1200px'}
        h={'calc(100vh - 235px)'}
        mx={'auto'}
        mb={'106px'}
        color={'white'}
      >
        <Container
          pos={'relative'}
          zIndex={'20'}
          justifyContent={'center'}
          flexDir={'column'}
          gap={'60px'}
          display={'flex'}
          maxW={'1200px'}
          h={'calc(100vh - 235px)'}
        >
          <Box pos={'absolute'} zIndex={1} bottom={{ base: '0', lg: '-12%' }}>
            <Image alt="" src={'/ornament-firstview-web.svg'} />
          </Box>
          <Box mb={'52px'}>
            <Heading as={'h1'}>Suehiro&apos;s Portfolio</Heading>
            <Text fontWeight={'bold'}>
              末廣のポートフォリオサイトへようこそ！
            </Text>
          </Box>
          <Box pos={'relative'}>
            <Box mb={4}>
              本サイトでは末廣に関する以下のものを掲載しています。
            </Box>
            <UnorderedList flexDir={'column'} gap={1} display={'flex'}>
              <ListItem>基本情報</ListItem>
              <ListItem>スキルセット</ListItem>
              <ListItem>過去の経験</ListItem>
              <ListItem>成果物</ListItem>
              <ListItem>web開発における思い</ListItem>
            </UnorderedList>
          </Box>
        </Container>
        <Box
          sx={{ transform: 'translateY(-10%)' }}
          pos={'absolute'}
          zIndex={'10'}
          top={0}
          opacity={{ base: '0.2', lg: '1' }}
        >
          <canvas style={{ maxWidth: '100%' }} id="top" />
        </Box>
      </Box>
      <Box pos="absolute" zIndex={10} bottom={0} left={'50%'} translateX="-50%">
        <Image alt="" src={'/arrowDown.svg'} />
      </Box>
    </Box>
  );
};

'use client';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default function Home() {
  let canvas: HTMLCanvasElement;
  let model: THREE.Group;
  let mixer: THREE.AnimationMixer;
  const clock = new THREE.Clock();

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    const sizes = {
      width: innerWidth,
      height: innerHeight,
    };
    //scene
    const scene: THREE.Scene = new THREE.Scene();

    //camera
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      2000,
    );
    camera.position.set(-2, 1, 5);

    //renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 3dモデル
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      'https://www.gstatic.com/draco/versioned/decoders/1.5.6/',
    );
    dracoLoader.preload();
    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.load('/models/mac-book-pro.gltf', (gltf) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      model = gltf.scene;
      model.rotateY(-Math.PI / 4);
      // model.rotateX(Math.PI / 8);
      model.scale.set(10, 10, 10);
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
    });

    // lighting
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x4169e1, 1.8);
    scene.add(hemisphereLight);

    // レンダー用アニメーション

    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
    });
  }, []);
  return (
    <main>
      <ChakraProvider>
        <Box minH={'100vh'} backgroundColor={'gray.800'}>
          <Heading as={'h1'} color={'white'}>
            Hello world
          </Heading>
          <canvas id="canvas"></canvas>
        </Box>
      </ChakraProvider>
    </main>
  );
}

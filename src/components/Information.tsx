import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export const Information = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button fontSize={'lg'} bg={'yellow.200'} onClick={onOpen}>
        <InfoIcon />
        <Box ml={'8px'}>Information</Box>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={'gray.300'}>
          <ModalHeader>本サイトの今後について</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            本サイトは末廣が作成しているサイトです。
            <br />
            Next.jsとmicroCMSを使用しており、私のツールの理解度不足により一部素材の読み込みができていない部分等ありますが、
            少しずつ修正を加えてまいります。
            <br />
            至らぬ点が多いサイトとなっていますが、改めてご覧いただきありがとうございます。
          </ModalBody>

          <ModalFooter>
            <Button mr={3} bg={'yellow.200'} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

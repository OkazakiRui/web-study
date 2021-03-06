import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { VFC } from 'react';

type Props = {
  category: string;
};

const ArticleListLink: VFC<Props> = ({ category }) => (
  <NextLink href={category} passHref>
    <Flex
      as="a"
      href="/"
      w="fit-content"
      opacity="1"
      transition="opacity 0.2s"
      _hover={{
        opacity: '0.6',
      }}
    >
      <ArrowForwardIcon
        w="24px"
        h="24px"
        color="#fff"
        bg="main"
        m="0 12px 0 0"
        p="2px"
        borderRadius="50%"
      />
      <Text fontWeight="bold">記事一覧へ</Text>
    </Flex>
  </NextLink>
);

export default ArticleListLink;

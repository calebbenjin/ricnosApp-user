import { Box, Container, Flex } from '@chakra-ui/react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function ButtonGroup({ next, previous, bg, justify, mt }) {
  return (
    <Flex align='center' justify={justify} mt={mt}>
      <Box mt="2">
          <button onClick={previous} aria-hidden="Previous">
            <Box width="50px" height="2" borderRadius="md" bg="black" mr="2"></Box>
          </button>
          <button onClick={next} aria-hidden="Next">
            <Box width="50px" height="2" borderRadius="md" bg={!bg ? 'white' : 'red'} ml="2"></Box>
          </button>
        </Box>
    </Flex>
  );
}


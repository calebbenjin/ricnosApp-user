import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa';


const Rating = ({ rating }) => {
  const totalRating = [];

  for(let i = 0; i < 5; i++) {
    if(i < rating) {
      totalRating.push(
        <Box color="red"  key={i}>
          <FaStar style={{marginLeft: '10px'}} />
        </Box>
      )
    } else {
      totalRating.push(
        <Box color="grey" key={i}>
          <FaStar style={{marginLeft: '10px'}} />
        </Box>
      )
    }
  }

  return (
    <Box my="2">
      <Flex>{totalRating}</Flex>
    </Box>
  );
};

export default Rating;

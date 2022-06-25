import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

function NotFound(props) {
  return (
    <VStack backgroundColor='teal' d='flex' justifyContent='center' alignItems='center' width='100%' height='100vh'>>
      <Box>
        <Heading fontSize={'7rem'} color={'white'} justifyContent='center' alignItems={'center'}>
          404
        </Heading>
      </Box>
      <Box>
        <Text color={'white'} fontSize={'2rem'}>This page is not reachable :(</Text>
      </Box>
    </VStack>
  );
}

export default NotFound;
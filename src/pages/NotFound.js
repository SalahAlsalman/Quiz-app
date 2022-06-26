import React from 'react';
import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function NotFound(props) {
  const navigate = useNavigate()
  const goHomeClicked = ()=>{
    return navigate('/')
  }
  return (
    <VStack
      backgroundColor="teal"
      d="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <Box>
        <Heading
          fontSize={'7rem'}
          color={'white'}
          justifyContent="center"
          alignItems={'center'}
        >
          404
        </Heading>
      </Box>
      <Box>
        <Text color={'white'} fontSize={'2rem'}>
          This page is not reachable :(
        </Text>
        <Button
          onClick={goHomeClicked}
          boxShadow="dark-lg"
          width={['15rem', '20rem']}
          height="5rem"
          fontSize={['1.75rem', '2rem']}
          color="white"
          backgroundColor="whiteAlpha.400"
          borderRadius={15}
        >
          Go to home
        </Button>
      </Box>
    </VStack>
  );
}

export default NotFound;

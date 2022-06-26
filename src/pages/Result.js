import { Button, Heading, Stack, Text, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const Result = ({ username, score }) => {
  const navigate = useNavigate();

  const goHomeClicked = () => {
    return navigate('/');
  };

  return (
    <Stack
      spacing={10}
      backgroundColor="blue.300"
      d="flex"
      justifyContent="center"
      alignItems="center"
      width={"100%"}
      height="100vh"
    >
      <Box
        alignContent="center"
        textAlign="center"
        width={"30rem"}
        borderRadius={10}
        p={5}
      >
        <Heading color="white" fontSize={['3rem',"4rem"]}>
          Results:
        </Heading>
      </Box>
      <Box
        alignContent="center"
        textAlign="center"
        width={['15rem',"30rem"]}
        borderRadius={10}
        pt={5}
      >
        <Text fontSize="2rem" color="white">
          {username}: have scored a total of:
        </Text>
        <Text color="white" fontSize="2rem" mb={5}>
          {score} of 10
        </Text>
      </Box>
      <Button
        onClick={goHomeClicked}
        boxShadow="dark-lg"
        width={['15rem',"20rem"]}
        height="5rem"
        fontSize={['1.75rem',"2rem"]}
        color="white"
        backgroundColor="whiteAlpha.400"
        borderRadius={15}
      >
        Go to home
      </Button>
    </Stack>
  );
};

export default Result;

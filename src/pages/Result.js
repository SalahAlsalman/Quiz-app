import { Heading, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const Result = ({ username, score }) => {
  const navigate = useNavigate();

  return (
    <Stack
      backgroundColor="teal"
      d="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <Heading fontSize="4rem">Results:</Heading>
      <Text fontSize="2rem">
        <span color="white">{username}</span> have scored a total of:
      </Text>
      <Text fontSize="2rem">{score} of 10</Text>
    </Stack>
  );
};

export default Result;

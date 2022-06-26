import React from 'react';
import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function CategoryNotFound(props) {
  const navigate = useNavigate();
  const goHomeClicked = () => {
    return navigate('/');
  };
  return (
    <VStack
      backgroundColor="teal"
      d="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      spacing={[10,5]}
    >
      <Box>
        <Heading
          fontSize={['3rem','7rem']}
          color={'white'}
          justifyContent="center"
          alignItems={'center'}
        >
          404
        </Heading>
      </Box>
      <Box>
        <Text color={'white'} fontSize={['1.5rem','2rem']}>
          please try another category :(
        </Text>
      </Box>
      <Button
        onClick={goHomeClicked}
        boxShadow="dark-lg"
        width={['10rem','15rem', '20rem']}
        height={['3rem',"5rem"]}
        fontSize={['1.75rem', '2rem']}
        color="white"
        backgroundColor="whiteAlpha.400"
        borderRadius={[8,15]}
      >
        Go to home
      </Button>
    </VStack>
  );
}

export default CategoryNotFound;

import React from 'react';
import {
  VStack,
  GridItem,
  Text,
  Box,
  Button,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Question = ({
  currQuestion,
  currPossibleAnswers,
  selected,
  handleColorScheme,
  itemClicked,
  onQuitClick,
  onNextClick,
}) => {
  return (
    <VStack
      backgroundColor="teal"
      d="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <Grid
        w="60rem"
        h="300px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap="40px"
        marginBottom="10rem"
      >
        <GridItem colSpan={4} bg="white" height="200px">
          <Text mt={5} textAlign={'center'} fontSize={25}>
            {currQuestion}
          </Text>
        </GridItem>

        {currPossibleAnswers.map((answer, index) => {
          return (
            <GridItem borderRadius={15} height="100px" key={index} colSpan={2}>
              <Button
                backgroundColor={selected ? handleColorScheme(index) : 'white'}
                disabled={selected}
                onClick={itemClicked}
                key={index}
                width="29rem"
                height="100px"
                fontSize={20}
              >
                {answer}
              </Button>
            </GridItem>
          );
        })}
      </Grid>
      <Flex>
        <Button
          onClick={onQuitClick}
          colorScheme="red"
          mr="35px"
          mt="50px"
          width="29rem"
          fontSize="24"
          height="100px"
        >
          Quit
        </Button>
        <Button
          onClick={onNextClick}
          mt="50px"
          colorScheme="blue"
          fontSize="24"
          width="29rem"
          height="100px"
        >
          Next Question
        </Button>
      </Flex>
    </VStack>
  );
};

export default Question;

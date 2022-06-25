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
  correctAnswer,
  itemClicked,
  onQuitClick,
  onNextClick,
}) => {
  const handleSelect = i => {
    if (selected === i && selected === correctAnswer) {
      // return 'green';
      return 'red';
    } else if (selected === i && selected !== correctAnswer) {
      return 'green';
    } else if (i === correctAnswer) {
      return 'red';
    }
  };
  //   const isCorrectAnswer = currentAnswer && answer === correctAnswer;

  return (
    <VStack>
      <Grid
        w="60rem"
        h="300px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap="40px"
        marginBottom="10rem"
      >
        <GridItem
          colSpan={4}
          bg="blue.400"
          height="200px"
          borderRadius={15}
          overflow="auto"
          p={5}
        >
          <Text mt={5} textAlign={'center'} color="white" fontSize={25}>
            {currQuestion}
          </Text>
        </GridItem>

        {currPossibleAnswers.map((answer, index) => {
          return (
            <GridItem borderRadius={15} height="100px" key={index} colSpan={2}>
              <Button
                disabled={selected}
                onClick={itemClicked}
                className={`singleOption ${
                  selected === answer && selected === correctAnswer
                    ? 'red'
                    : selected === answer && selected !== correctAnswer
                    ? 'green'
                    : answer === correctAnswer
                    ? 'green'
                    : 'white'
                } `}
                key={index}
                bgColor="gray.600"
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

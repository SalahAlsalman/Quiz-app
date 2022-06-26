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
        w={['20rem',"60rem"]}
        h={["200px","300px"]}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap="40px"
        marginBottom="10rem"
      >
        <GridItem
          colSpan={4}
          bg="blue.400"
          height={['180px',"200px"]}
          borderRadius={15}
          overflow="auto"
          p={5}
        >
          <Text mt={5} textAlign={'center'} color="white" fontSize={[15,25]}>
            {currQuestion}
          </Text>
        </GridItem>

        {currPossibleAnswers.map((answer, index) => {
          return (
            <GridItem borderRadius={15} height={["50px","100px"]} width={['50px','100px']} marginRight={5} key={index} colSpan={2}>
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
                color="white"
                bgColor="gray.600"
                width={["10rem","29rem"]}
                height={['50px',"100px"]}
                fontSize={[17,20]}
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
          mr={["20px","35px"]}
          mt={["30px","50px"]}
          width={["10rem","29rem"]}
          fontSize={["18","24"]}
          height={["50px","100px"]}
          borderRadius={[20,10]}
        >
          Quit
        </Button>
        <Button
          onClick={onNextClick}
          mt={["30px","50px"]}
          colorScheme="blue"
          fontSize={["18","24"]}
          width={["10rem","29rem"]}
          height={["50px","100px"]}
          borderRadius={[20,10]}
        >
          Next Question
        </Button>
      </Flex>
    </VStack>
  );
};

export default Question;

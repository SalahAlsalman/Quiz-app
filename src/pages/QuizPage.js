import { React, useState, useEffect } from 'react';
import {
  VStack,
  GridItem,
  Text,
  Box,
  Button,
  Grid,
  Flex,
  Stack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';

function QuizPage({ score, setScore, apiQuestionsFromAPI }) {
  const [apiQuestions, setApiQuestions] = useState(apiQuestionsFromAPI);
  const [currQuestion, setCurrQuestion] = useState(apiQuestions[0].question);
  const [currPossibleAnswers, setCurrPossibleAnswers] = useState([
    apiQuestions[0].correct_answer,
    ...apiQuestions[0].incorrect_answers,
  ]);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(
    apiQuestions[0].correct_answer
  );
  const [userAnswers, setUserAnswers] = useState([]);
  const [showError, setShowError] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const navigate = useNavigate();

  const onQuitClick = () => {
    navigate('/');
  };

  const onNextClick = () => {
    if (selected) {
      if (currQuestionIndex === 9) {
        const numof = userAnswers.filter(e => {
          if (e === true) {
            return e;
          }
        });
        setScore(numof.length);
        console.log(numof.length);
        return navigate('/result');
      }
      setCurrQuestionIndex(currQuestionIndex + 1);
      setCurrQuestion(apiQuestions[currQuestionIndex + 1].question);
      setCurrPossibleAnswers([
        apiQuestions[currQuestionIndex + 1].correct_answer,
        ...apiQuestions[currQuestionIndex + 1].incorrect_answers,
      ]);
      setCorrectAnswer(apiQuestions[currQuestionIndex + 1].correct_answer);
      setSelected(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const itemClicked = e => {
    if (e.nativeEvent.target.innerText === correctAnswer) {
      setSelected(true);
      setUserAnswers([...userAnswers, true]);
      setCurrentAnswer(e.nativeEvent.target.innerText);
      console.log('here');
    } else {
      setSelected(true);
      setUserAnswers([...userAnswers, false]);
    }
  };

  //TODO: fix this color when pressed green
  const handleColorScheme = e => {
    // console.log(e);
    // if (selected) {
    //   return 'green';
    // }
    // return 'red';
  };

  return (
    <Stack
      backgroundColor="teal"
      d="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <Text fontSize={24} color="white" mb={5}>
        Current Questions: {currQuestionIndex + 1} / 10
      </Text>
      <Question
        currQuestion={currQuestion}
        currPossibleAnswers={currPossibleAnswers
          .map(answer => ({
            sort: Math.random(),
            value: answer,
          }))
          .sort((a, b) => a.sort - b.sort)
          .map(obj => obj.value)}
        selected={selected}
        itemClicked={itemClicked}
        onQuitClick={onQuitClick}
        onNextClick={onNextClick}
        currentAnswer={currentAnswer}
        correctAnswer={correctAnswer}
      />
      <Alert
        hidden={!showError}
        status="error"
        width="60rem"
        pt="25"
        alignContent="center"
        justifyContent="center"
        fontSize={24}
      >
        <AlertIcon />
        Please choose answer first!
      </Alert>
    </Stack>
  );
}

export default QuizPage;

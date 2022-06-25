import { React, useState, useEffect } from 'react';
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
import Question from '../components/Question';

function QuizPage(props) {
  const [apiQuestions, setApiQuestions] = useState([
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'Paul McCartney has always used his middle name. What is his real first name? ',
      correct_answer: 'James',
      incorrect_answers: ['John', 'Jack', 'Justin'],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Donald J. Trump&#039;s Middle Name is...',
      correct_answer: 'John',
      incorrect_answers: ['Jeff', 'Jerald', 'Jason'],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question: 'When was Elvis Presley born?',
      correct_answer: 'January 8, 1935',
      incorrect_answers: [
        'December 13, 1931',
        'July 18, 1940',
        'April 17, 1938',
      ],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Where was Kanye West born?',
      correct_answer: 'Atlanta, Georgia',
      incorrect_answers: [
        'Chicago, Illinois',
        'Los Angeles, California',
        'Detroit, Michigan',
      ],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What was the name of Marilyn Monroe&#039;s first husband?',
      correct_answer: 'James Dougherty',
      incorrect_answers: ['Joe Dimaggio', 'Kirk Douglas', 'Arthur Miller'],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question: 'In what year did &quot;Bob Ross&quot; die?',
      correct_answer: '1995',
      incorrect_answers: ['1986', '1989', '1997'],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Who is &quot;James Rolfe&quot; better known as?',
      correct_answer: 'The Angry Video Game Nerd',
      incorrect_answers: ['TotalBiscuit', 'PeanutButterGamer', 'PewDiePie'],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'Which American celebrity died in 1977 playing golf in La Moraleja, Madrid?',
      correct_answer: 'Bing Crosby',
      incorrect_answers: ['Elvis Presley', 'Charlie Chaplin', 'Groucho Marx'],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question: 'How old was Muhammad Ali when he died?',
      correct_answer: '74',
      incorrect_answers: ['61', 'He&#039;s still alive', '56'],
    },
    {
      category: 'Celebrities',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'What caused Jake Lloyd who played Anakin Skywalker in The Phantom Menace to quit acting?',
      correct_answer: 'Bullying',
      incorrect_answers: [
        'Criminal Record',
        'Nomination for Worst Actor',
        'Racism',
      ],
    },
  ]);
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
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onQuitClick = () => {
    navigate('/');
  };

  const onNextClick = () => {
    setCurrQuestionIndex(currQuestionIndex + 1);
    setCurrQuestion(apiQuestions[currQuestionIndex + 1].question);
    setCurrPossibleAnswers([
      apiQuestions[currQuestionIndex + 1].correct_answer,
      ...apiQuestions[currQuestionIndex + 1].incorrect_answers,
    ]);
    setCorrectAnswer(apiQuestions[currQuestionIndex + 1].correct_answer);
    setSelected(false);
  };

  const itemClicked = e => {
    if (e.nativeEvent.target.innerText === correctAnswer) {
      setSelected(true);
      setUserAnswers([...userAnswers, true]);
    } else {
      setSelected(false);
      setUserAnswers([...userAnswers, false]);
    }
  };

  const handleColorScheme = e => {
    if (selected) {
      console.log(e);
    }
    return 'red';
  };

  return (
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
      handleColorScheme={handleColorScheme}
      itemClicked={itemClicked}
      onQuitClick={onQuitClick}
      onNextClick={onNextClick}
    />
  );
}

export default QuizPage;

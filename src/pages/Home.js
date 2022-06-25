import { React, useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Input,
  Stack,
  Select,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import QuizImage from '../img/quiz.svg';

const Home = ({ setUsername, username, score, setScore }) => {
  const [difficultyOptions] = useState(['easy', 'medium', 'hard']);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [categoryOption, setCategoryOption] = useState('');
  const [difficultOption, setDifficultOption] = useState('');
  const [apiQuestions, setApiQuestions] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategoryOptionsAPI = async () => {
      const request = await fetch('https://opentdb.com/api_category.php');
      const data = await request.json();
      if (request.status === 200) {
        setCategoryOptions(data.trivia_categories);
      } else {
        setErrorStatus(true);
      }
    };
    fetchCategoryOptionsAPI();
  }, []);

  const handleStartQuizButton = () => {
    try {
      const fetchQuizFromAPI = async () => {
        const request = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${categoryOption}&difficulty=${difficultOption}&type=multiple`
        );
        const data = await request.json();
        if (request.status === 200) {
          setApiQuestions(data.results);
          navigate('/quizpage');
        } else {
          setErrorStatus(true);
        }
      };
      fetchQuizFromAPI();
    } catch (e) {
      console.log(e);
    }
  };

  const handleOptionOnChange = e => {
    let option = e.target.value;
    categoryOptions.map(e => {
      if (e.name === option) {
        setCategoryOption(e.id);
      }
    });
  };

  return (
    <>
      <HStack
        backgroundColor="teal"
        d="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
      >
        <Box>
          <Stack spacing={4} marginX={4} minWidth={'10rem'} width={'30rem'}>
            <Heading color="white" alignSelf="center" mb={5}>
              Quiz Settings
            </Heading>
            <HStack>
              <FormControl>
                <FormLabel fontSize={21} color={'white'}>
                  Username:
                </FormLabel>
                <Input
                  color="white"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  variant="outline"
                  placeholder="Enter your username"
                  _placeholder={{ opacity: 0.4, color: 'white' }}
                />
              </FormControl>
            </HStack>
            <Select
              onChange={handleOptionOnChange}
              bg={'white'}
              marginTop={10}
              boxShadow="base"
              placeholder="Select category"
            >
              {categoryOptions.map((option, index) => {
                return <option key={index}>{option.name}</option>;
              })}
            </Select>
            <Select
              onChange={e => setDifficultOption(e.target.value)}
              placeholder="Select difficulty"
              bg={'white'}
            >
              {difficultyOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Button onClick={handleStartQuizButton} colorScheme="blue">
              Start Quiz!
            </Button>
            {errorStatus ? (
              <Alert status="error">
                <AlertIcon />
                There was an error processing your request, please try again
              </Alert>
            ) : (
              ''
            )}
          </Stack>
        </Box>
        <Box width="50%">
          <Image src={QuizImage} />
        </Box>
      </HStack>
    </>
  );
};

export default Home;

import { React, useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Stack,
  Select,
  Button,
  FormControl,
  FormLabel, FormHelperText,
} from '@chakra-ui/react';
import Image from '../img/quiz.svg';

const Home = () => {
  const [difficultyOptions] = useState(['Easy', 'Medium', 'Hard']);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchCategoryOptionsAPI = async () => {
      const request = await fetch('https://opentdb.com/api_category.php');
      const data = await request.json();
      setCategoryOptions(data.trivia_categories);
    };
    fetchCategoryOptionsAPI();
  }, []);


  return (
    <>
      <HStack backgroundColor='teal' justifyContent='center' alignItems='center' width='50%' height='100vh'>
        <Stack spacing={4} marginX={4} minWidth={'10rem'} width={'30rem'}>
          <Heading color='white' alignSelf='center' mb={5}>Quiz Settings</Heading>
          <HStack>
            <FormControl>
              <FormLabel fontSize={21} color={'white'}>Username:</FormLabel>
              <Input color='white'
                     value={username} onChange={(e) => setUsername(e.target.value)} variant='outline'
                     placeholder='Enter your username' _placeholder={{ opacity: 0.4, color: 'white' }} />
            </FormControl>
          </HStack>
          <Select bg={'white'} marginTop={10} boxShadow='base' placeholder='Select category'>
            {categoryOptions.map((option, index) => {
              return (<option key={index}>{option.name}</option>);
            })}
          </Select>
          <Select placeholder='Select difficulty'
                  bg={'white'}>
            {difficultyOptions.map((option, index) => <option key={index} value={option}>{option}</option>)}
          </Select>
          <Button colorScheme='blue'>Start Quiz!</Button>
        </Stack>
      </HStack>
      <HStack backgroundColor='black' alignItems='center' justifyContent='center' width='50%'
              height='100vh'>

      </HStack>
    </>
  );
};

export default Home;
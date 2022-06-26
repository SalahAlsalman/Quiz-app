import { React, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QuizPage from './pages/QuizPage';
import Result from './pages/Result';
import CategoryNotFound from './pages/CategoryNotFound';

function App() {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [apiQuestions, setApiQuestions] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              username={username}
              setUsername={setUsername}
              setApiQuestions={setApiQuestions}
            />
          }
        />
        <Route
          path="/quizpage"
          element={
            <QuizPage
              score={score}
              setScore={setScore}
              apiQuestionsFromAPI={apiQuestions}
            />
          }
        />
        <Route
          path="/result"
          element={<Result score={score} username={username} />}
        />
        <Route path="/categorynotfound" element={<CategoryNotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

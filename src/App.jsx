import { Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {

  return (
    <Flex width="100%" minH="100vh" direction="column" bg="black">
      <Navbar />
      <Box flex={1}>
        <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/projects" element = {<ProjectsPage />} />
          </Routes>
      </Box>
    </Flex>
  )
}

export default App

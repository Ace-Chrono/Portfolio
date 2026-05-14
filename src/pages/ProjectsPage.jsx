import { Container, Flex, Heading, Box, Center, Button, Text, Link } from "@chakra-ui/react";
import FidhackImg from '../assets/herfund.jpg'
import ServerImg from '../assets/server.png'
import EpithetImg from '../assets/Epithet.png';
import AffilialImg from '../assets/Affilial.png';
import WebifyImg from '../assets/Webify.png';

const ProjectsPage = () => {
    return (
        <Container
            maxW="100vw"
            minH="100vh"
            bgGradient="to-b"
            gradientFrom="#0b132b" 
            gradientTo="#3a506b"
            color="white"
            py={8}
        >
            <Heading as = {"h1"} size = {"2xl"} textAlign = {"center"} mt={8}>
                Projects
            </Heading>
            <Flex flexDir={"row"} justify={"center"} mt={8} columnGap={4} rowGap={4} flexWrap="wrap">
                <Flex 
                    flexDir={"column"} 
                    maxWidth={400}
                    padding={4}
                    borderWidth="2px"
                    borderColor="gray.700"
                    borderRadius="md"
                    bg="gray.900"
                >
                    <img
                        src={FidhackImg}
                    ></img>
                    <Flex flexDir={"column"} rowGap={4} justifyContent="space-between" flex="1">
                        <Box>
                            <Text fontWeight="bold" fontSize={"xl"} mt={4}>
                                Fidhacks
                            </Text>
                            <Text fontSize = {"md"} mt={4}>
                                Worked on a FastAPI and React app for the 2026 Fidhacks. 
                            </Text>
                        </Box>
                        
                        <Button
                            as={Link}
                            href="https://devpost.com/software/herfund-73jugz"
                            target="_blank"
                            width={100}
                            bg="white"
                            color="black"
                            mt={4}
                        >
                            Visit
                        </Button>
                    </Flex>
                </Flex>

                <Flex 
                    flexDir={"column"} 
                    maxWidth={400}
                    padding={4}
                    borderWidth="2px"
                    borderColor="gray.700"
                    borderRadius="md"
                    bg="gray.900"
                >
                    <img
                        src={ServerImg}
                    ></img>
                    <Flex flexDir={"column"} rowGap={4} justifyContent="space-between" flex="1">
                        <Box>
                            <Text fontWeight="bold" fontSize={"xl"} mt={4}>
                                Java HTTP Server
                            </Text>
                            <Text fontSize = {"md"} mt={4}>
                                Created a HTTP server from scratch using a restricted set of libraries to enhance personal learning. 
                            </Text>
                        </Box>
                        
                        <Button
                            as={Link}
                            href="https://github.com/Ace-Chrono/Java-HTTP-Server"
                            target="_blank"
                            width={100}
                            bg="white"
                            color="black"
                            mt={4}
                        >
                            Github
                        </Button>
                    </Flex>
                </Flex>

                <Flex 
                    flexDir={"column"} 
                    maxWidth={400}
                    padding={4}
                    borderWidth="2px"
                    borderColor="gray.700"
                    borderRadius="md"
                    bg="gray.900"
                >
                    <img
                        src={WebifyImg}
                    ></img>
                    <Flex flexDir={"column"} rowGap={4} justifyContent="space-between" flex="1">
                        <Box>
                            <Text fontWeight="bold" fontSize={"xl"} mt={4}>
                                Webify
                            </Text>
                            <Text fontSize = {"md"} mt={4}>
                                A Chrome Extension inspired by the Arc Browser's boost functionality. Accompanied with a website where users can upload and download themes.
                            </Text>
                        </Box>
                        
                        <Button
                            as={Link}
                            href="https://webify-website.vercel.app/"
                            target="_blank"
                            width={100}
                            bg="white"
                            color="black"
                            mt={4}
                        >
                            Live Now
                        </Button>
                    </Flex>
                </Flex>

                <Flex 
                    flexDir={"column"} 
                    maxWidth={400}
                    padding={4}
                    borderWidth="2px"
                    borderColor="gray.700"
                    borderRadius="md"
                    bg="gray.900"
                >
                    <img
                        src={AffilialImg}
                    ></img>
                    <Flex flexDir={"column"} rowGap={4} justifyContent="space-between" flex="1">
                        <Box>
                            <Text fontWeight="bold" fontSize={"xl"} mt={4}>
                                Affilial
                            </Text>
                            <Text fontSize = {"md"} mt={4}>
                                A desktop application to allow school CTE departments to store information about business and commnunity partners. 
                            </Text>
                        </Box>
                        <Button 
                            as={Link}
                            href="https://youtu.be/KG52GX8I9hc"
                            target="_blank"
                            width={100}
                            bg="white"
                            color="black"
                            mt={4}
                        >
                            Demo
                        </Button>
                    </Flex>
                </Flex>

                <Flex 
                    flexDir={"column"} 
                    maxWidth={400}
                    padding={4}
                    borderWidth="2px"
                    borderColor="gray.700"
                    borderRadius="md"
                    bg="gray.900"
                >
                    <img
                        src={EpithetImg}
                    ></img>
                    <Flex flexDir={"column"} rowGap={4} justifyContent="space-between" flex="1">
                        <Box>
                            <Text fontWeight="bold" fontSize={"xl"} mt={4}>
                            Epithet
                            </Text>
                            <Text fontSize = "md" mt={4}>
                                A 2d Unity typing game inspired by Tetris, MonkeyType, etc. 
                            </Text>
                        </Box>
                        
                        <Button 
                            as={Link}
                            href="https://neuro7.itch.io/epithet"
                            target="_blank"
                            width={100}
                            bg="white"
                            color="black"
                            mt={4}
                        >
                            Live Now
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};

export default ProjectsPage;
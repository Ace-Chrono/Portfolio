import { Box, Button, Text, Container, Flex, Heading, Image, IconButton, Link  } from "@chakra-ui/react";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("work");

    return (
        <Container
            maxW="100vw"
            minH="100vh"
            bgGradient="to-b"
            gradientFrom="#0b132b" 
            gradientTo="#3a506b"
            py={8}
        >
            {/* Heading */}
            <Heading as = {"h1"} size = {"3xl"} textAlign = {"center"} mt={8}>
                👋 Hello, I am Richard Zhao
            </Heading>
            <Text size = {"l"} textAlign = {"center"} mt={4}>
                19 year old Undergrad; Intern @ Aosenuma; NC, USA
            </Text>
            <Text size = {"l"} textAlign = {"center"}>
                Experience in Fullstack and AI, focus in Backend/DevOps.
            </Text>

            <Flex direction={"column"} align={"center"} mt={4}>
                {/* Contact Buttons Row */}
                <Flex direction={"row"}>
                    <IconButton
                        as={Link}
                        href="mailto:richardszhao@gmail.com"
                        aria-label="Email"
                        size="lg"
                        isRound
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                        _active={{ bg: "transparent" }}
                        _focus={{ boxShadow: "none" }}
                    >
                        <MdEmail color={"white"} />
                    </IconButton>

                    <IconButton
                        as={Link}
                        href="https://github.com/Ace-Chrono"
                        aria-label="GitHub"
                        size="lg"
                        isRound
                        target="_blank"
                        color={"black"}
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                        _active={{ bg: "transparent" }}
                        _focus={{ boxShadow: "none" }}
                    >
                        <FaGithub color={"white"} />
                    </IconButton>

                    <IconButton
                        as={Link}
                        href="https://www.linkedin.com/in/richard-zhao-a0795227b/"
                        aria-label="LinkedIn"
                        size="lg"
                        isRound
                        target="_blank"
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                        _active={{ bg: "transparent" }}
                        _focus={{ boxShadow: "none" }}
                    >
                        <FaLinkedin color={"white"}/>
                    </IconButton>
                </Flex>

                {/* Technologies Row */ }
                <Box
                    mt={8}
                    p={4}
                    borderWidth="2px"
                    borderColor="gray.700"
                    borderRadius="md"
                    bg="gray.900"
                    w="full"
                    maxW="600px"
                    >
                    <Heading as="h3" size="md" textAlign="center" mb={4}>
                        Main Technologies
                    </Heading>

                    <Flex justify="center" flexWrap="wrap" gap={6}>
                        {/* React */}
                        <Flex direction="column" align="center">
                            <Image
                                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                                alt="React"
                                boxSize="40px"
                            />
                            <Text fontSize="sm" color="gray.300" mt={2}>
                                React
                            </Text>
                        </Flex>

                        {/* Express */}
                        <Flex direction="column" align="center">
                            <Image
                                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                                alt="Express"
                                boxSize="40px"
                            />
                            <Text fontSize="sm" color="gray.300" mt={2}>
                                Express
                            </Text>
                        </Flex>

                        {/* Node.js */}
                        <Flex direction="column" align="center">
                            <Image
                                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                                alt="Node.js"
                                boxSize="40px"
                            />
                            <Text fontSize="sm" color="gray.300" mt={2}>
                                Node.js
                            </Text>
                        </Flex>

                        {/* Flask */}
                        <Flex direction="column" align="center">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s"
                                alt="Flask"
                                boxSize="40px"
                                borderRadius="full"
                            />
                            <Text fontSize="sm" color="gray.300" mt={2}>
                                Flask
                            </Text>
                        </Flex>

                        {/* Supabase */}
                        <Flex direction="column" align="center">
                            <Image
                                src="https://miro.medium.com/v2/0*QzPzYLTNRX7p5Rsl"
                                alt="Supabase"
                                boxSize="40px"
                                borderRadius="full"
                                objectFit="cover"
                            />
                            <Text fontSize="sm" color="gray.300" mt={2}>
                                Supabase
                            </Text>
                        </Flex>

                        {/* MongoDB */}
                        <Flex direction="column" align="center">
                            <Image
                                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                                alt="MongoDB"
                                boxSize="40px"
                            />
                            <Text fontSize="sm" color="gray.300" mt={2}>
                                MongoDB
                            </Text>
                        </Flex>

                        {/* MySQL */}
                        <Flex direction="column" align="center">
                            <Image
                                src="https://logoeps.com/wp-content/uploads/2012/03/mysql-vector1.jpg"
                                alt="MySQL"
                                boxSize="40px"
                                borderRadius="full"
                            />
                            <Text fontSize="sm" color="gray.300" mt={2}>
                                MySQL
                            </Text>
                        </Flex>

                        
                    </Flex>
                </Box>

                {/* Work and Education Box */}
                <Flex direction={"column"} mt={8} w="full" maxW="600px" align="center" gap={2}>
                    <Flex 
                        width="100%" 
                        columnGap={2} 
                        padding={1} 
                        borderWidth="2px"
                        borderColor="gray.700"
                        borderRadius="md"
                        bg="gray.900"

                        >
                        <Button 
                            flex={1}
                            onClick={() => setActiveTab("work")}
                            bg={activeTab === "work" ? "black" : "transparent"}
                            color={"white"}
                        >Work</Button>
                        <Button 
                            flex={1}
                            onClick={() => setActiveTab("education")}
                            bg={activeTab === "education" ? "black" : "transparent"}
                            color={"white"}
                        >Education</Button>
                    </Flex>

                    <Box 
                        width="100%" 
                        borderWidth="2px"
                        borderColor="gray.700"
                        borderRadius="md"
                        bg="gray.900"

                        mb={8}
                    >
                        {activeTab === "work" ? (
                            <Box m={4}>
                                <Flex 
                                    align="top" 
                                    gap={4} 
                                    mb={6}
                                    >
                                    {/* Left: Company / Role Image */}
                                    <Image 
                                        src="https://media.licdn.com/dms/image/v2/D4E0BAQEi67L61C9nXQ/company-logo_200_200/company-logo_200_200/0/1695254717128/aosenuma_logo?e=1762992000&v=beta&t=eo6X9FQjxFoPP6vYwl4Ao2wQgQZarDJ9uprQIAkYkDk" 
                                        alt="Aosenuma Logo" 
                                        boxSize="60px" 
                                        borderRadius="full" 
                                        objectFit="cover"
                                    />

                                    {/* Right: Job Details */}
                                    <Flex direction="column">
                                        <Text fontWeight="bold" fontSize="lg">
                                            AI Developer Intern
                                        </Text>
                                        <Text fontSize="md" color="gray.400">
                                            Aosenuma | Sep 2025 - Present
                                        </Text>
                                        <Text fontSize="sm" color="gray.500">
                                            • Developed unit tests for the Longev.AI Flask backend endpoints and authentication middleware.
                                        </Text>
                                        <Text fontSize="sm" color="gray.500">
                                            • Created middleware to track endpoint usage to debug and removed unused and deprecated endpoints.
                                        </Text>
                                        <Text fontSize="sm" color="gray.500">
                                            • Gained experience with backend refactoring practices and CI/CD pipeline development.
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Flex align="top" gap={4}>
                                    <Image 
                                        align="flex-start"
                                        src="https://uncw.edu/_global/img/uncw-logo-navy_222x222.svg" 
                                        alt="UNCW Logo" 
                                        boxSize="60px" 
                                        borderRadius="full" 
                                        objectFit="cover"
                                    />

                                    <Flex direction="column">
                                        <Text fontWeight="bold" fontSize="lg">
                                            Research Analyst
                                        </Text>
                                        <Text fontSize="md" color="gray.400">
                                            UNCW | Feb 2024 - Aug 2025
                                        </Text>
                                        <Text fontSize="sm" color="gray.500">
                                            • Developed deep learning-based image pipelines using YOLO and SAM (Segment Anything Model) to analyze coral recruit and lesion recovery growth.
                                        </Text>
                                        <Text fontSize="sm" color="gray.500">
                                            • Built AI training pipelines with PyTorch, utilizing NumPy and Pandas for data preprocessing, Roboflow for data annotation, and Matplotlib for visualization.
                                        </Text>
                                        <Text fontSize="sm" color="gray.500">
                                            • Provided custom AI-driven annotation tools to the UNCW Coral REEF Lab, Labs at NSU, the Mote Marine Lab, and the Florida Aquarium, reducing annotation time by up to 20x and reducing reliance on commercial solutions costing in the thousands.
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        ) : (
                            <Box m={4}>
                                <Flex 
                                    align="top" 
                                    gap={4} 
                                    mb={6}
                                    >
                                    {/* Left: Company / Role Image */}
                                    <Image 
                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg/1200px-University_of_North_Carolina_at_Chapel_Hill_seal.svg.png" 
                                        alt="UNC Logo" 
                                        boxSize="60px" 
                                        borderRadius="full" 
                                        objectFit="cover"
                                    />

                                    {/* Right: Job Details */}
                                    <Flex direction="column">
                                        <Text fontWeight="bold" fontSize="lg">
                                            Undergraduate Student
                                        </Text>
                                        <Text fontSize="md" color="gray.400">
                                            Computer Science | Expected May 2029
                                        </Text>
                                        <Text fontSize="sm" color="gray.500">
                                            • Relevant Coursework:  Intro to Programming, Calculus of Functions of One Variable 1 and 2, Data Structures and Algorithms, Discrete Math
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        )}
                    </Box>
                </Flex>
            </Flex>

        </Container>
    );
};

export default HomePage;
import { Container, Flex, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Container maxW="100%" px={4} bg = "black">
            <Flex alignItems="center" justifyContent="center" flexDir={{ base: 'column', sm: 'row' }} columnGap={4} py={4}> 
                <Link to="/">
                    <Button 
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                        _active={{ bg: "transparent" }}
                        _focus={{ boxShadow: "none" }}
                        color={"white"}
                    >
                        Home
                    </Button>
                </Link>
                <Link to="/projects">
                    <Button
                        bg="transparent"
                        _hover={{ bg: "transparent" }}
                        _active={{ bg: "transparent" }}
                        _focus={{ boxShadow: "none" }}
                        color={"white"}
                    >
                        Projects
                    </Button>
                </Link>
            </Flex>
        </Container>
    );
};

export default Navbar;
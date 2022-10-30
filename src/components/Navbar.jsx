import { Box, Flex, Text, Image, List } from "@chakra-ui/react";

export default function Navbar() {
    return(
        <Box bgColor='blue.500' p='2'>
            <Flex>
                <img src='../assets/logo.svg'/>
            </Flex>
        </Box>
    )
}
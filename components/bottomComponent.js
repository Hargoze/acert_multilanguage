import { Box, Text, Stack, IconButton, Icon, Image, Link, Flex, Button} from "@chakra-ui/core";
import { FiLogIn} from "react-icons/fi"
import { BsCalendar} from "react-icons/bs"
import { GrLogin } from "react-icons/gr"
import { IconContext } from "react-icons/lib";

export const BottomComponent = () => {
    return (
        <Flex 
                pos="fixed" 
                bottom="0"
                right="0"
                zIndex="100"
                w="100%"
                align="center"
                justify="center"
                bg="acert_red"
            >
            <Flex 
                display={{base:"flex", lg:"none"}} 
                justify="space-around"
                w={{base:"80%", sm:"60%", md:"40%"}}
                align="center" 
                h="24"
                color="white"
                fontSize="22px"
            >
                <Stack align="center" justify="center" pl={{base:"8", sm:"4", md:"0"}} pt="2">
                   <Box as={FiLogIn}  size="44px"/>
                   <Text fontWeight="bold">Login</Text>
                </Stack>
                <Stack align="center" justify="space-around" pr={{base:"6", sm:"3", md:"0"}} pt="2">
                   <Box as={BsCalendar}  size="44px"/>
                   <Text fontWeight="bold">Get a demo</Text>
                </Stack>
            </Flex>
        </Flex>
    )
}
import { Box, Text, Stack, IconButton, Icon, Image, Link, Flex, Button, PseudoBox} from "@chakra-ui/core";
import { GrPowerReset } from "react-icons/gr"
import { BsFillCameraVideoFill } from "react-icons/bs"
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'
import Presentation from "../components/Iframe"

export const SideComponent = ({link, line1, line2}) => {
    //const iframe='<iframe src="https://www.videoask.com/fscbruyc6" allow="camera *; microphone *; autoplay *; encrypted-media *;" width="100%" height="600px" style="border: none; border-radius: 24px"></iframe>'
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    return (
    <Stack
            pos="fixed" 
            bottom="40" 
            right="0"
            zIndex="100"
            align="flex-end"
            display={{base:"none", lg:"flex"}}
            mr="4"
        > 
        <Link href={link} _hover={{textDecoration:"none"}}>
            <Flex 
                bg="white"
                p="2"
                rounded="lg"
                align="center"
                justify="start"
                bg="gray.100"
                w="290px"
                border="1px" borderRadius="md" borderColor="primary.200"
            >
                <Icon name="repeat" color="primary.500" size="32px"/>
                <Box textAlign="left" pl="4">
                    <Text color="primary.500" fontSize="15px" maxWidth="160px">{line1}</Text>
                    <Text color="primary.500" fontSize="21px" fontWeight="bold">{line2}</Text>
                </Box>
            </Flex>
        </Link> 
        <Flex 
            bg="white"
            p="2"
            rounded="lg"
            align="center"
            justify="start"
            w="290px"
            border="1px" borderRadius="md" borderColor="primary.200"
            as="button"
            bg="gray.100"
            onClick={handleToggle}
            _active={{
                border:"0px",
            }}
            _focus={{
                border:"0px",
            }}
            >
            <Icon name={show ? "chevron-right" : "chevron-left"} color="primary.500" size="32px"/>
            <Box textAlign="left" pl="4">
                <Text color="primary.500" fontSize="15px" maxWidth="160px">You have a question ?</Text>
                <Text color="primary.500" fontSize="21px" fontWeight="bold">talk to us</Text>
            </Box>
            <Box as={BsFillCameraVideoFill} ml="8" color="primary.500" size="32px" />
            <Presentation show={show}/>
        </Flex>
    </Stack>
    )
}
import { Box, Text, Stack, IconButton, Icon, Image, Link, Flex, Input} from "@chakra-ui/core";
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'

const Presentation = ({show}) => {
    return (
        <Box 
        pos="fixed" bottom="160px" right="300px"
        zIndex="200"
        bg="purple.600"
        w="360px"
        h="600px"
        display={show ? "block" : "none"}
        >
            <ReactPlayer url="https://www.youtube.com/embed/dQw4w9WgXcQ"
            width="100%"
            height="100%"
            playing={show}
            muted={!show}
            />
            <Input placeholder="Talk to us !"/>
        </Box>
    )
}

export default Presentation
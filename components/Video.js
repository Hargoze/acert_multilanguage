import React from 'react'
import ReactPlayer from 'react-player'
import { Flex, Heading, Stack, Box, Text, Button, SimpleGrid, Image, Grid} from '@chakra-ui/core'

const Video = ({width}) => {
        return (
          <Box 
            rounded="20px" 
            overflow="hidden" 
            my="6" 
            w={width}
          >
                <ReactPlayer
                url= 'video-home-last.mp4'
                controls = {true}
                playing={true}
                muted={true}
                loop={true}
                width="100%"
                height="100%"
                />
          </Box>
        )
    }

export default Video
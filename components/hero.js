import { Flex, Heading, Stack, Box, Text, Button, SimpleGrid, Image, Grid} from '@chakra-ui/core'
import Video from "./Video"
import React from 'react'

export const Hero = () => (
  <Stack align="center" justify="center" w="100%" bgImage="url('/circles.svg')" bgRepeat="no-repeat" bgSize="full">
    <Stack align="center" justify="center" maxW={{base:"100%", lg:"75%"}} mt="12">
      <Stack mt="7rem" justify="space-between" align="center" textAlign="center" color="black" w="100%">
          <Heading px="5" fontSize={{base:"46px", sm:"64px", md:"84px", lg:"115px"}} fontWeight="900">The next generation of B2B prospecting</Heading>
      </Stack>
      <Stack w="66%" align="center">
        <Text py="8" fontSize={{base:"22px", sm:"27px", lg:"32px"}}>
          Bloobirds prospecting platform guides sales development representatives through their workday and helps sales leaders make better decisions.
        </Text>
        <Flex align="center">
          <Box>
            <Button bg="white" color="red.500" border="2px" borderColor="red.400" px="12" py="6" fontSize="32px" textTransform="uppercase" _hover={{bg:"primary.50"}} _active={{bg:"primary.100"}}>Get a demo</Button>
          </Box>
        </Flex>
        <Video width={{base: "250px",sm:"450px", md:"750px"}}/>
      </Stack>
    </Stack>
  </Stack>
)

import React from "react";
import Newsletter from "../components/newsletter"
import Grid from "../components/grid"
import Social from "../components/social"
import { Box, Stack, Text, Link, Button, List, ListItem, Image, Flex, SimpleGrid} from "@chakra-ui/core";

const Footer = () => {

  return (
  <Stack bg="acert_gray" w="100%" justify="center" alignItems="center" color="white" alignContent="space-between" pb={{base:"24", lg:"0"}}>
    <Grid />
    <Stack align="center" justify="center" w="flex" w="100%" mt="5" pb="4" borderTop="1px" borderColor="yellow.800" display={{base:"none", lg:"flex"}}>
      <Stack pt="4" align="center" justify="center">
        <Image src="/WhiteSlogan.svg" alt="Acert Logo" w="300px"/>
        <Stack fontSize="md" as="ins" isInline justify="space-around" pb="2" w="xs">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Security</Link>
        </Stack>
      </Stack>    
    </Stack>
    <SimpleGrid columns={{xs:"1", lg:"2"}} w={{xs:"100%", lg:"75%", xl:"60%"}} spacingX="10" >
      <Social />
      <Newsletter />
    </SimpleGrid>
  </Stack>
  )
}


export default Footer
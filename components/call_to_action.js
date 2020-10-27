import { Box, Stack, Text, Link, Button, Heading, List, ListItem, Image, Flex} from "@chakra-ui/core";

export const CallToAction = () => {
    return (
        <Stack justify="space-around" textAlign="center" align="center" w="100%" h="350px" bg="acert_red" bgImage="url('/bg-footer.png')" bgSize="100%" backgroundRepeat="no-repeat" color="white" display={{base:"none", lg:"flex"}} py="10">
          <Heading px="5" fontSize={{base:"32px", sm:"40px", lg:"6xl"}} fontWeight="900">Ready to see your team triumph?</Heading>
          <Box maxWidth="80%">
            <Text fontSize={{base:"14px", sm:"26px"}}>Cut SDR onboarding time in-half, multiply their results, and drive revenue.</Text>
          </Box>
          <Box>
            <Button variantColor="gray" textTransform="uppercase" size="lg" color="black" px="12" py="4" color="primary.700">Request a demo</Button>
          </Box>
        </Stack>
    )
}
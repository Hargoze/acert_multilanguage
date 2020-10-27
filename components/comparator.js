import { Box, Button, Image, Flex, Icon, SimpleGrid, Stack, Text, Heading, PseudoBox} from "@chakra-ui/core";

const Checkbox = ({status}) => {
    return (
        <Stack w={{base:"191px", sm:"248px", lg:"303px"}} h={{base:"51px", sm:"66px", lg:"81px"}} justify="center" align="center">
            <Icon 
                name={status === true ? "close" : "check"}
                color={status === true ? "red.400" : "green.400"}
                />
        </Stack>
    )
}

export const Comparator = () => {
    return (
        <Stack fontSize={{base:"17px", sm:"22px", lg:"27px"}} textAlign="center" className="hscroll">
            <Box w={{base:"250px", sm:"400px", md:"700px", lg:"auto"}} overflow="auto">
                <PseudoBox _even={{ bg: "gray.100" }} w={{base:"737px", sm:"956px", lg:"1169px"}}>
                    <Flex align="center" >
                        <Box w={{base:"355px", sm:"460px", lg:"563px"}} h={{base:"51px", sm:"66px", lg:"81px"}}></Box>
                        <Box w={{base:"191px", sm:"248px", lg:"303px"}} h={{base:"51px", sm:"66px", lg:"81px"}}>concurrent 1</Box>
                        <Box w={{base:"191px", sm:"248px", lg:"303px"}} h={{base:"51px", sm:"66px", lg:"81px"}}>concurrent 2</Box>
                        <Box w={{base:"191px", sm:"248px", lg:"303px"}} h={{base:"51px", sm:"66px", lg:"81px"}}>concurrent 3</Box>
                        <Box w={{base:"191px", sm:"248px", lg:"303px"}} h={{base:"51px", sm:"66px", lg:"81px"}}>acert.io</Box>
                    </Flex>
                </PseudoBox>
                <PseudoBox _even={{ bg: "gray.100" }} w={{base:"737px", sm:"956px", lg:"1169px"}}>
                    <Flex>
                        <Stack w={{base:"355px", sm:"460px", lg:"563px"}} h={{base:"51px", sm:"66px", lg:"81px"}} justify="center" textAlign="start" pl="2">
                            <Text>Fully self hosted</Text>
                        </Stack>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                    </Flex>
                </PseudoBox>
                <PseudoBox _even={{ bg: "gray.100" }} w={{base:"737px", sm:"956px", lg:"1169px"}}>
                    <Flex align="center">
                        <Stack w={{base:"355px", sm:"460px", lg:"563px"}} h={{base:"51px", sm:"66px", lg:"81px"}} justify="center" textAlign="start" pl="2">
                            <Text>Open Source code</Text>
                        </Stack>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                    </Flex>
                </PseudoBox>
                <PseudoBox _even={{ bg: "gray.100" }} w={{base:"737px", sm:"956px", lg:"1169px"}}>
                    <Flex>
                        <Stack w={{base:"355px", sm:"460px", lg:"563px"}} h={{base:"51px", sm:"66px", lg:"81px"}} justify="center" textAlign="start" pl="2">
                            <Text>Data can be exported</Text>
                        </Stack>
                        <Checkbox status={false}/>
                        <Checkbox status={false}/>
                        <Checkbox status={false}/>
                        <Checkbox status={false}/>
                    </Flex>
                </PseudoBox>
                <PseudoBox _even={{ bg: "gray.100" }} w={{base:"737px", sm:"956px", lg:"1169px"}}>
                    <Flex>
                        <Stack w={{base:"355px", sm:"460px", lg:"563px"}} h={{base:"51px", sm:"66px", lg:"81px"}} justify="center" textAlign="start" pl="2">
                            <Text>Users can see and manage own data</Text>
                        </Stack>
                        <Checkbox status={false}/>
                        <Checkbox status={false}/>
                        <Checkbox status={false}/>
                        <Checkbox status={false}/>
                    </Flex>
                </PseudoBox>
                <PseudoBox _even={{ bg: "gray.100" }} w={{base:"737px", sm:"956px", lg:"1169px"}}>
                    <Flex>
                        <Stack w={{base:"355px", sm:"460px", lg:"563px"}} h={{base:"51px", sm:"66px", lg:"81px"}} justify="center" textAlign="start" pl="2">
                            <Text>Opt in only data collection</Text>
                        </Stack>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                        <Checkbox status={true}/>
                    </Flex>
                </PseudoBox>
            </Box>
        </Stack>
    )
}

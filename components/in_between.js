import { Flex, Stack, Box, Text, Image, Heading, SimpleGrid, IconButton, Button, Link, PseudoBox} from '@chakra-ui/core'
import {Comparator } from "../components/comparator"
import { FaChalkboard } from 'react-icons/fa'
//import { chakra } from '@chakra-ui/core'

const GridCaps = ({img, text1, text2}) => {
  return (
      <Stack isInline >
        <Image src={img} size={{base:"70px", lg:"102px"}} alt={text2}/>
          <Box maxWidth="70%">
            <Text fontWeight="semibold" fontSize={{base:"20px", sm:"25px", lg:"30px"}} color="acert_darkblue2">{text1}</Text>
            <Text fontWeight="semibold" fontSize={{base:"20px", sm:"25px", lg:"30px"}}>{text2}</Text>
          </Box>
      </Stack>
  )
}

export const InBetween = () => (
<Stack justify="center" align="center" w="100%">
  <Stack align="center" w={{base:"90%", sm:"80%", lg:"70%"}} h="flex" justify="space-between" pt={{base: "16", md:"32", lg:"48"}}>
    <Stack isInline flexWrap>
      <Text fontSize={{base:"34px", sm:"46px", md:"64px", lg:"106px"}} fontWeight="bold">Why should you use
        <PseudoBox pl={{base:"2", md:"4", lg:"6"}} color="blue.500" as="span">acert ?</PseudoBox>
      </Text>
    </Stack>
    <Stack textAlign="center" justify="center" align="center" w={{base:"90%", sm:"80%", lg:"70%"}} py="6" pl="12">
      <Text fontSize={{base:"22px", sm:"27px", lg:"32px"}}>And it’s got all the team collaboration features you’d expect from a high-fidelity prototyping tool: multi-player editing, easy sharing, inline commenting, reusable components, and developer handoff. But let’s cut right to what makes this the best prototyping tool on the market.</Text>
    </Stack>
    <Flex align="center" justify="center">
      <SimpleGrid columns={{base:"1", md:"2", lg: "3"}} spacingX={16} spacingY={10} maxChildWidth="250px">
        <GridCaps img="/interface.svg"
          text1="Simpler"
          text2="Interface"
          />
          <GridCaps img="/motion.svg"
          text1="Magic" 
          text2="Motion"
          />
          <GridCaps img="/events.svg"
          text1="Extensive" 
          text2="Interaction"
          />
          <GridCaps img="/handoff.svg"
          text1="Prototyping" 
          text2="Insert Menu"
          />
          <GridCaps img="/sharing.svg"
          text1="Effortless" 
          text2="Sharing"
          />
          <GridCaps img="/insert.svg"
          text1="Animations" 
          text2="Handoff"
          />
      </SimpleGrid>
    </Flex>
  </Stack>
  <Stack align="center" w={{base:"90%", sm:"80%", lg:"70%"}} h="flex" justify="space-between" pt={{base: "16", md:"32", lg:"48"}}>
    <Stack isInline flexWrap> 
      <Heading fontSize={{base:"34px", sm:"46px", md:"64px", lg:"106px"}}>How should you use
        <PseudoBox pl={{base:"2", md:"4", lg:"6"}} color="blue.500" as="span">acert ?</PseudoBox>
      </Heading>
    </Stack>
    <Stack textAlign="start" justify="start" align="start" w={{base:"90%", sm:"80%", lg:"70%"}} pl="12">
      <Text fontSize={{base:"22px", sm:"27px", lg:"32px"}}>And it’s got all the team collaboration features you’d expect from a high-fidelity prototyping tool: multi-player editing, easy sharing, inline commenting, reusable components, and developer handoff. But let’s cut right to what makes this the best prototyping tool on the market.</Text>
    </Stack>
    <Stack align="center" py="4">
      <Image src="/photo1.jpeg" alt="coding guy" w={{base: "285px", md:"570px", lg:"855px"}} h={{base:"190px", md:"380px", lg:"570px"}}/>
    </Stack>
    <Box w="100%" textAlign="center">
      <Text fontSize={{base:"22px", sm:"27px", lg:"32px"}}>Check <Link color="acert_darkblue2">our documentation</Link> if you need extra informations</Text>
    </Box>
  </Stack>
  <Stack align="center" w={{base:"90%", sm:"80%", lg:"70%"}} h="flex" justify="space-between" pt={{base: "16", md:"32", lg:"48"}}textAlign="center">
    <Stack isInline flexWrap align="center">
      <Heading fontSize={{base:"34px", sm:"46px", md:"64px", lg:"106px"}}>Serverless makes infrastructure easy, Webiny makes
      <PseudoBox pl={{base:"2", md:"4", lg:"6"}} color="blue.500" as="span">serverless easy</PseudoBox>
      </Heading>
    </Stack>
    <Stack w="100%">
      <SimpleGrid columns={{base:"1", lg:"3"}} spacing={10}>
        <Stack align="center" justify="space-around">
          <Image src="/validation.svg" alt="validation" w="260px" h="200px"/>
          <Text fontSize="32px">Developer-friendly</Text>
          <Box maxW="315px">
          <Text fontSize="18px">Webiny has been made with the developer in mind. It helps them develop serverless applications with ease.</Text>
          </Box>
        </Stack>
        <Stack align="center" justify="space-around">
          <Image src="/secure500.svg" alt="secure" w="260px" h="200px"/>
          <Text fontSize="32px">Open source</Text>
          <Box maxW="315px">
          <Text fontSize="18px">Webiny is created and maintained by an amazing group of people. Being open source means Webiny grows and evolves much faster. Contributors are welcome.</Text>
          </Box>
        </Stack>
        <Stack align="center" justify="space-around">
          <Image src="/login500.png" alt="login" w="260px" h="200px"/>
          <Text fontSize="32px">it's a community</Text>
          <Box maxW="315px">
          <Text fontSize="18px">We have an active community on slack. Talk to the core-team, and get help. Webiny team is always there for any questions.</Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Stack>
  </Stack>
  <Stack w="100%" align="center" justify="center"  pt={{base: "16", md:"32", lg:"48"}} pb="10">
    <Stack w={{base:"90%", sm:"80%", lg:"70%"}}>
      <Heading fontSize={{base:"34px", sm:"46px", md:"64px", lg:"106px"}}>Used by world's biggest companies</Heading>
      <Text fontSize={{base:"22px", sm:"27px", lg:"32px"}} w={{base:"90%", sm:"80%", lg:"70%"}} py="6" pl="12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</Text>
    </Stack>
      <Flex w={{base:"90%", sm:"75%", lg:"50%"}} align="center" justify="space-around">
        <Image src="/dif-logo.svg" alt="logo dif" size={{base:"75px", md:"100px", lg:"125px"}}/>
        <Image src="/logo-nist.svg" alt="logo nist" size={{base:"75px", md:"100px", lg:"125px"}}/>
        <Image src="/logo-w3c.svg" alt="logo w3c" size={{base:"75px", md:"100px", lg:"125px"}}/>
      </Flex>
  </Stack>
</Stack>
)

import { Flex, Heading, Link, Stack, Box, Text, Icon, Button, SimpleGrid, Image, Grid, PseudoBox} from '@chakra-ui/core'


const FeatureGroup = ({titre}) => {
    return (
      <Flex border="1px" borderRadius="md" borderColor="gray.200" py="2" bg="gray.100" pl="4">
        <Text>{titre}</Text>
      </Flex>
    )
  }
  
  const Versus = ({titre, icon1, icon2}) => {
    return (
      <Flex >
        <Box w="60%" border="1px" borderRadius="md" borderColor="gray.200" py="2" pl="4">{titre}</Box>
        <Stack w="20%" align="center" justify="center" border="1px" borderRadius="md" borderColor="gray.200" py="2">
          <Icon
            name={icon1 === true ? "check" : "close"}
            color={icon1 === true ? "green.400" : "red.400"}
          />
        </Stack>
        <Stack w="20%" align="center" justify="center" border="1px" borderRadius="md" borderColor="gray.200" py="2">
          <Icon 
            name={icon2 === true ? "check" : "close"}
            color={icon2 === true ? "green.400" : "red.400"}
          />
        </Stack>
      </Flex>
    )
  }
  
  const VersionComparator = () => {
    return (
        <Stack w="70%" my="4">
          <Flex>
            <Stack w="60%">
              <Heading pl="4" border="1px" borderRadius="md" borderColor="gray.200">Features</Heading>
            </Stack>
            <Stack  w="20%" align="center" justify="center" border="1px" borderRadius="md" borderColor="gray.200">
              <Text>open source</Text>
            </Stack>
            <Stack w="20%" align="center" justify="center" border="1px" borderRadius="md" borderColor="gray.200">
              <Text>enterprise edition</Text>
            </Stack>
          </Flex>
          <FeatureGroup titre="All-in-one Ingress, Mesh and API management"/>
          <Versus titre="Ingress management" icon1={true} icon2={true}/>
          <Versus titre="Service Mesh: service-to-service communication" icon1={false} icon2={true}/>
          <Versus titre="API Gateway" icon1={false} icon2={true}/>
        </Stack>
    )
  }

export default VersionComparator
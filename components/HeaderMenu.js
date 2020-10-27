import React from "react";
import { Box, Heading, Badge, Flex, Text, Icon, Spinner, Divider, Link, Button, Image, Stack, IconButton, PseudoBox, useDisclosure, List, ListItem, ListIcon} from "@chakra-ui/core";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/core"
import * as AcertIcons  from "../lib/acertIcons"
import { getLabel} from "../lib/getLabel"

const language = "english"

const HeaderImg = ({ images }) => {
    return (
        <Stack>
            <Box w="280px" h="150px" rounded="lg" overflow="hidden">
                <Image src={images.image} alt={images.url} w="100%" h="100%"/>
            </Box>
            <Box maxWidth="280px" h="110px" pt="4" pb="2">
                <Text fontSize="20px" fontWeight="600" color="secondary.300">{images.description}</Text>
            </Box>
            <Box>
                <Link href={images.href} fontSize="20px" color="primary.400">{images.link}</Link>
                <Icon name="arrow-forward" size="20px" color="primary.400" ml="2"/>
            </Box>
        </Stack>
    )
}

const GetIcon = ({links}) => {
    if (links.icon) {
        if (links.is_external === false) {
            return (<Icon name={links.icon} mr="4"/>)
        } else {
            return (
            <Box mr="4">
                <Box as={AcertIcons[links.icon]}/>
            </Box>)
        }
    } else {
        return (void 0)
    }
}

const DisplayList = ({links, label}) => {
    const currentLabel = getLabel(label, links.name)
    return (
        <Box>
            <Flex align="center">
                {links.icon ? <GetIcon links={links}/> : void 0}
                <Link href={links.href} isDisabled={links.status === "COMING_SOON" ? true : false}>{currentLabel ? currentLabel[language] : links.name}</Link>
                {links.status === "COMING_SOON" ? <Badge ml="4" px="2">Coming soon</Badge> : void 0}
                {links.status === "BETA" ? <Badge variant="solid" variantColor="red" ml="4" px="2">Beta</Badge> : void 0}
            </Flex>
            <Text fontSize="19px" color="gray.500" maxW="400px">{links.description}</Text>
        </Box>
    )
}

const HeaderMenu = ({content, label}) => {
  return (
    <Flex
      display={{xs: "none",sm: "none", md:"none", lg:"flex" }}
      alignItems="center"
      justify="space-between"
      w="50%"
      fontSize="22px"
    >
        {content.map((current, i) => (
            <Menu key={i}>
              {({ isOpen }) => (
              <React.Fragment>
              <MenuButton
                as={Button}
                bg="white"
                onKeyDown
                px={4}
                py={2}
                _hover={{ bg: "white" }}
                _active={{ bg: "white" }}
                _focus={{ outline: 0, boxShadow: "none" }}
                rightIcon={isOpen ? "chevron-up" : "chevron-down"}
                fontSize={{lg:"16px", xl:"24px"}}
              >
                {current.name}
              </MenuButton>
            <MenuList w={current.picture.length > 0 ? "full" : "auto"}>
                <MenuItem  bg="white" _focus={{bg: "white"}}>
                    <Flex h="auto" justify="space-around" align="center" w="100%">
                        <Stack h="full" justify="space-between" p="2">
                            <List spacing={1} fontSize="22px">
                                {current.link.map((link, j) => (
                                <ListItem pl="2" key={j}>
                                    <DisplayList links={link} label={label}/>
                                    <Divider />
                                </ListItem>
                                ))}
                            </List>
                            <List>
                            {current.highlight.map((highlight, j) => (
                                <ListItem pl="2" key={j}>
                                    <Link href={highlight.href} fontSize={{lg:"16px", xl:"24px"}} color="primary.400">{highlight.name}</Link>
                                    <Icon name="arrow-forward" fontSize={{lg:"14px", xl:"20px"}} color="primary.400" ml="2"/>
                                </ListItem>
                            ))}
                            </List>
                        </Stack>
                    {current.picture.length > 0 ?
                        <Flex justify="space-around" w="750px" borderLeft="1px" borderRadius="md" borderColor="gray.200">
                        {current.picture.map((images, j) => (
                            <HeaderImg 
                            images={images} 
                            key={j}/>
                        ))}
                        </Flex>
                    : void 0}
                    </Flex>
                </MenuItem> 
            </MenuList>
            </React.Fragment>
        )}
        </Menu>
        ))}
    </Flex>
);
};

export default HeaderMenu
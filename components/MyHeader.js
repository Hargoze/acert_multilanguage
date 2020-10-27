import React from "react";
import { Box, Text, Button, Image, Stack, useDisclosure, List, ListItem, Link} from "@chakra-ui/core";
import HeaderMenu from "../components/HeaderMenu"
import { getLabel} from "../lib/getLabel"

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/core"

import {
  Alert,
  AlertIcon,
} from "@chakra-ui/core";

const DrawerLayout = ({title, index, content, label, language}) => {
  return (
  <Stack py="2" fontSize={{base:"sm", sm:"md"}} align="center" textAlign="center">
    <Text fontWeight="bold">{title}</Text>
    {content ? 
    <List spacing={1}>
      {content.map((item, i) => {
        const currentLabel = getLabel(label, item.name, language)
        return (
          <ListItem key={index + i}>
            <Link href={item.href}>{currentLabel ? currentLabel : item.name}</Link>
          </ListItem>
      )})}
    </List>
    : void 0}
  </Stack>
  )
};

const Expanser = ({content, label, language}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display={{ base: "flex", lg: "none" }} pr="8" onClick={onOpen}>
        <svg
          fill="red"
          width="21px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader display={{base:"none", sm:"block"}}>
            <Image ml="6" src="/miniLogo.ico" alt="Acert Logo" size="50px"/>
          </DrawerHeader>
          <DrawerBody >
            <Stack w="95%" alignItems="center" justify="space-around">
            {content.map((current, i) => {
              const name = getLabel(label, ("header" + current.id), language)
              return (
              <DrawerLayout title={name ? name : current.name} index={i} key={i} content={current.link} label={label} language={language}/>
            )})}
              <Box mt="4">
                <Button bg="white" color="primary.500" rounded="full" mr="3" _hover={{bg:"primary.50"}} _active={{bg:"primary.100"}} textTransform="uppercase">Login</Button>
                <Button bg="white" color="primary.500" rounded="full" _hover={{bg:"primary.50"}} _active={{bg:"primary.100"}} border="1px" borderColor="primary.600" textTransform="uppercase">Get a demo</Button>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const MyHeader = ({message, alert, content, label, language}) => {
  return (
  <Stack
    w="100%"
    bg="white"
    color="black"
    pos="fixed" top="0" left="0"
    zIndex="100"
    align={{base:"left", lg:"center"}}
  >
  <Alert status="info" h="15px" display={alert ? "flex" : "none"} w="100%" justifyContent="center">
    <AlertIcon />
    {message}
  </Alert>
  <Stack
    justify={{base:"space-between", lg:"space-around"}}
    isInline 
    w={{xs:"100%", lg:"75%"}}
    h="7rem" 
    align="center"
  >
    <Box>
      <Link href="/">
        <Image display={{base:"flex", md:"none"}} ml="6" src="/SodaFavico64.svg" alt="Acert Logo" objectFit="contain"/>
        <Image display={{base:"none", md:"flex"}} ml="6" src="/centerLogo.svg" alt="Acert Logo" width="225px" height="90px"/>
      </Link>
    </Box>
    <HeaderMenu content={content} label={label} language={language}/>
    <Box display={{xs: "none",sm: "none", md:"none", lg:"flex" }} alignItems="center" >
      <Button variantColor="primary" color="white" px="10" py="6" textTransform="uppercase">Login</Button>
    </Box>
    <Expanser content={content} label={label} language={language}/>
  </Stack>
  </Stack>
    );
};

export default MyHeader
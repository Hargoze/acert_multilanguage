import React from "react";
import { useState } from 'react'
import Social from "../components/social"

import { Stack, Text, List, Link, ListItem, useDisclosure, ListIcon, Flex, PseudoBox, Box, Icon} from "@chakra-ui/core";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";

const Newsletter = () => {
  const [input, setInput] = useState('')

  const subscribe = async (e) => {  
    e.preventDefault();
      const res = await fetch('./api/subscribe', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAdress: input
        })
      });
      console.log(input);
      const { error } = await res.json()

    if (res.status === 200 || res.status === 201) {
      alert("success")
    }
    if (res.status === 400 || res.status === 500) {
      alert(error)
    }
    if (error) {
      alert(error)
    }
  }
  
  return(
      <Stack pr="3" w="100%" alignItems="ends" my="6" display={{base:"none", lg:"flex"}}>
        <Box>
          <Text textTransform="uppercase" fontWeight="semibold" textAlign="right"> Subscribe to our newsletter</Text>
        </Box>
          <Stack isInline isReversed as="form" px="2" justifyItems="right">
          <PseudoBox
            as="button"
            bg="primary.500"
            py={2}
            px={4}
            ml={3}
            rounded="md"
            fontWeight="semibold"
            color="white"
            _hover={{ bg: "primary.600" }}
            _focus={{ boxShadow: "outline" }}
            textTransform="uppercase"
            type="submit"
            onClick={subscribe}
          >
            Sign Up
          </PseudoBox>
          <PseudoBox
            color="black"
            as="input"
            name="mail"
            w={{xs:"70%", sm:"70%", md:"auto"}}
            //maxWidth="70%"
            placeholder="Your email"
            type="email"
            py={2}
            px={4}
            rounded="md"
            bg="gray.100"
            borderWidth="1px"
            _hover={{ borderColor: "gray.200", bg: "gray.200" }}
            _focus={{
              outline: "none",
              bg: "white",
              boxShadow: "outline",
              borderColor: "gray.300",
            }}
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          </Stack>
          <Box>
          <List spacing={1}>
            <ListItem textAlign="right">
              No spam ever.
              <ListIcon icon="check-circle" color="primary.500" ml="3"/>
            </ListItem>
            <ListItem textAlign="right">
              Your email will not be shared.
              <ListIcon icon="check-circle" color="primary.500" ml="3"/>
            </ListItem>
          </List>
        </Box>
      </Stack>
  )
}

export default Newsletter
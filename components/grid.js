import React from "react";
import { Stack, Text, List, ListItem} from "@chakra-ui/core";
import Layout from "../components/Layout"

const Grid = () => {
  return(
      <Stack 
      isInline  
      px="2"
      pt="6"
      alignItems="start"
      justify="space-around"
      w={{lg:"90%", xl:"66%"}}
      display={{xs:"none", sm:"none", md:"none", lg:"flex"}}
      >
        <Layout title="acert.io" index="a" items={['Why acert ?', 'Features', 'Roadmap']} links={["#", "#", "#"]}/>
        <Layout title="developers" index="b" items={['Getting Started', 'Documentation', 'License', 'Github repository', "Contribute"]} links={["#", "#", "#", "#", "#"]}/>
        <Layout title="Community" index="c" items={['Forum', 'Chat', 'Blog']} links={["#", "#", "#"]}/>
        <Layout title="Use Cases and Guildes" index="d" items={['Build Serverless Websites', 'Build Serverless Apps', 'Build Serverless APIs', 'Build Microservices', "Guide to Serverless"]} links={["#", "#", "#", "#", "#"]}/>
        <Layout title="Company" index="e" items={['About Us', 'Careers', 'Privacy Policy', 'Contact US']} links={["#", "#", "#", "#", "#"]}/>
        </Stack>
  )
}

export default Grid
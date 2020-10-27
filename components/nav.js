import { Heading } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

const Nav = () => (
  <Heading >
    <a href="/">
    <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
    </a>
    <Text bg="blue" ><a href="/">Home</a></Text> |
    <Text ><a href='/about'>About</a></Text> |
    <Text><a href='/contact'>Contact</a></Text>
  </Heading>
)

export default Nav
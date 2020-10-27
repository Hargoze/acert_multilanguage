import { Flex, Heading, Link, Image, Stack, Box, Text, Icon, SimpleGrid} from '@chakra-ui/core'
import { default as Button } from "./Button"

const Section = ({section, markdown, ...props}) => {
    const list = JSON.parse(section.list)
    return (
    <Flex direction={{base:"column", lg: section.direction}}  {...props}>
      <Stack
      color={section.color} 
      bg={section.background_color} 
      bgImg={"url('" + section.background_image + "')"} 
      bgRepeat="no-repeat"
      bgPos={section.bgimg_props}
      spacing={6}
      w={{base:"auto", lg: section.image && section.direction != "columns" ? "500px" : "auto"}}
      my="6"
      {...JSON.parse(section.style)}>
        {section.ps && section.ps_position === false ? <Text fontSize="sm" color={section.ps_color}>{section.ps}</Text> : void 0}
        <Heading>{section.title}</Heading>
        {section.content ?
        <Text w="80%" textAlign="justify">{section.content}</Text>
        : void 0}
        {list ?
         <SimpleGrid columns={{base:"1", sm:"2", lg:"3"}} spacing={10}>
        {list.map((elem, i) => (
          <Flex key={i}>
            <Icon name="check-circle" color="secondary.500" mr="3" size="24px"/>
            <Text fontWeight="bold">{elem}</Text>
          </Flex>
        ))}
        </SimpleGrid> : void 0}
        {section.link ? 
          <Link href={section.href} color={section.link_color}>{section.link}</Link>
        : void 0}       
        {section.buttons.length > 0 ? 
          <Stack isInline w="70%" justify={section.button_alignement} spacing={4}>
          {section.buttons.map((elem, i) => (
            <Box key={i} w="fit-content">
              <Button button={elem} text={elem.name} markdown={markdown} {...JSON.parse(elem.style)}/>
            </Box>
          ))}
          </Stack>
        : void 0}
        {section.ps && section.ps_position ? <Text fontSize="sm" color={section.ps_color}>{section.ps}</Text> : void 0}
      </Stack>
      {section.image ?
        <Image src={section.image.name} alt={section.image.alt} objectFit="contain" w={section.image.width} h={section.image.height}/>
      : void 0}
    </Flex>
    )
}

export default Section
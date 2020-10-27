import { Flex, Heading, Stack, Box, Text, AspectRatioBox, Button, SimpleGrid, Grid, Icon} from '@chakra-ui/core'

export const FeaturesCaps = ({text1, text2}) => {
    return (
        <Stack isInline maxW="xl">
            <Icon name="check-circle" color="secondary.500"/>
            <Box>
            <Text fontWeight="semibold" fontSize="l" color="primary.400">{text1}</Text>
            <Text >{text2}</Text>
            </Box>
        </Stack>
    )
}

export const Features = () => (
    <Stack align="center" w="100%" bgImage="url('background.png')" bgPos="center">
        <Text fontSize="xl" color="primary.500" fontWeight="bold">Features</Text>
        <Stack isInline w={{xs:"100%", sm:"100%", md:"75%", lg:"75%"}} justifyContent="space-around">
            <SimpleGrid columns={2} spacingX={{md: "5", lg: "13"}} spacingY="5" minChildWidth="250px">
            <FeaturesCaps
                text1="Book from any webform"
                text2="Let website visitors schedule an appointment right after completing a form."
            />
            <FeaturesCaps
                text1="One-click booking"
                text2="Suggest meeting times and let prospects book with a single click."
            />
            <FeaturesCaps
                text1="Website embed"
                text2="Display your online scheduler on any page or launch it with the click of a button."
            />
            <FeaturesCaps
                text1="Intelligent routing"
                text2="Automatically qualify, route, and schedule meetings with the right rep every time"
            />
            <FeaturesCaps
                text1="Live calls and video"
                text2="Start real-time conversations with leads that are ready to talk, now."
            />
            <FeaturesCaps
                text1="Calendar integrations"
                text2="Integrate with GSuite and Outlook365 to seamlessly schedule appointments."
            />
            <FeaturesCaps
                text1="Instant Booker plugin"
                text2="Quickly book appointments online from your favorite sales tools."
            />
            <FeaturesCaps
                text1="Group meetings"
                text2="Easily coordinate multiple calendars to make group booking easy."
            />
            </SimpleGrid>
        </Stack>
    </Stack>
)
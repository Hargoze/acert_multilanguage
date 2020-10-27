import { Box, Text, Stack, IconButton} from "@chakra-ui/core";

export const Caps = ({icon, text1, text2}) => {
    return (
        <Stack isInline w="90%" bg="green.300">
            <IconButton icon={icon} variantColor="secondary" color="white"/>
            <Box maxWidth="60%">
            <Text fontWeight="semibold" fontSize="l">{text1}</Text>
            <Text >{text2}</Text>
            </Box>
        </Stack>
    )
}
import { Box, Stack, Text } from "@chakra-ui/react"
import StatusIcon from "./elements/StatusIcon"

const SingleIconWidget = ({caption = "widget", icon="default", active=false}) => {
    return (
        <>
        <Box 
            borderStyle={"solid"} 
            borderRadius={10} 
            borderWidth={1} 
            height={'110px'} 
            width={'105px'} 
            justifyItems={'center'}
            background={"gray.200"}
        >
            <Box borderRadius={10} borderBottomWidth={1} borderStyle={"solid"} width={'100%'}>
                <Text fontSize={'sm'}>{caption}</Text>
            </Box>
            <Stack marginTop={2} gap="2" align="flex-start">
                <StatusIcon icon={icon} act={active} />
            </Stack>
        </Box>
        </>
    )
}

export default SingleIconWidget
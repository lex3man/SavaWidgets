import { Box, Stack, Text } from "@chakra-ui/react"
import Diagram from "./elements/Diagram"

const DiagramWidget = ({caption = "Widget"}) => {
    return (
        <>
        <Box 
            height={"220px"} 
            width={"460px"} 
            borderStyle={"solid"} 
            borderRadius={10} 
            borderWidth={1}
            background={"gray.200"}
        >
            <Box borderRadius={10} borderBottomWidth={1} borderStyle={"solid"} width={'100%'}>
                <Text fontSize={'sm'}>{caption}</Text>
            </Box>
            <Stack align={'center'}>
                <Diagram />
            </Stack>
        </Box>
        </>
    )
}

export default DiagramWidget
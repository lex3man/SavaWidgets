import { Box, Stack, Text } from "@chakra-ui/react"

const CounterWidget = ({caption = "Widget", counerset="11", desc=""}) => {
    return (
        <>
        <Box 
            borderStyle={"solid"} 
            borderRadius={10} 
            borderWidth={1} 
            height={'110px'} 
            width={'220px'} 
            justifyItems={'center'}
            background={"gray.200"}
        >
            <Box borderRadius={10} borderBottomWidth={1} borderStyle={"solid"} width={'100%'}>
                <Text fontSize={'xs'}>{caption}</Text>
            </Box>
            <Stack marginTop={2} align="center">
                <Text fontSize={'5xl'} lineHeight={1}>{counerset} {desc}</Text>
                <Text fontSize={'2xs'}>Посл. обновление: 2 мин. назад</Text>
            </Stack>
        </Box>
        </>
    )
}

export default CounterWidget
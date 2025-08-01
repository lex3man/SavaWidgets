import { Box, Stack, VStack } from "@chakra-ui/react"
import IndicatorIcon from "./elements/IndicatorIcon"

const IconsWidget = ({icons=[
    {name: "Центральный вход", icon: "flame", active: false},
    {name: "Хозяйственны блок", icon: "flame", active: false},
    {name: "Левое крыло", icon: "flame", active: false},
    {name: "Правое крыло", icon: "flame", active: false},
    {name: "Промывочная", icon: "flame", active: false},
]}) => {
    const columnsCount = 2
    const rowsPerColumn = Math.ceil(icons.length / columnsCount)

    const groupedIcons = Array.from({ length: columnsCount }, (_, columnIndex) => {
        return icons.slice(columnIndex * rowsPerColumn, (columnIndex + 1) * rowsPerColumn);
    });

    return (
        <Box 
            display="flex"
            borderStyle={"solid"} 
            borderRadius={10} 
            borderWidth={1} 
            height={'230px'} 
            width={'460px'} 
            justifyItems={'center'}
            paddingTop={8}
            background={"gray.200"}
        >
            {groupedIcons.map((column, columnIndex) => (
                <VStack key={columnIndex} gap={5} align="center">
                    {column.map((icon) => (
                        <Stack key={icon.name}>
                            <IndicatorIcon caption={icon.name} />
                        </Stack>
                    ))}
                </VStack>
            ))}
        </Box>
    )
}

export default IconsWidget
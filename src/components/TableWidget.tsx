import { Box, Stack, Table, Theme } from "@chakra-ui/react"

const data = [
  { id: 1, time: "15:27:44", name: "Очистительная камера", param: 743 },
  { id: 1, time: "12:12:11", name: "Баки очистительной камеры", param: 43 },
  { id: 1, time: "10:07:52", name: "Баки очистительной камеры", param: 12 },
  { id: 1, time: "09:53:40", name: "Баки очистительной камеры", param: 5 },
  { id: 1, time: "08:28:51", name: "Тензодатчик коныеера", param: 33 },
  { id: 1, time: "05:27:44", name: "Баки очистительной камеры", param: 401 },
]

const TableWidget = ({caption = "widget", items = data}) => {
    return (
        <>
        <Box 
            height={"360px"} 
            width={"460px"} 
            borderStyle={"solid"} 
            borderRadius={10} 
            borderWidth={1}
            // background={"gray.200"}
        >
            <Box borderRadius={10} borderBottomWidth={1} borderStyle={"solid"} background={"gray.200"}>
                {caption}
            </Box>
            <Stack margin={0} gap="2" align="center">
                <Theme appearance="light">
                <Table.Root size="sm" interactive>
                    <Table.Header>
                        <Table.Row background={'gray.400'}>
                        <Table.ColumnHeader>time</Table.ColumnHeader>
                        <Table.ColumnHeader>name</Table.ColumnHeader>
                        <Table.ColumnHeader>param</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {items.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.time}</Table.Cell>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.param}</Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
                </Theme>
            </Stack>
        </Box>
        </>
    )
}

export default TableWidget
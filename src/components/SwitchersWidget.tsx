import { Box, Stack } from "@chakra-ui/react"
import Switcher from "./Switcher"

const SwitchersWidget = ({caption = "Виджет", switchers = ["Центральный вход", "Хозяйственны блок", "Левое крыло", "Правое крыло", "Промывочная"]}) => {
    return (
    <>
    <Box borderStyle={"solid"} borderRadius={10} borderWidth={1} >
      <Box borderStyle={"solid"} borderRadius={5} borderWidth={1}>
        {caption}
      </Box>
      <Stack margin={5} gap="2" align="flex-start">
        {switchers.map((sw, index) => (
            <Switcher key={index} caption={sw} />
        ))}
      </Stack>
    </Box>
    </>
  )
}

export default SwitchersWidget
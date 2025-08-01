import { Box, Stack } from "@chakra-ui/react"
import Switcher from "./elements/Switcher"

const SwitchersWidget = ({
  caption = "Виджет", 
  switchers = ["Комната 1", "Комната 2", "Комната 3"]
}) => {
    return (
    <>
    <Box 
      height={"350px"} 
      width={"460px"} 
      borderStyle={"solid"} 
      borderRadius={10} 
      borderWidth={1}
      background={"gray.200"}
    >
      <Box borderRadius={10} borderBottomWidth={1} borderStyle={"solid"}>
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
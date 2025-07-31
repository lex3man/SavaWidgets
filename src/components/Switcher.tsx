import { Flex, HStack, Stack, Switch, Text } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { Zap } from 'lucide-react';
import { useEffect, useState } from "react";


const Switcher = ({caption = "ARtrack", time = "0"}) => {

  const [active, setActive] = useState(false)
  const [iconColor, setIconColor] = useState("white")
  const [onOff, setOnOff] = useState("вкл")

  useEffect(() => {
    if (active) {
      setIconColor("red")
      setOnOff("вкл")
    } else {
      setIconColor("white")
      setOnOff("выкл")
    }
  }, [active])

  return (
    <Stack
      align="center"
      direction="row"
      gap="10"
      px="4"
      height={10}
    >
      <Flex width={"400px"} justifyContent={"space-between"}>
        <HStack>
          <Icon background={iconColor} borderRadius={50} borderStyle={"solid"} borderWidth={2} padding={0} size={"2xl"} color="red.500">
            <Zap fill="black" color={"black"} />
          </Icon>
          <Stack gap={0} align={"start"}>
            <Text minW="8ch">{caption}</Text>
            <Text fontSize={"2xs"} minW="4ch">{onOff} {time} мин. назад</Text>
          </Stack>
        </HStack>

        <Switch.Root checked={active} colorPalette={"red"} onChange={() => setActive(!active)}>
          <Switch.HiddenInput />
          <Switch.Control />
          <Switch.Label />
        </Switch.Root>
      </Flex>
    </Stack>
  )
}

export default Switcher
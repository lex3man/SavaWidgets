import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import { Flame } from 'lucide-react';
import { useEffect, useState } from "react";


const IndicatorIcon = ({caption = "ARtrack", act = false}) => {

  const [active, setActive] = useState(false)
  const [iconColor, setIconColor] = useState("grey")
  const [onOff, setOnOff] = useState("вкл")
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (active) {
      setIconColor("red")
      setOnOff("вкл")
    } else {
      setIconColor("grey")
      setOnOff("выкл")
    }
    setTime(0)
  }, [active])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevMinutes) => prevMinutes + 1);
    }, 60000);
    setActive(act)

    return () => clearInterval(intervalId);
  }, [act])

  return (
    <Stack
      align="center"
      direction="row"
      gap="10"
      px="4"
      height={10}
    >
      <Flex width={"210px"} justifyContent={"space-between"}>
        <HStack>
          <Box 
            background={iconColor}
            borderRadius={50}
            borderStyle={"solid"}
            borderWidth={2}
            padding={2}
          >
            <Flame size={30} fill="black" color={"black"} />
          </Box>
          <Stack gap={0} align={"start"}>
            <Text minW="8ch">{caption}</Text>
            <Text fontSize={"2xs"} minW="4ch">{onOff} {time} мин. назад</Text>
          </Stack>
        </HStack>
      </Flex>
    </Stack>
  )
}

export default IndicatorIcon
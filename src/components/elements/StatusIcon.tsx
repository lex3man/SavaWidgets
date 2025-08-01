import { Flex, Text, Box } from "@chakra-ui/react"
import { Zap, Flame, Siren, Check } from "lucide-react"
import { useEffect, useState } from "react"

const StatusIcon = ({icon = "default", act=false}) => {
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
        if (time === 25) {
            setActive(!active)
        }
    }, [active, time])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevMinutes) => prevMinutes + 1);
        }, 60000);
        if (act) setActive(true)

        return () => clearInterval(intervalId);
    }, [act])

    switch (icon) {
        case 'check':
            return (
                <>
                    <Flex flexDirection={'column'} gap={2}>
                        <Box margin={'auto'} background={iconColor} borderRadius={50} borderStyle={"solid"} borderWidth={2} padding={2}>
                            <Check size={30} fill="black" color={"black"} />
                        </Box>
                        <Text fontSize={"2xs"} minW="4ch">{onOff} {time} мин. назад</Text>
                    </Flex>
                </>
            )
        case 'led':
            return (
                <>
                    <Flex flexDirection={'column'} gap={2}>
                        <Box margin={'auto'} background={iconColor} borderRadius={50} borderStyle={"solid"} borderWidth={2} padding={2}>
                            <Siren size={30} fill="black" color={"black"} />
                        </Box>
                        <Text fontSize={"2xs"} minW="4ch">{onOff} {time} мин. назад</Text>
                    </Flex>
                </>
            )
        case 'flame':
            return (
                <>
                    <Flex flexDirection={'column'} gap={2}>
                        <Box margin={'auto'} background={iconColor} borderRadius={50} borderStyle={"solid"} borderWidth={2} padding={2}>
                            <Flame size={30} fill="black" color={"black"} />
                        </Box>
                        <Text fontSize={"2xs"} minW="4ch">{onOff} {time} мин. назад</Text>
                    </Flex>
                </>
            )
        case 'lightning':
            return (
                <>
                    <Flex flexDirection={'column'} gap={2}>
                        <Box margin={'auto'} background={iconColor} borderRadius={50} borderStyle={"solid"} borderWidth={2} padding={2}>
                            <Zap size={30} fill="black" color={"black"} />
                        </Box>
                        <Text fontSize={"2xs"} minW="4ch">{onOff} {time} мин. назад</Text>
                    </Flex>
                </>
            )
        default:
            return (
                <>
                    <Flex flexDirection={'column'} gap={2}>
                        <Box margin={'auto'} background={iconColor} borderRadius={50} borderStyle={"solid"} borderWidth={2} padding={2}>
                            <Zap size={30} fill="black" color={"black"} />
                        </Box>
                        <Text fontSize={"2xs"} minW="4ch">{onOff} {time} мин. назад</Text>
                    </Flex>
                </>
            )
    }
}

export default StatusIcon
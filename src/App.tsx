import { Box, Stack } from '@chakra-ui/react'
import './App.css'
import Switcher from './components/Switcher'

function App() {

  return (
    <>
    <Box borderStyle={"solid"} borderRadius={10} borderWidth={1} >
      <Box borderStyle={"solid"} borderRadius={5} borderWidth={1}>
        Электропитание
      </Box>
      <Stack margin={5} gap="2" align="flex-start">
        <Switcher caption="Центральный вход" time = "2" />
        <Switcher caption="Хозяйственны блок" time = "6" />
        <Switcher caption="Левое крыло" time = "4" />
        <Switcher caption="Правое крыло"  time = "26"/>
        <Switcher caption="Промывочная" time = "42" />
      </Stack>
    </Box>
    </>
  )
}

export default App

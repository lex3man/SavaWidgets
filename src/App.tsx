
import { Flex, HStack } from '@chakra-ui/react'
import './App.css'
import SwitchersWidget from './components/SwitchersWidget'
import SingleIconWidget from './components/SingleIconWidget'
import IconsWidget from './components/IconsWidget'
import DiagramWidget from './components/DiagramWidget'
import CounterWidget from './components/CounterWidget'
import TableWidget from './components/TableWidget'

function App() {

  return (
    <>
    <HStack gap={5} alignItems="start">
    <Flex gap={5} flexDirection={'column'}>
      <DiagramWidget caption="События действий от датчиков" />
      <HStack gap={5}>
        <CounterWidget caption='Отклонения в показаниях соб/час' counerset='11'/>
        <CounterWidget caption='Активных действий соб/час' counerset='26'/>
      </HStack>
      <TableWidget caption='Отклонения в показаниях' />
      <HStack gap={5}>
        <CounterWidget caption='Активность датчиков' counerset='46/46'/>
        <CounterWidget caption='Средняя задержка' counerset='15' desc='мс'/>
      </HStack>
    </Flex>
    <Flex gap={5} flexDirection={'column'}>
      <HStack gap={5}>
        <SwitchersWidget 
          caption='Электропитание' 
          switchers={[
            "Центральный вход", 
            "Хозяйственны блок", 
            "Левое крыло", 
            "Правое крыло", 
            "Промывочная"
          ]} 
        />
      </HStack>
      <IconsWidget
        icons={[
          {name: "Центральный вход", icon: "flame", active: false},
          {name: "Хозяйственны блок", icon: "flame", active: false},
          {name: "Левое крыло", icon: "flame", active: false},
          {name: "Правое крыло", icon: "flame", active: false},
          {name: "Промывочная", icon: "flame", active: false},
        ]}
      />
      <HStack gap={5}>
        <SingleIconWidget 
          caption="Промывочная"
          icon='led'
          active={false}
        />
        <SingleIconWidget 
          caption="Дежурная"
          icon='led'
          active={false}
        />
        <SingleIconWidget 
          caption="Вентиляция"
          icon='lightning'
          active={true}
        />
      </HStack>
    </Flex>
    </HStack>
    </>
  )
}

export default App


import './App.css'
import SwitchersWidget from './components/SwitchersWidget'

function App() {

  return (
    <>
      <SwitchersWidget 
        caption='Электропитание' 
        switchers={["Центральный вход", "Хозяйственны блок", "Левое крыло", "Правое крыло", "Промывочная"]} 
      />
    </>
  )
}

export default App

import { SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/hearder'
import { Card } from './components/card'
import { InputName } from './components/inputcontrolText'
import { Outputtest } from './components/outputTest'
import { InputNumber } from './components/inputcontrolNumber'
import { CalcBMI } from './components/calcBMI';


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Your name")
  const [numheigth, setNum] = useState(0)
  const [numweigth, setNumw] = useState(0)
  const bmi = useState('')
  const textHeader = 'My BMI'

  const onChangeFuction = (event: any) =>{
    setName(event.target.value)
  }
  const onChangeFuction2 = (event: any) =>{
    setNum(event.target.value)
  }
  const onChangeFuction3 = (event: any) =>{
    setNumw(event.target.value)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Header conteudo={textHeader} />
      <Card>
        <p>
         <strong>Name </strong>    
        <InputName name={name} onChangeCallback = {onChangeFuction} /> 
        </p>
        <p>
          <strong>Heigth </strong>
          <InputNumber num={numheigth} onChangeCallback={onChangeFuction2}/>
        </p>
        <p>
          <strong>Weigth </strong>
          <InputNumber num={numweigth} onChangeCallback={onChangeFuction3}/>
        </p>
        <CalcBMI weight={numweigth} height={numheigth}/>
        {/* <Outputtest outputtext={bmi} /> */}
      </Card>
    </div>
  )
}

export default App

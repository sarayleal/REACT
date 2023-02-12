import './App.css'
import Nameslist from './components/Nameslist';
import Greeting from './components/Greeting';
import Persons from './components/Persons';
import Button from './components/Button';


export const App = () => {
    return (
      <>
        <Nameslist/>
        <Greeting/>
        <Persons/>
        <Button/>
      </>
  )
}

export default App
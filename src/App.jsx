import './App.css'
import Counter from './Counter';

function App() {

  function handleClick() {
    alert('btn clicked');
  }

  const handleClick2 = () => {
    alert('btn 2 clicked');
  }

  const addToFive = num => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third clicked')}}>Third</button>
      <button onClick={()=>addToFive(5)}>add to five</button>
    </>
  )
}

export default App

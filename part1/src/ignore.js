import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const History = (props) =>{
  if(props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Hello = ({name, age}) => {
     
    const bornYear = () =>  new Date().getFullYear() - age;
    
    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>You were born {bornYear()}</p>
        </div>
    )
}

const Dispaly = (props) =>{
    return(
      <div>{props.counter}</div>
    )
}

const Button = ({click, text}) => {
  return(
    <button onClick={click}>{text}</button>
  )
}

const App = () => {

    //const {counter} = props
    //eslint-disable-next-line
    const [counter, setCounter] = useState(10)
    //const [clicks, setClicks] = useState({left:0, right:0})
    // //let counter = 0
    // setTimeout(
    //   () => setCounter(counter + 1),
    //   1000
    
    // )

    // const handleClick= ()=>{
    //   console.log("Clicked")
    // }

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const name = 'Peter'
    const age = 10

    const increaseByOne = () => setCounter(counter + 1)
    const reset = ()=> setCounter(0)

    const handleLeftClick = ()=> {
      // const newClick = {
      //   ...clicks,
      //   left: clicks.left + 1,
       
      // }
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }

    const handleRightClick = () =>{
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }

    // const handleRightClick = ()=>{
    //   const newClick = {
    //     ...clicks,
    //     right: clicks.right + 1
    //   }

    //   setClicks(newClick)
    // }

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name={"Kenny"} age={21}/>
            <Hello name = {name} age={age}/>
            <Dispaly counter={counter}/>
            <Button click={increaseByOne} text={"plus"}/>
            <Button click={reset} text={"Zero"}/>
            <div>
              {left}
              <Button click={handleLeftClick} text={"Left"}/>
              <Button click={handleRightClick} text={"Right"}/>
              {right}
              <History allClicks = {allClicks}/>
            </div>
            
          </div>

        
    )
}



  ReactDOM.render(<App/>, document.getElementById('root'))



import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Zahid', 'Az', 'Ay', 'Mohammad']
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Person name="Rubel Nayok" job="football"></Person>
        <Person name="Az" job="Karate"></Person>
        <Counter></Counter>
        <Users></Users>
        {/* <Person name={nayoks[0]}></Person>
        <Person name="Elias K" nayika="Bobita"></Person> */}
      </header>
    </div>
  );
  }


  function Counter(){
    const [count, setCount] = useState(10);
    const handleIncrease = () => setCount(count + 1);
      // const newCount = count + 1;
      
    return(
      <div>
        <h1>Count: {count}</h1>
        <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    )
  }

  function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
      //console.log('Calling Effect')
    }, [])
    return(
      <div>
        <h3>Dynamic Users: {users.length}</h3>
      <ul>
      {
        users.map(user => <li>{user.email} {user.name}</li>)
      }
      </ul>
      </div>
    )
  }
function Person(props){
  // const personStyle={
  //   border:'2px solid red',
  //   margin: '10px'
  // }

  // console.log(props)
  return(
     <div style={{border:'2px solid gold', width: '480px'}}> 
    
      <h3>Name: {props.name}</h3>
      <p>My Profession: {props.job} </p>
      </div>
  )
}
export default App;
        
/* <h1>My heading: {(2+5)*666}</h1>
<p>{person.name+ ' ' + person.job}</p>
      <p>My First React Paragraph</p> */

      // var person = {
      //   name : "Dr. Azad",
      //   job: "Karate"
      // }
      // var style = {
        
      //   color: 'red'
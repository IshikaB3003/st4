import React, { useState } from 'react'
import Cricketers from './Cricketers';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import cricketer from './cricketer.jpg';
// import download from './download.png';
import cup from './cup.png'


export default function Form() {
  const [position, setposition] = useState('');
  const [player, setplayer] = useState('');
  const [rating, setrating] = useState('');
  const[role,setrole]=useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = position, b = player, c = rating,d =role;
    Cricketers.push({ a, b, c, d });
    // console.log(Cricketers);
    history('/added');


  }

  return (
    <div>
      <h1>EMPLOYEE'S RECORDS INTAKE</h1>
      <form className='container'>
        <label>EMPLOYEE ID</label><br></br>
        <input type="number"   placeholder='Enter employee id' onChange={(e) => setposition(e.target.value)} required></input><br></br>
        <label>NAME</label><br></br>
        <input type="text"   placeholder='Enter Name' onChange={(e) => setplayer(e.target.value)} required></input><br></br>
        <label >AGE</label><br></br>
        <input type="number" placeholder='Enter Age' onChange={(e) => setrating(e.target.value)} required></input><br></br>
        <label >STAUS</label><br></br>
        <input type="text" placeholder='Enter Status' onChange={(e) => setrole(e.target.value)} required></input><br></br>

        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>

      {/* <img className='imagecup' src={download}></img>
      <img className='image' src={cricketer}></img> */}
      {/* <img className='image' src={download}</img> */}
    </div>
  )
}

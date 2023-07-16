
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

import About from './components/About';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#22384b'
      showalert('Dark Mode enabled', 'success')
      document.title = 'TextAnalysis-Home(DarkMode)'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert('Dark Mode disabled', 'success')
    }
  }

  return (
    <>
        <Navbar title="TextAnalysis" mode={mode} aboutText="About Us" togglemode={togglemode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          
            
          {<About/>}
        </div>
      </>
  );
}
export default App;

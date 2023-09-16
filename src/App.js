import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import  {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
    }
  

  const toggleMode  = ()=>{
    if(mode === 'light'){
      
      setMode('dark')
      document.body.style.backgroundColor = '#323232'
      showAlert("Dark Mode enabled successfully","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode enabled successfully","success")

    }
  }

  return (

    <div className="App">
      

      <Router>
      <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
      <Route path='/' element={<TextForm formTitle='Enter Text to analyze below' showAlert={showAlert} mode={mode}/>} />
      <Route path='/about' element={<About/>} />
    
      </Routes>
      </Router>
{/*/*/}

    </div>
  );
}

export default App;

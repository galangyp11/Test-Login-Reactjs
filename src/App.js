import { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

import Login from './components/Login';
import Manager from './components/Manager';
import Admin from './components/Admin';
import User from './components/User';
import data from './components/data.json'

function App() {
  
  const [ inputUser, setInputUser ] = useState({
    usernameInput : "",
    passwordInput : ""
  });

  const [ dataLogin, setDataLogin ] = useState({})
  const navigate = useNavigate();

  const handleLogin = () =>{
    
    for(let i = 0; i < data.dataUser.length ; i++){
      if(data.dataUser[i].username == inputUser.usernameInput && data.dataUser[i].password == inputUser.passwordInput){
          // alert(`bisa bang ${data.dataUser[i].name} ${data.dataUser[i].access}`)
          setDataLogin(data.dataUser[i])
          navigate(`/${data.dataUser[i].access}`)
          // console.log(data.dataUser[i])
      } else {
        console.log('eror bang')
      }
    }
  }
  // console.log(inputUser.usernameInput)
  // console.log(dataLogin)
  return (
      <Routes >
        <Route path='/' element={<Login handleLogin={handleLogin} inputUser={inputUser} setInputUser={setInputUser}/> } />

        <Route path='/manager' element={<Manager dataLogin={dataLogin}/>}/>

        <Route path='/admin' element={<Admin dataLogin={dataLogin}/>}/>

        <Route path='/user' element={<User dataLogin={dataLogin}/>}/>
      </Routes>
  );
}

export default App;

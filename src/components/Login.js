import './App.css'

const Login = ({handleLogin, inputUser, setInputUser}) => {

    const handleInput = (e) => {
        e.preventDefault();
        setInputUser((data) => ({
            ...data,
            [e.target.id]: e.target.value
        }));
    };

    return ( 
        <div className="App d-flex justify-content-center align-items-center">
      
        <div className="test-form ">
          <div className="row " style={{ marginTop:"80px"}}>
            <div className="col-2 mx-5 my-1 d-flex justify-content-center">
                <label htmlFor="usernameInput">Username</label>
            </div>
            <div className="col my-1">
                <input 
                    type="text" 
                    id="usernameInput"
                    value={inputUser.usernameInput}
                    onChange={handleInput}
                />
            </div>

            <div className="col-2 mx-5 my-1 d-flex justify-content-center">
                <label htmlFor="passwordInput">Password</label>
            </div>
            <div className="col my-1 ">
                <input 
                    type="password" 
                    id="passwordInput"
                    value={inputUser.passwordInput}
                    onChange={handleInput}
                />  
            </div>

           
          </div>     
          <div className="row  mt-5">
            <div className="col d-flex justify-content-center">
            <button type='button' className='btn btn-primary ' onClick={handleLogin}>Login</button>
            </div>
            </div>
        </div>
    </div>
     );
}
 
export default Login;
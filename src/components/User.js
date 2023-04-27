import './udhlogin.css'
import { useNavigate } from 'react-router-dom';

const User = ({dataLogin}) => {

    const navigate = useNavigate();

    return ( 
        <div className="user d-flex justify-content-center align-items-center" style={{ height:"100dvh", width:"100dvw", backgroundColor:"#98d8aa"}}>
            <div className="uwoh p-5">
                <h3>{dataLogin.name}</h3>
                <p>{dataLogin.id}</p>
                <p>{dataLogin.access}</p>

                <div className="butlogout d-flex justify-content-end align-items-end">
                    <button className='btn btn-danger ' onClick={()=>{navigate('/')}}>Logout</button>
                </div>
            </div>
        </div>
     );
}
 
export default User;
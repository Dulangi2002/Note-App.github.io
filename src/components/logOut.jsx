import {useAuth} from '../AuthContext';

const LogOut = () => {
    const {logout} = useAuth();
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default LogOut
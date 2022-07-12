


import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


const Login = ({ setIsAuth }) => {

    let navigasi = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(() => {
            localStorage.setItem('isAuth', true)
            setIsAuth(true)
            navigasi("/")
        })
    }

    return ( 
        <div>
                <Container className="text-center h-75 d-inline-block justify-content-center">
                    <p>Sign in with Google</p>
                    <button className="btn-primary" onClick={signInWithGoogle}>Sign In</button>
                </Container>
        </div>
     );
}
 
export default Login;
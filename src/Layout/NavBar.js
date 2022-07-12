import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'

const NavBar = ({udahAuth, setIsAuth}) => {
    const logOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        }).catch((err) => {
            console.log(err)
        })
    }


    return(
        <div>
            <Navbar bg="success" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>

                            {!udahAuth ? "" : <Nav.Link href="/createpoetry">Create Poetry</Nav.Link>}
                            

                            {!udahAuth ? <Nav.Link href="/login">Login</Nav.Link> : <button className="btn-danger" onClick={logOut}>Log Out</button>}
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavBar;
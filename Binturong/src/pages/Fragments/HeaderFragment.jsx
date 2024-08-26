import AuthContext from "../../Components/User/AuthContext";
import { Container, Nav, NavBar } from 'react-bootstrap';


export const HeaderFragment =()=> {
    const { user } = useContext(AuthContext);


    return (
        <header>
            <NavBar>
                <Container>
                    <NavBar.Brand href="#Home"> 2Gether</NavBar.Brand>
                    <NavBar.Toggle aria-controls="basic-navbar-nav" />
                    <NavBar.Collapse id="baseic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            {user ? (<Nav.Link href="/restricted">Restricted</Nav.Link>) : (<><Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link></>)}

                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>


        </header>




    )
}
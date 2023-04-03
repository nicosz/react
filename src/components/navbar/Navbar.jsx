import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cart/Cartwidget';
import SplitVariantExample from './dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./logo.css"
import { useContext } from 'react';
import { AuthContext } from "../../login/authcontext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function HeaderNav({ logo }) {

  const { SignIn, user, logOut } = useContext(AuthContext)

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className='contenedor-nav'>
          <Navbar.Brand as={Link} to="/"><img className='logo-navbar' src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <SplitVariantExample />
            </Nav>
            <Cartwidget />

            {user ?
              <>
                <p onClick={() => logOut()} className='my-auto mx-2 sign-out'><FontAwesomeIcon className='ms-3' icon={faRightFromBracket} /> Sign Out</p>
              </> :

              <>

                <p sign-out onClick={() => SignIn()} className='my-auto mx-2 sign-out'> <FontAwesomeIcon className='ms-3 logo-sign-In' icon={faUser} /> Sign In</p>
              </>
            }
            {user &&
              <div className='d-flex'>
                <img className='img-login mx-3' src={user.photoURL} alt="" />
                <p className='my-auto'><b> {user.displayName}</b></p>
              </div>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );

}

export default HeaderNav;
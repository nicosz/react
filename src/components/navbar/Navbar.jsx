import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cart/Cartwidget';
import { Link } from 'react-router-dom';
import SplitVariantExample from './dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./logo.css"


function HeaderNav({ logo }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className='contenedor-nav'>
          <Navbar.Brand as={Link} to="/lambing"><img className='logo-navbar' src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <SplitVariantExample />
                </Nav>
                <Cartwidget />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div >
        );

}

        export default HeaderNav;
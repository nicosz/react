import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cart/Cartwidget';
import { Link } from 'react-router-dom';
function HeaderNav({ title }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className='contenedor-nav'>
          <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Link className='mx-2' to="/">home</Link>
              <Link className='mx-2' to="/">remeras</Link>
              <Link className='mx-2' to="/">pantalones</Link>
            </Nav>
            <Cartwidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );

}

export default HeaderNav;
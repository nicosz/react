import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cart/Cartwidget';
import { Link } from 'react-router-dom';
import { categories } from '../../data/data';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function HeaderNav({ title }) {
  let i = 0
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
              <NavDropdown 
                id="nav-dropdown-dark-example"
                title="Dropdown"
              >
                {categories.map((category) => (
                  <NavDropdown.Item  as={Link} key={i++}  to={`/category/${category.toLowerCase()}`}>{category}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Cartwidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );

}

export default HeaderNav;
import { TiHomeOutline } from "react-icons/ti";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './OffCanvas.css';
function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow} className="mt-2">
                Menu
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} style={{ height: '31vh' }}   >
                <Offcanvas.Header style={{
                    backgroundColor: '#317B76'
                }} closeButton className="d-flex align-items-center justify-content-center">
                    
                </Offcanvas.Header>
                <Offcanvas.Body style={{
                    backgroundColor: '#317B76'}} className="d-flex align-items-center justify-content-center">
                    <Navbar expand="lg" style={{ backgroundColor: '#317B76', fontWeight: '500' }}  >
                        <Container >

                            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center" >
                                <Navbar.Brand ><Link to="/" className="navColor "><TiHomeOutline /></Link></Navbar.Brand>

                                <Nav >
                                    <Nav.Link   ><Link className="navColor " to="/about">About</Link></Nav.Link>
                                    <Nav.Link ><Link className="navColor " to="/skills">Skills</Link></Nav.Link>
                                    <NavDropdown title="Opinions" id="basic-nav-dropdown" >
                                        <NavDropdown.Item ><Link className="navColor " to="/opinions">Show opinions</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item >
                                            <Link className="navColor " to="/addopinions">Add Opinion</Link>
                                        </NavDropdown.Item>


                                    </NavDropdown>
                                    <NavDropdown title="Questions" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link className="navColor " to="/questions">Show answers</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item >
                                            <Link className="navColor " to="/addquestions">Add question</Link>
                                        </NavDropdown.Item>


                                    </NavDropdown>
                                    <Nav.Link ><Link className="navColor " to="/contact">Contact</Link></Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
    return (
        <>
            {['top'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}

export default Example;

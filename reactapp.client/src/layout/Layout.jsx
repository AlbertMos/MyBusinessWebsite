import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Layout.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export function Layout() {


    return (
        <div className="app" style={{ backgroundColor: '#20272C'}}>

            <Navbar expand="lg" style={{ backgroundColor: '#317B76', fontWeight: '500'}} className=""  >
                <Container  >
                    
                    

                    <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center" >
                    <Navbar.Brand ><Link to="/" className="navColor "><TiHomeOutline/></Link></Navbar.Brand>

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


            <Container fluid>
                <Outlet />
            </Container>
            

            <Container expand="lg" fluid className='text-center outline' style={{ backgroundColor: '#317B76' }}>  
                <Container className='p-0'>
                    <Container className=' d-flex justify-content-center'>
                       
                    <Row>
                            <Col className='m-1 ' role='button'>
                        
                                

                                <a href="https://www.linkedin.com/in/albert-m-3a9111253/" target="_blank" rel="noopener noreferrer" className=' linkedhub'>
                                    <CiLinkedin />
                                </a>
                        </Col>

                            <Col  className='m-1 '  role='button'>
                                <a href="#" target="_blank" rel="noopener noreferrer" className=' linkedhub'>
                                    <FaGithub />
                                </a>
                        </Col>
                     </Row>
                    </Container>
                    

                   

                    
                </Container>

                <Container className='text-center p-0 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#317B76 ', fontWeight: '500' }}>
                    <PiCopyrightLight /> 2024 Copyright:
                    <a className='text-dark m-2'>
                        Albert Mossakowski
                    </a>
                </Container>
            </Container>
        </div>
    );

}
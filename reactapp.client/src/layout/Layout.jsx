import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';



import './Layout.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Example from '../components/OffCanvas.jsx';
export function Layout() {


    return (
        <div className="app" style={{ backgroundColor: '#20272C'}}>
            <div className="d-flex align-items-center justify-content-center">
<Example />
            </div>
            
            


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
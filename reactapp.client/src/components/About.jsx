import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import { BsBuildingGear } from "react-icons/bs";
import './About.css';
import { FaMagento } from "react-icons/fa6";
export const About = () => {

    return (



        <Container fluid className=" example-element d-flex justify-content-center align-items-center">
            <Row >

                <Col  className="d-flex justify-content-end  ">
                    <Image src="../Public/NewFolder/AboutPhoto.jpg" rounded style={{border:'solid 1px black'}} className="mx-3 picture" />
                </Col>
                <Col>
                    
                    <Stack gap={3} className="d-flex align-items-center p-5">
                        <h1 className='display-6 title mx-3' >Who am I?</h1>

                        
                        <p className='para mx-3 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='para2 mx-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br/> standard dummy text ever since the 1500s standard dummy text ever since the 1500s</p>
                        <Row >
                            <Col>
                                <Stack className="d-flex align-items-center">
                                    <BsBuildingGear className="text-primary  " style={{ fontSize: '30px' }} />
                                    <h6 className="titles mx-3 mt-3">  My Brand</h6>
                                    <p className='para font-weight-light'>Lorem Ipsum is simply dummy text <br />of the printing and typesetting industry.</p>
                                </Stack>
                            
                            </Col>
                            <Col>
                                <Stack className="d-flex align-items-center">
                                    <FaMagento className="text-primary mx-3 " style={{ fontSize: '30px' } } />
                                    <h6 className="titles mx-3 mt-3">Digital Agency</h6> 
                                    <p className='para font-weight-light'>Lorem Ipsum is simply dummy text<br/> of the printing and typesetting industry.</p>
                            </Stack>
                                      
                            </Col>
                        </Row>

                    </Stack>
                    
                </Col>
            </Row>

        </Container>


    );
}
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import './Skills.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaJava } from "react-icons/fa6";
import { FiDatabase } from "react-icons/fi";
import { SiMicrosoftexcel } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
export function Skills() {

    return (



        <Container fluid className="d-flex align-items-center justify-content-center example-element" >\
            
           
            <section className=" py-5 py-xl-6">
               
                <div className="container overflow-hidden">
                    <div className="row justify-content-xl-center gy-3 gy-sm-4">
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-light rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <div className="d-flex align-items-center justify-content-center">
                                    <FaJava style={{ fontSize: '40px'  }} />
                                    <h3 className="fw-bold mb-2">Java</h3></div>
                                
                                <Accordion className="mt-2">
                                    <Accordion.Item className="bg-light" eventKey="0">

                                        <Accordion.Header ><div className=" fst-italic">Read more</div></Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" >

                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="progress mt-2">
                                    <div className="bg-success progress-bar w-85 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Bootstrap" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-light rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <div className="d-flex align-items-center justify-content-center">
                                    <FiDatabase style={{ fontSize: '40px' }} />
                                    <h3 className="fw-bold mb-2">SQL</h3></div>
                                <Accordion className="mt-2" >
                                    <Accordion.Item className="bg-light" eventKey="0">

                                        <Accordion.Header ><div className=" fst-italic">Read more</div></Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" >

                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="progress mt-2">
                                    <div className="bg-success progress-bar w-75 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="React" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            
                            <div className="bg-light rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <div className="d-flex align-items-center justify-content-center">
                                    <SiMicrosoftexcel style={{ fontSize: '40px' }} />
                                    <h3 className="fw-bold mb-2">Excel</h3></div>
                                <Accordion className="mt-2" >
                                    <Accordion.Item className="bg-light" eventKey="0">

                                        <Accordion.Header ><div className=" fst-italic">Read more</div></Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" >

                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className=" progress mt-2">
                                    <div className="bg-success progress-bar w-95 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="WordPress" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            
                            <div className="bg-light rounded shadow-sm p-3 p-md-4 p-xxl-5">



                                <div className="d-flex align-items-center justify-content-center">
                                    <FcLinux style={{ fontSize: '40px' }} />
                                    <h3 className="fw-bold mb-2">Bash</h3></div>
                                <Accordion className="mt-2">
                                    <Accordion.Item className="bg-light" eventKey="0">

                                        <Accordion.Header ><div className=" fst-italic">Read more</div></Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" >

                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="progress mt-2" >
                                    <div className="bg-warning progress-bar w-50 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Vue" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-light rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <div className="d-flex align-items-center justify-content-center">
                                    <FaReact style={{ fontSize: '40px' }} />
                                    <h3 className="fw-bold mb-2">React</h3></div>
                                <Accordion className="mt-2">
                                    <Accordion.Item className="bg-light" eventKey="0">

                                        <Accordion.Header ><div className=" fst-italic">Read more</div></Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" >

                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="progress mt-2">
                                    <div className=" bg-danger progress-bar w-30 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="WordPress" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-light rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <div className="d-flex align-items-center justify-content-center">
                                    <SiCplusplus style={{ fontSize: '30px' }} />
                                    <h3 className="fw-bold mb-2">C++</h3>
                                </div>
                                <Accordion className="mt-2">
                                    <Accordion.Item className="bg-light" eventKey="0">

                                        <Accordion.Header ><div className=" fst-italic">Read more</div></Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" >

                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="progress mt-2">
                                    <div className=" bg-danger progress-bar w-30 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="WordPress" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" >30%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>


    );
}
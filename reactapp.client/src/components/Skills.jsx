import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import './Skills.css';
import ListGroup from 'react-bootstrap/ListGroup';
export function Skills() {

    return (



        <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '90vh' }}>\
            
           
            <section className=" py-5 py-xl-6">
               
                <div className="container overflow-hidden">
                    <div className="row justify-content-xl-center gy-3 gy-sm-4">
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">Java</h3>
                                <p className="text-secondary fst-italic mb-4">Nullam felis turpis, commodo id fermentum eget, semper vel odio.</p>
                                <div className="progress">
                                    <div className="progress-bar w-85 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Bootstrap" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">SQL</h3>
                                <p className="text-secondary fst-italic mb-4">Nullam felis turpis, commodo id fermentum eget, semper vel odio.</p>
                                <div className="progress">
                                    <div className="progress-bar w-75 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="React" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                
                                

                                <h3 className="fw-bold mb-2">Bash</h3>
                                <Accordion  defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        
                                        <Accordion.Header >More</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" >
                                    
                                    <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                                </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="progress mt-2" >
                                    <div className="progress-bar w-65 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Vue" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">React</h3>
                                <p className="text-secondary fst-italic mb-4">Nullam felis turpis, commodo id fermentum eget, semper vel odio.</p>
                                <div className="progress">
                                    <div className="progress-bar w-95 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="WordPress" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">React</h3>
                                <p className="text-secondary fst-italic mb-4">Nullam felis turpis, commodo id fermentum eget, semper vel odio.</p>
                                <div className="progress">
                                    <div className="progress-bar w-95 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="WordPress" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">React</h3>
                                <p className="text-secondary fst-italic mb-4">Nullam felis turpis, commodo id fermentum eget, semper vel odio.</p>
                                <div className="progress">
                                    <div className="progress-bar w-95 progress-bar-striped progress-bar-animated" role="progressbar" aria-label="WordPress" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>


    );
}
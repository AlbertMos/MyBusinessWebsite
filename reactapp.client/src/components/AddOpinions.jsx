import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './AddOpinions.css';
export const AddOpinions = () => {

    return (



        <Container fluid  className="d-flex align-items-center justify-content-center example-element">
            <Card className="przylec cards bg-light">
                <Card.Title className="header">
                    Add your opinion about working with me
                </Card.Title>
                <div className="services">
                    <Card.Body className="content content-1">
                        <div className="fab fa-twitter"></div>
                        <h2>
                            Your opinion
                        </h2>
                        <Form>
                            <Row>
                                <Col xs={12} className="d-flex align-items-center justify-content-center mt-3">
                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                        
                                        <Form.Control type="text" placeholder="Date of issue" required />
                                    </Form.Group>
                                </Col>
                                <Col xs={6} className="mt-3">
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col xs={6} className="mt-3">
                                    <Form.Control placeholder="Company" />
                                </Col>
                                <Col xs={12} className="mt-3">
                                    <Form.Label>Your status:</Form.Label>
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} >
                                            <Form.Check
                                                inline
                                                label="Boss"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Coworker"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />

                                        </div>
                                    ))}
                                </Col>

                                <Col className="mt-3">
                                    <Form.Select aria-label="Default select example">
                                        <option>Engagement</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </Col>

                                <Col className="mt-3">
                                    <Form.Select aria-label="Default select example">
                                        <option>Knownledge</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </Col>

                                <Col className="mt-3">
                                    <Form.Select aria-label="Default select example">
                                        <option>Motivation</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </Col>

                                <Col xs={12} className="mt-3">

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Col>


                                <Col xs={12} className="mt-3">
                                    <Form.Select aria-label="Default select example">
                                        <option>My opinion is</option>
                                        <option value="1" className="bg-success">Positive</option>
                                        <option value="2" className="bg-warning">Neutral</option>
                                        <option value="3" className="bg-danger">Negative</option>
                                    </Form.Select>

                                </Col>
                            </Row>


                        </Form>
                        <a href="#">Send</a>
                    </Card.Body >

                </div>
            </Card>

        </Container>


    );
}
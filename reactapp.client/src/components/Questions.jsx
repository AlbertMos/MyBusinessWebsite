import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Cards from './Cards';




export function Questions() {
    
    return (



        <Container fluid  className="przylec d-flex justify-content-center align-items-center example-element">
            <Row className=" mb-5">
                <Col  className="pb-3 pt-5 d-flex justify-content-center align-items-center ">
                    <Accordion style={{ width: '20%' }} defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Search question</Accordion.Header>
                            <Accordion.Body>
                                <Form.Group className="mb-3">
                                    <Form.Label>Question </Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Question1</option>
                                        <option value="1">Question2</option>
                                        <option value="2">Question3</option>
                                        <option value="3">Question4</option>
                                    </Form.Select>
                                </Form.Group>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col xs={12} >

                    <Cards />
                </Col>
            </Row>

        </Container>


    );
}
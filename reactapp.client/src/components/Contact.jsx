import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export function Contact() {

    return (



        <Container fluid  className="example-element">
            <Row >
                <Col className="p-5 ">
                    <h1 className="display-1 contactStyle mt-5">Contact Me</h1>
                </Col>
            </Row>
            <Row  className="my-4">
                <Col xs={12} md={ 6} className="p-5 mt-5 my-5">
                    <Stack className="d-flex align-items-start ">
                    <h3 className="display-6 contactStyle p-2">Get in touch</h3>
                        <p className="contactStyle p-2 my-2">Email: XXXXXXXX@XXXXXX.com</p>
                        <p className="contactStyle p-2 my-2">Phone: +48 XXX XXX XXX</p>
                    <p className="contactStyle p-2 my-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                    </Stack>
                    
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                
                    <Form className="d-xs-none">

                    <Row className="pt-5 mt-5 ">
                            <Col xs={12} md={6}>
                                <Form.Label className="contactStyle ">Name</Form.Label>
                                <Form.Control placeholder="Name" style={{ backgroundColor: '#20272C', color: 'White' }} />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label className="contactStyle ">Email address</Form.Label>
                                <Form.Control placeholder="Email" style={{ backgroundColor: '#20272C', color: 'White' }} />
                            </Col>
                            <Col className="mt-2">
                                <Form.Label className="contactStyle ">Comments</Form.Label>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments" >
                                    
                                <Form.Control className="placeHolderColor"
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                        style={{ height: '100px', backgroundColor: '#20272C', color:'White' }}
                                />
                                </FloatingLabel>
                        </Col>
                        

                        </Row>
                        <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="mt-2">
                        Send
                    </Button>

                        </div>
                        
                </Form>
                    
                </Col>
            </Row>
        </Container>


    );
}
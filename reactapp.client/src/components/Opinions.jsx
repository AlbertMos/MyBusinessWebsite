import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Opinions.css';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination';
export function Opinions() {

    return (

        <Container fluid style={{height:'90vh'}}  className="d-flex justify-content-center align-items-center" >

        
            <Row className="przylec card shadow mt-1  " >
                <Accordion className="mt-3 ">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >Szukaj</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Search by Company </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Search by Year </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Search by status </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>POS/NEU/NEG </Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Pick</option>
                                            <option value="1" className="bg-success">Positive</option>
                                            <option value="2" className="bg-warning">Neutral</option>
                                            <option value="3" className="bg-danger">Negative</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                   
                </Accordion>
                
                <div className="card-header border-0">
                    <h3 className="mb-0">Opinions</h3>
                </div>

                <div className="table-responsive-sm">

                <Table>
                    <thead className="thead-light bd-dark">
                    <tr>
                        <th>Date</th>
                        <th>First Name</th>
                        <th>Company</th>
                        
                        <th>Engagement</th>
                        <th>Knownledge</th>
                        <th>Motivation</th>
                        <th>Comment</th>
                        <th>Pos/Neu/Neg</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024</td>
                        <td>Fryderyk</td>
                        <td>Samsung</td>
                        
                        <td>4/5</td>
                        <td>3/5</td>
                        <td>5/5</td>
                        <td>Polecam tego pracownika</td>
                            <td>Positive</td>
                    </tr>
                    <tr>
                        <td>2014</td>
                        <td>Zbigniew</td>
                        <td>PWC</td>
                        
                        <td>4/5</td>
                        <td>5/5</td>
                        <td>5/5</td>
                            <td>Polecam tego pracownika</td>
                            <td>Positive</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>Kuba</td>
                        <td>Accenture</td>
                        
                        <td>5/5</td>
                        <td>5/5</td>
                        <td>5/5</td>
                            <td>Polecam tego pracownika</td>
                        <td>Positive</td>
                    </tr>
                    </tbody>
                    <div className="card-footer py-4">
                       
                    </div>
                </Table>


                </div>
                <Pagination>
                    
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>                 
                    <Pagination.Item active>{3}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>{7}</Pagination.Item>
                    <Pagination.Next />
                    
                </Pagination>
                

                </Row>

        </Container>

        


    );
}
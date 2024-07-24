
import { Formik,Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './AddOpinions.css';

export const AddOpinions = () => {
    const validationSchema = Yup.object().shape({
        dateOfIssue: Yup.string().required('Date of issue is required'),
        firstName: Yup.string().required('First name is required'),
        company: Yup.string().required('Company is required'),
        engagement: Yup.number().required('Engagement is required'),
        knowledge: Yup.number().required('Knowledge is required'),
        motivation: Yup.number().required('Motivation is required'),
        comment: Yup.string().required('Comment is required'),
        opinion: Yup.string().required('Opinion is required'),
    });


    return (
        <Container fluid className="d-flex align-items-center justify-content-center example-element">
            <Card className="przylec cards bg-light">
                <Card.Title className="header">Add your opinion about working with me</Card.Title>
                <div className="services">
                    <Card.Body className="content content-1">
                        <div className="fab fa-twitter"></div>
                        <h2>
                            Your opinion
                        </h2>
                        <Formik initialValues={{
                            dateOfIssue: '',
                        firstName: '',
                        company: '',
                        engagement: '',
                        knowledge: '',
                        motivation: '',
                        comment: '',
                        opinion: '',
                        }} validationSchema={validationSchema} >
                            
                            <FormikForm>
                                <Row>
                                    <Col xs={12} className="d-flex align-items-center justify-content-center mt-3">
                                        <Field type="text" name="dateOfIssue" placeholder="Date of issue" className="form-control" />
                                        <ErrorMessage name="dateOfIssue" component="div" className="text-danger" />
                                    </Col>
                                    <Col xs={6} className="mt-3">
                                        <Field type="text" name="firstName" placeholder="First name" className="form-control" />
                                        <ErrorMessage name="firstName" component="div" className="text-danger" />
                                    </Col>
                                    <Col xs={6} className="mt-3">
                                        <Field type="text" name="company" placeholder="Company" className="form-control" />
                                        <ErrorMessage name="company" component="div" className="text-danger" />
                                    </Col>
                                    <Col className="mt-3">
                                        <Field as="select" name="engagement" className="form-select">
                                            <option value="">Engagement</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Field>
                                        <ErrorMessage name="engagement" component="div" className="text-danger" />
                                    </Col>
                                    <Col className="mt-3">
                                        <Field as="select" name="knowledge" className="form-select">
                                            <option value="">Knowledge</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Field>
                                        <ErrorMessage name="knowledge" component="div" className="text-danger" />
                                    </Col>
                                    <Col className="mt-3">
                                        <Field as="select" name="motivation" className="form-select">
                                            <option value="">Motivation</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Field>
                                        <ErrorMessage name="motivation" component="div" className="text-danger" />
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <Field as="textarea" name="comment" rows={3} className="form-control" />
                                        <ErrorMessage name="comment" component="div" className="text-danger" />
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <Field as="select" name="opinion" className="form-select">
                                            <option value="">My opinion is</option>
                                            <option value="Positive" className="bg-success">Positive</option>
                                            <option value="Neutral" className="bg-warning">Neutral</option>
                                            <option value="Negative" className="bg-danger">Negative</option>
                                        </Field>
                                        <ErrorMessage name="opinion" component="div" className="text-danger" />
                                    </Col>
                                </Row>
                                
                            </FormikForm>
                        </Formik>
                        <a href="#">Send</a>
                    </Card.Body>
                </div>
            </Card>
        </Container>
    );
};

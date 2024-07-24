import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './AddQuestions.css';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('myButton!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: '#03f4a4' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const AddQuestionSchema = Yup.object().shape({//tworzy nowy obiekt schematu
    name: Yup.string()
        .min(2, 'Za kr�tkie!')
        .max(50, 'Za d�ugie!')
        .required('Wymagane'),
    question: Yup.string()
        .min(5, 'Za kr�tkie!')
        .required('Wymagane'),
});

export function AddQuestions() {
    return (
        <Container fluid style={{ height: '90vh' }} className="przylec d-flex align-items-center justify-content-center example-element ">
            <Col className="d-flex align-items-center justify-content-center hide-on-small-screens ">
                <div>
                    <h2 style={{ color: '#fff' }} className="text-center ">
                        How it works?
                    </h2>
                    <Accordion defaultActiveKey="0" style={{ width: '240px' }}>
                        <Card style={{ backgroundColor: 'black', color: 'white' }}>
                            <Card.Header className="d-flex align-items-center justify-content-center">
                                <CustomToggle eventKey="1">Click me!</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Ask me a question about computer science and I will answer it. <br />
                                    The answer are in the show opinions tab in the menu
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </Col>
            <Col className="table-responsive-sm">
                <div className="login-box">
                    <h2 style={{ color: '#fff' }}>
                        Add Question
                    </h2>
                    <Formik //zarz�dza stanem formularza
                        initialValues={{ name: '', question: '' }}//kofiguracja formika
                        validationSchema={AddQuestionSchema}
                        
                    >
                        { 
                            <FormikForm className="login-form">
                                <Form.Group className="user-box" as={Col} controlId="validationCustom05">
                                    <Form.Label style={{
                                        padding: '10px 0',
                                        color: '#fff'
                                    }} className="label">Your name:</Form.Label>
                                    <Field
                                        name="name" //powi�zane z initialValues name
                                        className="form-control"
                                        placeholder="Your name"
                                        style={{
                                            width: '100%',
                                            padding: '10px 0',
                                            fontSize: '16px',
                                            color: '#fff',
                                            marginBottom: '30px',
                                            border: 'none',
                                            borderBottom: '1px solid #fff',
                                            outline: 'none',
                                            background: 'black'
                                        }}
                                    />
                                    <ErrorMessage name="name" component="div" className="text-danger" /> 
                                </Form.Group>
                                <Form.Group className="user-box" as={Col} controlId="validationCustom05">
                                    <Form.Label style={{
                                        padding: '10px 0',
                                        color: '#fff'
                                    }} className="label">Your question:</Form.Label>
                                    <Field
                                        name="question"
                                        className="form-control"
                                        placeholder="Your question"
                                        style={{
                                            width: '100%',
                                            padding: '10px 0',
                                            fontSize: '16px',
                                            color: '#fff',
                                            marginBottom: '30px',
                                            border: 'none',
                                            borderBottom: '1px solid #fff',
                                            outline: 'none',
                                            background: 'black'
                                        }}
                                    />
                                    <ErrorMessage name="question" component="div" className="text-danger" />
                                </Form.Group>
                                <div className="d-flex justify-content-center">
                                    <a href="#" >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span ></span>
                                        SUBMIT
                                    </a>
                                </div>
                            </FormikForm>
                        }
                    </Formik>
                </div>
            </Col>
        </Container>
    );
}

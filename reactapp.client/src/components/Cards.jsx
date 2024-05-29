
import Card from "./Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image1 from '../../public/NewFolder/image1.jpg'
import image3 from '../../public/NewFolder/image3.jpg'

const cards = [
    {
        id: 1,
        title: "How do you create an array?",
        image: image1,
        
    },
    {
        id: 2,
        title: "Is React hard?",
        image: image3,
        
    },
    {
        id: 3,
        title: "How do you write games in c++?",
        image: image1,
        
    },
    {
        id: 4,
        title: "How to start programming??",
        image: image3,

    },
    {
        id: 5,
        title: "How do you write games in c++?",
        image: image1,

    },
    {
        id: 6,
        title: "How to start programming??",
        image: image3,

    }
];

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <Row >
                {cards.map(({ title, image,  id }) => (
                    <Col md={ 4}  key={id}>
                        <Card imageSource={image} title={title}  />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Cards;

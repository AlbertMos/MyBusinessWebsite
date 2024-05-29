
import { Accordion, ListGroup } from 'react-bootstrap';
import PropTypes from "prop-types";

const Card = ({ title, icon, progressBg, progressWidth }) => {
    return (
        <div className="bg-light rounded shadow-sm p-3 p-md-4 p-xxl-5">
            <div className="d-flex align-items-center justify-content-center">
                {icon}
                <h3 className="fw-bold mb-2">{title}</h3>
            </div>

            <Accordion className="mt-2">
                <Accordion.Item className="bg-light" eventKey="0">
                    <Accordion.Header>
                        <div className="fst-italic">Read more</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup as="ol">
                            <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item variant="info" as="li">Cras justo odio</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className={`progress mt-2 `}>
                <div className={`${progressBg} progress-bar w-${progressWidth} progress-bar-striped progress-bar-animated`} role="progressbar" aria-label="Bootstrap" aria-valuenow={progressWidth} aria-valuemin="0" aria-valuemax="100">{progressWidth}%</div>
            </div>
        </div>
    );
};
Card.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    progressBg: PropTypes.string.isRequired,
    progressWidth: PropTypes.string.isRequired
    

};

export default Card;


import PropTypes from "prop-types";

import "./Card.css";

function Card({ imageSource, title}) {//przyjmujemy propsy czyli wlasciwosci
    return (
        <div className="card text-center bg-dark mb-2">
            <div className="overflow">
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body2 text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.
                </p>
              
            </div>
        </div>
    );
}

Card.propTypes = {//definiujemy w³aœciwoœci
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string
};

export default Card;

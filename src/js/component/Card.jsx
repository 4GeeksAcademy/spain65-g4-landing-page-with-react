import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.btnUrl} className="btn btn-primary">{props.btnLabel}</a>
            </div>
        </div>
    )
};

Card.defaultProps = {
    title: 'Card',
    description: 'Alguna descripción referente a la Card',
    image: '../../rigo-baby.jpg',
    btnUrl: ' ',
    btnLabel: 'Leer más',
}

Card.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    btnUrl: PropTypes.string,
    btnLabel: PropTypes.string,
}

export default Card
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.subtitle}</p>
            <hr className="my-4" />
            <p>{props.description}</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                    {props.buttonLabel}
                </a>
            </p>
        </div>
    );
};

Jumbotron.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
};

Jumbotron.defaultProps = {
    title: "Default Title",
    subtitle: "Default Subtitle",
    description: "Default Description",
    buttonLabel: "Default Button Label",
};

ReactDOM.render(<Jumbotron />, document.querySelector("#app"));
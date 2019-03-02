import React from "react";
import PropTypes from "prop-types";

const Card = ({ card }) => {
  Card.propTypes = {
    card: PropTypes.shape({
      headline: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
  };
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt="" />
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};
export default Card;

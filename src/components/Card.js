/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, flag, code, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img">
        <img src={flag} alt={name} id={code} />
      </div>
      <div className="card-name">
        <span>{name}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;

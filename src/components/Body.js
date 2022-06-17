import React from 'react';
import PropTypes from 'prop-types';
import CardsWrapper from './CardsWrapper';

function Body({ setScore }) {
  return (
    <div className="app-body">
      <CardsWrapper setScore={setScore} />
    </div>
  );
}

Body.propTypes = {
  setScore: PropTypes.func.isRequired,
};
export default Body;

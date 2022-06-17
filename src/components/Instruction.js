import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Instruction({ onClick }) {
  const [show, setShow] = React.useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (!show) {
      ref.current.classList.add('fade-out');
      setTimeout(() => {
        onClick();
      }, 300);
    }
  }, [show]);

  return (
    <div className="start-screen" ref={ref}>
      <div className="start-screen-content">
        <h1>Memory Game</h1>
        <p>
          Click on the cards as much as you can, but remember not to click on
          cards previous clicked.
        </p>
        <button
          type="button"
          className="start-button"
          onClick={() => setShow(false)}
        >
          Start
        </button>
      </div>
    </div>
  );
}

Instruction.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Instruction;

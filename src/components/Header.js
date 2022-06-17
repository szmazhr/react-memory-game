import PropTypes from 'prop-types';
import React from 'react';
import Stats from './Stats';

function Header({ text, score }) {
  return (
    <header className="header">
      <div>
        <span>
          <a href="./">{text}</a>
          <sub>
            powered by{' '}
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              reactjs
            </a>
          </sub>
        </span>
      </div>
      <Stats score={score} />
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Header;

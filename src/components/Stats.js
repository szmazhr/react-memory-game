import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Stats({ score }) {
  const [highScore, setHighScore] = React.useState(0);
  const [animate, setAnimate] = React.useState([]);
  const [prevScore, setPrevScore] = React.useState(0);

  const animated = (key) => {
    if (key === 'reset') {
      setAnimate([]);
      setPrevScore(0);
    } else {
      setAnimate(animate.filter((item) => item.key !== key));
    }
  };

  const add = (
    <span className="add" key={score} onAnimationEnd={() => animated(score)}>
      +{score - prevScore}
    </span>
  );
  const less = (
    <span className="less" key="reset" onAnimationEnd={() => animated('reset')}>
      -{prevScore}
    </span>
  );

  useEffect(() => {
    setHighScore(Math.max(score, highScore));
    if (score) {
      setAnimate([...animate, add]);
    } else if (prevScore) {
      setAnimate([...animate, less]);
    }
    setPrevScore(score);
  }, [score]);

  return (
    <div className="stats">
      <div className="stats-item">
        <span>Score:</span>
        <span>{score || '-'}</span>
        {animate}
      </div>
      <div className="stats-item">
        <span>High Score:</span>
        <span>{highScore || '-'}</span>
      </div>
    </div>
  );
}

Stats.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Stats;

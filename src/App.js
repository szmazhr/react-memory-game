import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Instruction from './components/Instruction';

function App() {
  const [score, setScore] = React.useState(0);
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  return (
    <div className="app">
      {!isGameStarted && <Instruction onClick={() => setIsGameStarted(true)} />}
      <Header text="Memory Game" score={score} />
      <Body setScore={setScore} />
      <Footer
        name="Shahzar Mazhar"
        repoLink="https://github.com/szmazhr/react-memory-game"
      />
    </div>
  );
}

export default App;

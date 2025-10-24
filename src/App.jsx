import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const handleHelloClick = () => {
    alert('Hello World!');
  };

  return (
    <div className="App">
      <Navigation />
      <Container>
        <h1 className="hello-title">Hello World!</h1>
        <p className="app-description">React-приложение с компонентами.</p>
        <Button onClick={handleHelloClick}>Нажми меня!</Button>
        <Button variant="secondary">Вторичная кнопка</Button>
      </Container>
    </div>
  );
}

export default App;
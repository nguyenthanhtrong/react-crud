import MyRouter from './router/index';
import './App.scss';
import Menu from '_components/Menu';
import React from 'react';



function App() {
  return (
    <div className="App-container">
      <Menu />
          <MyRouter/>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';
import './App.css';

function App() {
  return <Toggle onToggle={on => console.log('toggle', on)} />;
}

ReactDOM.render(<App />, document.getElementById('root'));

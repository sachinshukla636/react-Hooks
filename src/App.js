import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState('Sachin');
  return (
    <div>
      <h1>Hooks {data}</h1>
      <button onClick={() => setData('Sachin Shukla')}>Update data</button>
    </div>
  );
}

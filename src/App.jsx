import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const request = async () => {
    const result = await axios.post('http://localhost:4000', {username: "test", password: "Test"});
    console.log(result)
    alert("test");
  };

  return (
    <div className="App">
      <h1>Teste</h1>
      <button onClick={request}>Make request</button>
    </div>
  );
}

export default App;

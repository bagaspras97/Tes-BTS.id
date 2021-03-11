import { useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';

function App() {
  useEffect(() => {
    axios.get('http://18.139.50.74:8080/v2/api-docs').then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch(`/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="p-4 bg-amber-50">
      <h2 className="font-bold p-4">{message}</h2>
      <Button>Hello</Button>
    </div>
  );
}

export default App;

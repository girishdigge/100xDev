import { useEffect, useState } from 'react';

const useTodos = () => {
  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'Gym',
      description: 'go to gym 6 to 7',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:3000/todos').then((res) => {
      res.json().then((data) => {
        const newArr = [...todos, ...data];

        setTodos(newArr);
      });
    });
  }, []);
  return todos;
};

const App = () => {
  const todos = useTodos();
  return (
    <div className='flex '>
      <h1>Todos</h1>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            {todo.title}
            {todo.description}
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default App;

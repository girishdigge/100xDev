interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

type updateTodo = Partial<Todo>;

const updateTodoFunction = (id: number, newProps: updateTodo) => {
  const a = { id, ...newProps };
  console.log(a);
};

updateTodoFunction(1, {
  title: 'abcd',
});
const swapElement = <T, P>(arr1: T, arr2: P): [P, T] => {
  return [arr2, arr1];
};

const swap = swapElement(1231, '2');
const swap1 = swapElement('1231', 'as');
const swap2 = swapElement('1231', true);
console.log(swap);
console.log(swap1);
console.log(swap2);

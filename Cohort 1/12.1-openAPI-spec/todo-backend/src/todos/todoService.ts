import { Todo } from './todo';
export type TodoCreationParams = Pick<Todo, 'title' | 'description'>;

export class TodoService {
  public get(todoId: number): Todo {
    return {
      id: todoId,
      title: 'mocked todo',
      description: 'mocked todo',
      done: false,
    };
  }
  public create(TodoCreationParams: TodoCreationParams): Todo {
    return {
      id: 1,
      title: 'mocked todo',
      description: 'mocked todo',
      done: false,
    };
  }
}

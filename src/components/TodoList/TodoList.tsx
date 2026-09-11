import usersFromServer from '../../api/users';
import { TodoInfo } from '../TodoInfo/TodoInfo';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
  user?: User;
}

interface Props {
  todos: Todo[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user =
          todo.user ||
          usersFromServer.find(currentUser => currentUser.id === todo.userId);

        if (!user) {
          return null;
        }

        return (
          <TodoInfo
            todo={{
              ...todo,
              user,
            }}
            key={todo.id}
          />
        );
      })}
    </section>
  );
};
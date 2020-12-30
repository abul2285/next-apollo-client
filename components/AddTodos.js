import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ADD_TODO } from "./AddTodo";

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      task
    }
  }
`;

function AddTodos() {
  let input;
  const { data, loading } = useQuery(GET_TODOS, {
    fetchPolicy: "cache-first",
  });
  const [addTodo, { client }] = useMutation(ADD_TODO, {
    update(_, { data: { addTodo } }) {
      let { todos } = client.readQuery({ query: GET_TODOS });
      client.writeQuery({
        query: GET_TODOS,
        data: { todos: [...todos, addTodo] },
      });
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { task: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button task="submit">Add Todo</button>
      </form>
      {data?.todos &&
        data.todos.map((todo) => <p key={todo.id}>{todo.task}</p>)}
    </div>
  );
}

export default AddTodos;

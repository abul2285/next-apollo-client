const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $task: String!) {
    updateTodo(id: $id, task: $task) {
      id
      task
    }
  }
`;

function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({ id, task }) => {
    let input;

    return (
      <div key={id}>
        <p>{task}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo({ variables: { id, task: input.value } });
            input.value = "";
          }}
        >
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <button task="submit">Update Todo</button>
        </form>
      </div>
    );
  });
}

//state
const initialState = {
  todos: ["create project", "goto goa", "play cricket"],
};

//logic
function todolistReducer(state = initialState, action) {
  if (action.type === "ADDTODO") {
    return { todos: [...state.todos, action.payload] };
  }
  if (action.type === "DELETETODO") {
    var temp = [...state.todos];
    temp.splice(action.payload, 1);
    return { todos: [...temp] };
  }

  return state;
}

export default todolistReducer;

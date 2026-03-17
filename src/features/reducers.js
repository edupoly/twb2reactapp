import { v4 as uuidv4 } from "uuid";

class Todo {
  title = "";
  id = "";
  status = "";
  constructor(t) {
    this.title = t;
    this.id = uuidv4();
    this.status = false;
  }
}

export function todolistReducer(state, action) {
  if (action.type === "ADDTODO") {
    return {
      todos: [...state.todos, { ...new Todo(action.payload) }],
    };
  }
  if (action.type === "DELETETODO") {
    let temp = state.todos.filter((todo) => todo.id != action.payload);
    return { todos: [...temp] };
  }
  if (action.type === "DONETODO") {
    let temp = state.todos.map((todo) => {
      if (todo.id === action.payload) {
        todo.status = true;
      }
      return todo;
    });
    return { todos: [...temp] };
  }
}

export function counterReducer(state, action) {
  if (action.type == "INC") {
    return { count: state.count + 1 };
  }
  if (action.type == "DEC") {
    return { count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return { count: 0 };
  }
}

import { GET_SECTION, GET, GET_FILTER } from "./actions";

let index = 1;

export default function reducer(state, action) {
  switch (action.type) {
    case GET_SECTION:
      return { ...state, section: action.payload };

    case GET:
      return {
        ...state,
        todos: [...state.todos, { data: action.payload, id: index++ }],
      };

    case GET_FILTER:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
}

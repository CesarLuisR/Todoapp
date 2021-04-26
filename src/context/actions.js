// consts
export const GET_SECTION = "GET_SECTION";
export const GET = "GET";
export const GET_FILTER = "GET_FILTER";

export const changeSection = (dispatch, section) => {
  dispatch({
    type: GET_SECTION,
    payload: section,
  });
};

export const getTodo = (dispatch, todoInfo) => {
  dispatch({
    type: GET,
    payload: todoInfo,
  });
};

export const getTodoFilter = (data, todoInfo) => {
  let todoIndex = data.state.todos.filter((todo) => {
    return todo.id === todoInfo.id;
  });

  let sendInfo = data.state.todos.map((todo) => {
    if (todo.id === todoIndex[0].id) return todoInfo;
    else return todo;
  });

  data.dispatch({
    type: GET_FILTER,
    payload: sendInfo,
  });
};

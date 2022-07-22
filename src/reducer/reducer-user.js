export const initialStateUser = {
  user: null,
  users: [],
  totalUser: null,
  error: null,
  selectedUser: "",
  isFetching: false,
};

export const reducerFunctionUser = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SEND_REQUEST":
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case "GET_CREATED_USER":
      return {
        ...state,
        users: payload.users,
        totalUser: payload.total,
        isFetching: false,
      };
    case "ERROR_SEND_REQUEST":
      return {
        ...state,
        error: payload,
        isFetching: false,
      };
    case "SELECTED_USER":
      return {
        ...state,
        selectedUser: payload,
      };
    case "SUCCESS_CREATE_NEW_USER":
      return {
        ...state,
        isFetching: false,
        users: [payload, ...state.users],
      };
    case "SUCCESS_DELETE_USER":
      return {
        ...state,
        isFetching: false,
        users: state.users.filter((user) => user.id !== payload.id),
      };

    default:
      return state;
  }
};

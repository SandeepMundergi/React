const redux = require("redux");
const createStore = redux.createStore;
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// !action type
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

function fetchUsersrequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}
function fetchUserssuccess(user) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: user,
  };
}
function fetchUserserror() {
  return {
    type: FETCH_USERS_ERROR,
  };
}

// !reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        loading: true,
        users: [],
        error: "",
      };
      break;
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
      break;
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

const fetchUsers = () => {
  return async function (dispatch) {
    dispatch(fetchUsersrequest());
    await axios
      .get("https://api.github.com/users")
      .then((response) => {
        const userData = response.data.map((user) => user.url);
        console.log(response);
        dispatch(fetchUserssuccess(userData));
      })
      .catch((error) => {
        dispatch(fetchUserserror(error.message));
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());

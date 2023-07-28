// import React, { useReducer } from "react";
// const initalval = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//       break;
//     case "decrement":
//       return state - 1;
//       break;
//     case "reset":
//       return initalval;
//       break;
//     case "5":
//       for (var a = 0; a < 5; a++) {
//         state += 1;
//       }
//       return state;
//       break;
//     case "-5":
//       for (var a = 0; a < 5; a++) {
//         state -= 1;
//       }
//       return state;
//       break;

//     default:
//       return state;
//       break;
//   }
// };
// const UseReducerCounter = () => {
//   const [count, send] = useReducer(reducer, initalval);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => send("increment")}>Increment</button>
//       <button onClick={() => send("decrement")}>Decrement</button>
//       <button onClick={() => send("reset")}>Reset</button>
//       <button onClick={() => send("5")}>increment by 5</button>
//       <button onClick={() => send("-5")}>decrement by 5</button>
//     </div>
//   );
// };

// export default UseReducerCounter;

//! another example

import React, { Fragment, useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  users: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        users: action.payload,
      };
      break;
    case "FETCH_ERROR":
      return {
        loading: false,
        users: [],
        error: "Something went wrong",
      };

    default:
      return state;
      break;
  }
};
const UseReducerCounter = () => {
  const [users, dispatch] = useReducer(reducer, initialState);
  console.log(users.users);
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        // console.log(response.data);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.error });
      });
  }, []);
  return (
    <div>
      {users &&
        users.users.map((x) => {
          return (
            <Fragment>
              <li>{x.login}</li>
            </Fragment>
          );
        })}
    </div>
  );
};

export default UseReducerCounter;

// const redux = require("redux");
// const createStore = redux.createStore;

// //! type action

// const BUY_CAKE = "BUY_CAKE";
// const ADD_CAKE = "ADD_CAKE";

// //! action creater

// function buycake(a) {
//   return {
//     type: BUY_CAKE,
//     n: a,
//   };
// }
// function addcake(a) {
//   return {
//     type: ADD_CAKE,
//     n: a,
//   };
// }
// //! reducer function

// const initalstate = {
//   numofcake: 20,
// };

// const cakereducer = (state = initalstate, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         numofcake: state.numofcake - action.n,
//       };
//       break;
//     case ADD_CAKE:
//       return {
//         numofcake: state.numofcake + action.n,
//       };
//       break;

//     default:
//       return state;
//       break;
//   }
// };

// const store = createStore(cakereducer);
// console.log("inital state : ", store.getState());
// store.subscribe(() => {
//   console.log("update state :", store.getState());
// });
// store.dispatch(buycake(5));
// // store.dispatch(buycake());
// // store.dispatch(buycake());
// store.dispatch(addcake(1));

const redux = require("redux");
const createStore = redux.createStore;

//! type action

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE = "BUY_ICE";

//! action creater

function buycake(a) {
  return {
    type: BUY_CAKE,
    n: a,
  };
}
function buyice(a) {
  return {
    type: BUY_ICE,
    n: a,
  };
}
//! reducer function

const initalstate = {
  numofcake: 20,
  numofice: 20,
};

const cakereducer = (state = initalstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numofcake: state.numofcake - action.n,
      };
      break;
    case BUY_ICE:
      return {
        ...state,
        numofcake: state.numofice - action.n,
      };
      break;

    default:
      return state;
      break;
  }
};

const store = createStore(cakereducer);
console.log("inital state : ", store.getState());
store.subscribe(() => {
  console.log("update state :", store.getState());
});
store.dispatch(buycake(5));

store.dispatch(buyice(5));

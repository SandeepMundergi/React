const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// ! action type

const BUY_CAKE = "BUY_Cake";
const BUY_ICE = "BUY_IceCreame";

// !action creator
function buycake() {
  return {
    type: BUY_CAKE,
  };
}
function buyice() {
  return {
    type: BUY_ICE,
  };
}

// ! initilize the state

const initilizecake = {
  numcake: 30,
};
const initilizeice = {
  numice: 30,
};

// ! create reducer

const cakeReducer = (state = initilizecake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numcake: state.numcake - 5,
      };
      break;

    default:
      return state;
      break;
  }
};
const iceReducer = (state = initilizecake, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numice: state.numice - 2,
      };
      break;

    default:
      return state;
      break;
  }
};

const createRoot = redux.combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

const store = createStore(createRoot, applyMiddleWare(logger));
console.log("initial state", store.getState());
store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(buycake());
store.dispatch(buyice());

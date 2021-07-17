import React, { useReducer } from "react";

const ADD_COIN = "coin";
const PUSH = "push";

const initialState = {
  locked: true,
  coins: 0
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case ADD_COIN:
      if (state.locked === true) {
        return {
          coins: state.coins + 1,
          locked: false
        };
      }
      return state;
    case PUSH:
      return {
        ...state,
        locked: true
      };
    default:
      return state;
  }
}

function Turnstile() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>£{state.coins}</h2>
      <button onClick={() => dispatch({ type: ADD_COIN })}>💰</button>
      <button onClick={() => dispatch({ type: PUSH })}>🤚</button>
      <h1>{state.locked ? "Locked" : "Open"}</h1>
    </div>
  );
}

export default Turnstile;

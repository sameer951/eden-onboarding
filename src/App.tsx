import React, { useReducer, Fragment } from "react";
import Line from "./componets/circle-connector";
import Ball from "./componets/circle-text";
import OnboardForm from "./componets/onboard-form";
import ConfigData from "./json-data/formConfig";

const ActionTypes = {
  "NEXT": 'NEXT',
  "UPDATE_FORMDATA": "UPDATE_FORMDATA"
}
const reducer = (state, action) => {
  const { curIndex } = state;
  switch (action.type) {
    case ActionTypes.NEXT:
      return { ...state, curIndex: curIndex + 1 };
    case ActionTypes.UPDATE_FORMDATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
const DEFAULT_DATA = {
  title: 'Eden',
  numbers: [1, 2, 3, 4]
}
const lotteryStyle = {
  width: '40em',
  textAlign: 'center',
  margin: '1em auto auto',
  padding: '1em 0 2em 0',
}
const appStyle = {
  margin: '10vh',
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: '10px',
  minHeight: '80vh'
}
const onBoardFormData = ConfigData;
function App() {
  const [state, dispatch] = useReducer(reducer, { curIndex: 1 });
  return (<div className="App" style={appStyle}>
    <div style={lotteryStyle}>
      <div style={{ fontSize: '35px', }}><b>{DEFAULT_DATA.title} </b></div>
      <div>
        {DEFAULT_DATA.numbers.map((n, i) => (
          <Fragment key={`circle_${i}`}>
            {i !== 0 && <Line num={n} curIndex={state.curIndex}></Line>}
            <Ball num={n} curIndex={state.curIndex} style={{ position: 'relative' }} />
          </Fragment>
        ))}
        <OnboardForm data={onBoardFormData[state.curIndex - 1]} curIndex={state.curIndex} onSubmit={(data) => {
          dispatch({ payload: data, type: ActionTypes.UPDATE_FORMDATA });
          dispatch({ type: ActionTypes.NEXT })
        }} />
      </div>
    </div>
  </div>
  );
}

export default App;

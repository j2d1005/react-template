import React from 'react';
import CounterContainer from "./containers/CounterContainer";
import CounterContainerClassVer from "./containers/CounterContainerClassVer";

function App() {
  return (
    <div className="App">
        <CounterContainer />
        <CounterContainerClassVer />
    </div>
  );
}

export default App;

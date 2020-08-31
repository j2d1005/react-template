import React from 'react';
import CounterContainer from "./containers/CounterContainer";
import CounterContainerClassVer from "./containers/CounterContainerClassVer";
import CounterContainerSagaVer from "./containers/CounterContainerSagaVer";

function App() {
  return (
    <div className="App">
        <CounterContainer />
        <CounterContainerClassVer />
        <CounterContainerSagaVer />
    </div>
  );
}

export default App;

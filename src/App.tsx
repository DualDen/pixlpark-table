import React from 'react';
import './App.css'
import Table from "./components/Table/Table";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Loader from "./components/Loader/Loader";

function App() {
    const {isLoading} = useTypedSelector(state => state);
    console.log(isLoading)
  return (
    <div className="App">
            <Table/>
    </div>
  );
}

export default App;

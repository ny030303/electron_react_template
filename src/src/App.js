import logo from './logo.svg';
import './App.css';

const openDialog = () => {
  window.api.request("넘긴값", {
    value:1234, 
    key:'key', 
    calback :(result)=>{
    console.log('요청 후 결과 값 : ',result);
}});
};

function App() {
  return (
    <div className="App">
      {/* <button onClick={openDialog}>click</button> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className="text-3xl font-bold underline">
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="m-40 container">
      <h1 className="text-3xl font-bold underline">My New React App</h1>
      <p className="text-lime-400">
        This is my first React app created using create-react-app.
      </p>
    </div>
  );
}

export default App;

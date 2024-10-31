import logo from './logo.svg';
import './App.css';

function App() {

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  fetch("./data.json")
  .then(response => {
    if (!response.ok) { 
      throw new Error("Hubo un problema con la información");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response.json()); 
      }, getRandomInRange(2000, 4000));
    });
  })
    
    
  
  .then((data)=>console.log(data))
  .catch(error => {
    console.error("Hubo un problema con la solicitud:", error);
  });

  return (
    <div className="App">
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

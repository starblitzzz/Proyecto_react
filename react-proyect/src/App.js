import logo from './logo.svg';
import './App.css';
import Require from "./views/Require";
import Productlist from "./views/Productslist"

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
      <Productlist/>
    </div>
  );
}

export default App;

import React from "react";
import Container from "./components/Container"
import Footer from "./components/Footer";


//importo el componente que quiero de su archivo
function App (){
  return(
    <div>
      <header>
        <h1>SwipeIT</h1>
      </header>
      <Container />
      <Footer />
    </div>
  );
}

export default App;
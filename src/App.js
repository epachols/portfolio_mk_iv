import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header
        style={{
          textAlign: `center`,
          backgroundColor: `darkorchid`,
          width: `100vw`,
          // height: `10vh`,
        }}
      >
        <h1>header with stuff man</h1>
      </header>
      
      <main style={{backgroundColor: `inherit`}}>
        <section>intro to self</section>
        <section>motivations and goals</section>
        <section>past history/work experience</section>
      </main>
    </div>
  );
}

export default App;

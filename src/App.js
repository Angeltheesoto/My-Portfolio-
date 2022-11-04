// Dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Components
import Homepage from "./views/Homepage";

function App() {
  return (
    <div className="App">
      {
        <>
          <Homepage />
        </>
      }
    </div>
  );
}

export default App;

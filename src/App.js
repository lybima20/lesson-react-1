import React from "react";
import "./App.css";
import Pop from "./Popup";
import Header from "./Header";
 import Button from './Button';
 import Footer from "./Footer";


function App() {
  return (
    <div className="App">
<Header text="Vika Zakordonets" className="header"/>
      <Pop />

      <Footer text="lybima20" className="text2"/>
      <Button />
    </div>
  );
}

export default App;


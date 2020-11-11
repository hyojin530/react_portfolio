import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="App">
      <Header />
      <Stack/>
      <Contact />
    </div>
  );
}

export default App;

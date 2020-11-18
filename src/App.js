import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import About from "./components/About";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Stack/>
      <Contact />
    </div>
  );
}

export default App;

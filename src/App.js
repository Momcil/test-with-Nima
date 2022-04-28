import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllProjects from './pages/Project';
import User from './pages/User';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <AllProjects />
    </div>
  );
}

export default App;

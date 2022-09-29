import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTodo from './Component/AddTodoComponents/AddTodo';
import DisplayList from './Component/DisplayTodo/DisplayList';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={<AddTodo />} />
          <Route path='/Display' element={<DisplayList />} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;

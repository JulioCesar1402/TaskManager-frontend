import { Routes, Route } from 'react-router-dom';
import React from 'react';
import TasksList from '../Pages/Tasks';
import CreateTasks from '../Pages/CreateTasks';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={ <TasksList /> } />
    <Route path="/create" element={ <CreateTasks /> } />
  </Routes>
);
export default MainRouter;

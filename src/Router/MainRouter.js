import { Routes, Route } from 'react-router-dom';
import React from 'react';
import TasksList from '../Pages/Tasks';
import CreateTasks from '../Pages/CreateTasks';
import UpdateTasks from '../Pages/UpdateTasks';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={ <TasksList /> } />
    <Route path="/create" element={ <CreateTasks /> } />
    <Route path="/update" element={ <UpdateTasks /> } />
  </Routes>
);
export default MainRouter;

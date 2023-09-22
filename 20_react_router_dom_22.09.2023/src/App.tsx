
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

import Users from './components/Users';
import Comments from './components/Comments';
import Posts from './components/Posts';
import Todos from './components/Todos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='users' element={<Users />} />
          <Route path='comments' element={<Comments />} />
          <Route path='posts' element={<Posts />} />
          <Route path='todos' element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

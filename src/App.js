import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Page404 from './Components/Page404';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

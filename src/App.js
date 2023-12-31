import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Page404 from './Components/Page404';
import RecipeInf from './Components/RecipeInf';
import { useState } from "react"
import Footer from './Components/Footer';


function App() {
  const [url,setUrl] = useState('https:/www.themealdb.com/api/json/v1/1/search.php?s=');

  return (
    <BrowserRouter>
      <Header setUrl={setUrl} />
      <Routes>
        <Route path="/" element={<Home url={url} />}></Route>
        <Route path='/:RecipeId' setUrl={setUrl} element={<RecipeInf />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

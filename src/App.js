import './App.css';
import mockCats from "./mockData";
import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom'


const App = () => {

  const [cats, setCats] = useState(mockCats)
  console.log(cats)

  const createCat = (cat) => {
    console.log(cat)
  }

  const updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }

  return(
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat}/>} />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route path="/catshow/:id" element={< CatShow cats={cats}/>} />
        <Route path="/catindex" element= {< CatIndex cats={cats}/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;

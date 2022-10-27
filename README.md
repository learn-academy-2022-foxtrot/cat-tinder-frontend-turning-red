### BRANCH NAME: frontend-structure
- As a developer, I can create a directory in src called pages.
- As a developer, I can create a directory in src called components.
- As a developer, I can create a directory in src called assets.
- As a developer, I can create a file called Header.js in the components directory.
- As a developer, I can create a file called Footer.js in the components directory.
- As a developer, I can create a file called Home.js in the pages directory.
```javascript
import logo from './logo.svg';
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


const App = () => {
 
  const [cats, setCats] = useState(mockCats)
  console.log(cats)

  return(
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/catedit" element={<CatEdit/>} />
        <Route path="/catnew" element={<CatNew/>} />
        <Route path="/catshow" element={<CatShow/>} />
        <Route path="/catindex" element={<CatIndex/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;

```





- As a developer, I can create a file called CatIndex.js in the pages directory.
- As a developer, I can create a file called CatShow.js in the pages directory.
- As a developer, I can create a file called CatNew.js in the pages directory.
- As a developer, I can create a file called CatEdit.js in the pages directory.
- As a developer, I can create a file called NotFound.js in the pages directory.
- ** The following is an example but they all basically look the same
```javascript
import React from "react"

const CatEdit = () => {

    return(
        <>Cat Edit!</>
    )
}

export default CatEdit
```
- As a developer, I can add a file to src called mockCats.js and add an array of cat objects that match the future backend data structure.


- As a developer, I can add Reactstrap to my application.
    - $ yarn add bootstrap
    - $ yarn add reactstrap


- As a developer, I can create header UI.
HINT: Check out Canva to make fun logos.
As a developer, I can create footer UI.
As a developer, I can see the header and footer on every page.
As a developer, I can add some styling to the Home page.
As a developer, I can add some styling to the NotFound page.
As a developer, I can add React Router to my application.
As a developer, I can add routes to be able to navigate manually to all pages.

------------------------------------------------------------------------
# Testing

- As a developer, I have test coverage on my Header Component
    - As a developer, I have test coverage on my Footer Component
    - As a developer, I have test coverage on my Home Component
    - As a developer, I have test coverage on my NotFound Component

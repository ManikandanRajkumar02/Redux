import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';
function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductListing/>}></Route>
          <Route path='/product/:productId' element={<ProductDetail/>}></Route>
        </Routes>
       </Router>

    </div>
  );
}

export default App;

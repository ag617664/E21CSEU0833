// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductPages from './pages/AllProductPages';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={AllProductPages} />
        <Route path="/product/:productId" component={ProductDetailPage} />
        </Routes>
    </Router>
  );
};

export default App;

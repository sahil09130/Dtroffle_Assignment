import React from 'react';
import ProductList from './ProductList';
import Header from './header';
import './App.css';
import Footer from './footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <ProductList />
      <Footer/>
    </div>
  );
};

export default App;
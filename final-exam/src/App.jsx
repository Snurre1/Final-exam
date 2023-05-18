import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import FrontPage from './components/frontpage';



function Products() {
  return <div>Products</div>;
}

function RouteNotFound() {
  return <div>Page not found</div>;
}




function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
  
  );
}

export default App;


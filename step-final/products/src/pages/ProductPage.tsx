import * as React from 'react';
import ProductList from '../components/ProductList';

export const ProductPage = () => {
  return (
    <main className="py-5 max-w-screen-lg m-auto px-4">
      <h1 className="m-auto font-extrabold text-5xl text-center">Our Products</h1>
      <ProductList />
    </main>
  );
};

import * as React from 'react';
import { Product } from './Product';
import { productsData } from '../data';

export const ProductList = () => {
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

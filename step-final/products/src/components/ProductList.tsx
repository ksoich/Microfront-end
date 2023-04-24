import * as React from 'react';
import { Product } from './Product';
import { productsData } from '../data';

const ProductList = () => {
  return (
    <div className="py-5">
      <div className="grid grid-cols-4 gap-4">
        {productsData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import * as React from 'react';
//import '../index.css';
import { productType } from '../data';

export const Product = (prop: productType) => {
  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="bg-white border-2">
        <div className="relative overflow-hidden p-5">
          <img
            src={prop.img}
            alt="product"
            className="transform hover:scale-125 transition duration-500 ease-in-out p-4"
          />
        </div>
        <div className="flex justify-between bg-transparent border-t-0 transition duration-500 ease-in-out hover:bg-gray-200 bg-slate-50 py-2">
          <p className="align-middle mb-0 pl-2 font-bold">{prop.title}</p>
          <h5 className="italic mb-0 pr-2 text-blue-950 font-semibold">
            <span className="mr-1">$</span>
            {prop.price}
          </h5>
        </div>
      </div>
    </div>
  );
};

import * as React from 'react';

const ProductList = React.lazy(() => import('MobilePhoneProducts/ProductList'));
import { ErrorBoundary } from 'react-error-boundary';

export const ProductPage = () => {
  return (
    <main className="py-5 max-w-screen-lg m-auto px-4">
      <h1 className="m-auto font-extrabold text-5xl text-center">Our Products</h1>
      <ErrorBoundary fallback={<div>Store is temporarily down</div>}>
        <React.Suspense>
          <ProductList />
        </React.Suspense>
      </ErrorBoundary>
    </main>
  );
};

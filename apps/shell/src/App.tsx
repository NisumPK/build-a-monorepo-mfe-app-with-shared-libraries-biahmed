import { Suspense, lazy } from 'react';

const ProductList = lazy(() => import('shop/ProductList'));

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Shell Application (Host)</h1>
      <p>Loading product list from Shop remote...</p>
      <Suspense fallback={<div>Loading Remote Component...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default App;

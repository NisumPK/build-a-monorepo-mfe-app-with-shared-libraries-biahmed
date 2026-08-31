import { Product } from '../../../libs/types/src/index';
import { Button, Card, Price } from '../../../libs/ui/src/index';

const PRODUCTS: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 99.99 },
  { id: 2, name: 'Laptop Stand', price: 49.99 },
  { id: 3, name: 'Mechanical Keyboard', price: 89.99 },
  { id: 4, name: 'Wireless Mouse', price: 39.99 },
];

function ProductList() {
  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product.name);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {PRODUCTS.map((product) => (
          <Card key={product.id}>
            <h3>{product.name}</h3>
            <p style={{ margin: '10px 0' }}>
              <Price value={product.price} />
            </p>
            <Button label="Add to Cart" onClick={() => handleAddToCart(product)} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

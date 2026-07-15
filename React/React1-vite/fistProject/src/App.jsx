import React from 'react'

const App = () => {
    const products = [
  {
    id: 1,
    title: "Laptop",
    price: 80000,
  },
  {
    id: 2,
    title: "Phone",
    price: 30000,
  },
  {
    id: 3,
    title: "Keyboard",
    price: 2500,
  },
];
  return (
    <div>
<ProductList products={products} />
    </div>
  )
}
export default App
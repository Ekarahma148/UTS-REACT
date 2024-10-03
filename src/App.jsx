import { useState } from 'react';
import Clote from "./Component/Clote";
import { ShoppingCart } from 'lucide-react';


const App = () => {
  const [cartCount, setCartCount] = useState();

  const clothes = [
    { id: 1, name: 'T-Shirt', price: 50000, color: 'White', image: 'https://i.pinimg.com/236x/99/68/d3/9968d3347dbf530f29afa824c46230af.jpg' },
    { id: 2, name: 'Jeans', price: 50000, color: 'Blue', image: 'https://i.pinimg.com/236x/56/16/b3/5616b366a99258d58f35f8b8edcd5525.jpg' },
    { id: 3, name: 'Jacket', price: 100000, color: 'Black', image: 'https://i.pinimg.com/236x/b3/95/bb/b395bb9ea208a6ffbe037d449eff895b.jpg' },
    { id: 4, name: 'Dress', price: 150000, color: 'Green', image: 'https://i.pinimg.com/236x/05/5d/1f/055d1f6b0f0eec46cbf27c9f04dd39d0.jpg' },
    { id: 5, name: 'Abaya', price: 70000, color: 'White', image: 'https://i.pinimg.com/236x/58/5e/de/585ede5994a2a62ac4f105b5267de1de.jpg' },
    { id: 6, name: 'Sweater', price: 45000, color: 'Yellow', image: 'https://i.pinimg.com/236x/08/c8/ce/08c8ce5f03628c380cbde3b720ef692b.jpg' },
    { id: 7, name: 'Shorts', price: 25000, color: 'Gray', image: 'https://i.pinimg.com/236x/8a/52/74/8a52741241f15ce970f7310b33065597.jpg' },
    { id: 8, name: 'Jumpsuit', price: 300000, color: 'Purple', image: 'https://i.pinimg.com/236x/8e/d0/af/8ed0af8c39657bd652d108b400a5b5c6.jpg' },
    { id: 9, name: 'Tuxedo', price: 500000, color: 'Brown', image: 'https://i.pinimg.com/236x/bf/3f/18/bf3f18c3c3d6f7a64f502ca788314b4a.jpg' },
    { id: 10, name: 'Skirt', price: 50000, color: 'Pink', image: 'https://i.pinimg.com/236x/55/91/3a/55913a4b10133e9d920defba8e3fb98e.jpg' },
  ];

  const handleBuy = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="app">
      
      <h1>Clothes Shop</h1>
      <h6><ShoppingCart />{cartCount}</h6>
      <div className="clote-list">
        {clothes.map(clote => (
          <Clote key={clote.id} clote={clote} onBuy={handleBuy} />
        ))}
        <button onClick={handleBuy}>
        Buy Now
        </button>
      </div>
    </div>
  );
};

export default App;

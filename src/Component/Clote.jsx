import { Heart, MessageSquare, Info } from 'lucide-react';
import { useState } from 'react';

function Clote({ clote, onBuy }) {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  
  const showPopup = (index) => {
    const popup = document.getElementById(`popup-${index}`);
    popup.style.display = 'block';
  };

  const hidePopup = (index) => {
    const popup = document.getElementById(`popup-${index}`);
    popup.style.display = 'none';
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    const userComment = prompt('Enter your comment:');
    if (userComment) {
      setComment(userComment);
      alert(`Your comment: ${userComment}`);
    }
  };

  return (
    <div className="clote">
      <img src={clote.image} alt={clote.name} className="clote-image" />
      <h3>{clote.name}</h3>
      <p>Price: Rp.{clote.price}</p>
      <p>Color: {clote.color}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Info onClick={() => showPopup(clote.id)} style={{ cursor: 'pointer' }} />
        <Heart 
          onClick={handleLike} 
          style={{ cursor: 'pointer', color: isLiked ? 'red' : 'black' }} 
        />
        <MessageSquare onClick={handleComment} style={{ cursor: 'pointer' }} />
      </div>
      <div id={`popup-${clote.id}`} className="popup" style={{ display: 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', zIndex: '10' }}>
        <span onClick={() => hidePopup(clote.id)} className="close" style={{ cursor: 'pointer', float: 'right' }}>&times;</span>
        <img src={clote.image} alt={clote.name} style={{ width: '100%' }} />
        <h2>{clote.name}</h2>
        <p><strong>Clote Color:</strong> {clote.color}</p>
        <p><strong>Price:</strong> Rp.{clote.price}</p>
      </div>
    </div>
  );
};

export default Clote;

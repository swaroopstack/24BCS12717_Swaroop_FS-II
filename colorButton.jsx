import {useState} from 'react';

function ColorButton() {
  const [color, setColor] = useState('blue');

    const handleClick = () => {
      setColor('red');
    };

  return (
    <button style={{ backgroundColor: color , color: 'white' }} onClick={handleClick}>
      Click me!
    </button>
  );
};

export default ColorButton;

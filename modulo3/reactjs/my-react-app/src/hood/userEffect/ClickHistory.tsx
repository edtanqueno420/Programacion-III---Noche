import { useState } from 'react';

export default function ClickHistory() {
  const [count, setCount] = useState(0);
  // Se añade <string[]> para indicarle a TypeScript que el arreglo contendrá textos
  const [history, setHistory] = useState<string[]>([]); 

  const handleClick = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    setHistory([...history, `Clic ${nextCount}`]);
  };

  return (
    <div>
      <button onClick={handleClick}>Clic</button>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
import { useState } from 'react';

export default function TextInput() {
  const [text, setText] = useState("Escriba aqui");
  return (
    <input
      type="text"
      value={text}
      onChange={e => setText(e.target.value)} //Para escribir en el cuadro
      placeholder="Escribe algo"
    />
  );
}

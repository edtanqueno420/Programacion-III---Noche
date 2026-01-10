import { useEffect, useRef } from 'react';

export default function FocoAutomatico() {
  const inputRef = useRef<HTMLInputElement | null>(null); // referencia tipada

  useEffect((): void => {
    // Al montar el componente, enfocamos el input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <label>Nombre: </label>
      <input
        ref={inputRef}
        placeholder="Escribe tu nombre aquí..."
      />
    </div>
  );
}

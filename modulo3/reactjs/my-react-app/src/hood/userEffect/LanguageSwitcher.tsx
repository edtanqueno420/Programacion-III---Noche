import { useState } from 'react';

export default function LanguageSwitcher() {
  // Definimos que lang solo puede ser una de estas tres opciones
  const [lang, setLang] = useState<'es' | 'en' | 'fr'>('es');

  const messages = {
    es: 'Hola mundo',
    en: 'Hello world',
    fr: 'Bonjour le monde'
  };

  return (
    <div>
      {/* Forzamos el valor del evento a nuestro tipo específico */}
      <select 
        onChange={(e) => setLang(e.target.value as 'es' | 'en' | 'fr')} 
        value={lang}
      >
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
      </select>
      
      <p>{messages[lang]}</p>
    </div>
  );
}
import { useState } from 'react';

export default function PostLikes() {
  // TypeScript infiere que esto es un arreglo de números: number[]
  const [likes, setLikes] = useState([0, 0]);

  // Se agrega ': number' al parámetro index
  const likePost = (index: number) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  return (
    <div>
      {likes.map((like, i) => (
        <div key={i}>
          <p>Publicación {i + 1} - Likes: {like}</p>
          {/* Aquí 'i' es de tipo number, por lo que coincide con la función */}
          <button onClick={() => likePost(i)}>Like</button>
        </div>
      ))}
    </div>
  );
}
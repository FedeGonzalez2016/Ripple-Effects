// pages/index.tsx

// Importamos la librería React desde 'react' para poder utilizarla en nuestro componente
import React from 'react';

// Importamos el componente MyButton que hemos creado en el archivo '../components/MyButton'
import MyButton from '../components/MyButton';

// Definimos un nuevo componente llamado HomePage usando React.FC (Functional Component).
// Este componente será nuestra página de inicio.
const HomePage: React.FC = () => {
  // La función del componente HomePage devuelve lo que se mostrará en la página.
  // En este caso, se devuelve un div que contiene un encabezado h1 y el componente MyButton.
  return (
    <div>
      <h1>Bienvenido a mi página</h1>
      <MyButton />
    </div>
  );
};

// Exportamos el componente HomePage para que pueda ser utilizado en otros archivos.
export default HomePage;

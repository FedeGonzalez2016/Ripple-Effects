// components/MyButton.tsx

// Importamos la librería React desde 'react' para poder utilizarla en nuestro componente.
import React from 'react';

// Importamos el componente "Ripple" desde la biblioteca 'react-ripples'.
// Este componente nos permitirá agregar el efecto de ondulación al botón.
import Ripple from 'react-ripples';

// Definimos un nuevo componente llamado MyButton usando React.FC (Functional Component).
// Este componente representará nuestro botón con efecto de ondulación.
const MyButton: React.FC = () => {
  // Definimos una función llamada "handleClick" que se ejecutará cuando el botón sea clicado.
  const handleClick = () => {
    // Aquí puedes agregar la lógica de manejo del clic del botón.
    // Por ejemplo, puedes realizar una acción cuando el botón sea clicado.
  };

  // El componente MyButton devuelve lo que se mostrará en el botón.
  // Utilizamos el componente "Ripple" para agregar el efecto de ondulación al botón.
  // Le proporcionamos dos propiedades: "during" y "color".
  // La propiedad "during" define la duración del efecto de ondulación en milisegundos.
  // La propiedad "color" define el color del efecto de ondulación en formato hexadecimal.
  // La propiedad "onClick" define la función que se ejecutará cuando el botón sea clicado.
  // Dentro de <Ripple> agregamos un botón con el texto "¡Haz clic en mí!".
  // Cuando hagamos clic en el botón, se activará el efecto de ondulación proporcionado por "Ripple",
  // y se ejecutará la función "handleClick" que definimos anteriormente.
  return (
    <Ripple during={3000} color="#1E57E5" onClick={handleClick}>
      <button>¡Haz clic en mí!</button>
    </Ripple>
  );
};

// Exportamos el componente MyButton para que pueda ser utilizado en otros archivos.
export default MyButton;

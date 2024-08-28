// components/Hours.js
import React from 'react';

const Hours = () => {
  const today = new Date();
  const day = today.getDay(); // 0 (domingo) - 6 (sábado)
  
  let hours;
  if (day >= 1 && day <= 5) { // Lunes a viernes
    hours = "10 a.m. - 4 p.m.";
  } else { // Sábado y domingo
    hours = "9 a.m. - 8 p.m.";
  }

  return (
    <div>
      <h2>Horario de atención:</h2>
      <p>Hoy: {hours}</p>
    </div>
  );
};

export default Hours;
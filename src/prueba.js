import { useState } from "react";

const Prueba = () => {
  const [numero, setNumero] = useState(1);

  // Función que se ejecuta cuando se pulsa el botón para cambiar el numero
  const cambiarNumero = (tipo) => {
    // creamos el nuevo numero que tendra el valor actual del numero sin sumar o restar
    let nuevoNumero = numero;

    // validamos el tipo y ejecutamos la funcion correspondiente
    // usamos el "===" para indicar que es identico ( 2 === "2" es falso )
    // usamos el "==" para indicar que es igual ( 2 == "2" es verdadero)
    // usamos el "=" para asignar valor
    if (tipo === "aumentar") {
      // si el tipo es aumentar
      if (numero < 10) {
        nuevoNumero = numero + 1;
      }
    } else {
      // si el tipo es restar
      if (numero > 0) {
        nuevoNumero = numero - 1;
      }
    }

    // setamos el nuevo numero
    setNumero(nuevoNumero);
  };
  return (
    <div>
      <p>texto {numero}</p>
      <button onClick={() => cambiarNumero("aumentar")}>Aumentar Numero</button>
      <button onClick={() => cambiarNumero("restar")}>Restar Numero</button>
    </div>
  );
};

export default Prueba;

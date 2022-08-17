const Funciones = () => {
  const sumar = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es: {sumar(2, 5)}</span>
    </>
  );
};

export default Funciones;

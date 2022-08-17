const TiposBasicos = () => {
  const nombre: string = "Fernando";
  const edad: number = 35;
  const estaActivo: boolean = true;
  const poderes: string[] = ["Velocidad", "Volar", "Golpear"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? "Activo" : "No activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};

export default TiposBasicos;

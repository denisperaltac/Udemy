interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  ciudad: string;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Denis",
    edad: 26,
    direccion: {
      pais: "Argentina",
      ciudad: "San Cristobal",
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

export default ObjetosLiterales;

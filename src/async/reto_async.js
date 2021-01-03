const fetchdata = require("../compartido/conexion");
const api = "https://rickandmortyapi.com/api/character/";

const llamado_api = async () => {
  try {
    const data = await fetchdata(api);
    console.log(data.info.count);

    const personaje = await fetchdata(api + data.results[19].id);
    console.log(personaje.name);

    const dimensiones = await fetchdata(personaje.origin.url);
    console.log(dimensiones.dimension);
  } catch (error) {
    console.error(error);
  }
};

llamado_api();

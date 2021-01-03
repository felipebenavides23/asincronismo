const fetchdata = require('../compartido/conexion')
const api = 'https://rickandmortyapi.com/api/character/'

fetchdata(api)
    .then(data => {
        
        console.log(data.info.count)
        return fetchdata(api + data.results[5].id)
        
        
    })
    .then(data => {
        
        console.log(data.name)
        console.log(data.origin.url)
        return fetchdata(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error('ocurrio un error' + err))
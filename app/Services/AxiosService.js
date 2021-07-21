export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 10000
})

export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/chris/pokemon',
  timeout: 10000
})
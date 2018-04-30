const getNames = () => {
  return fetch(`${playerQueryURL}{player{fullName}}`)
  .then(toJSON)
  .then(keepPlayerData)
  .catch(handleError)
}

export default {
  getNames
}

const toJSON = res => (res.json())
const keepPlayerData = res => (res.data.player)
const handleError = err => console.log('not working, do something', err)

const playerQueryURL = 'http://localhost:3000/player?query='

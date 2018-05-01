const getNames = () => {
  return fetch(`${teamQueryURL}{team{fullName}}`)
  .then(toJSON)
  .then(keepTeamData)
  .catch(handleError)
}

export default {
  getNames
}

const toJSON = res => (res.json())
const keepTeamData = res => (res.data.team)
const handleError = err => console.log('not working, do something', err)

const teamQueryURL = 'http://localhost:3000/team?query='

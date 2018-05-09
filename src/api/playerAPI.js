import { GraphQLClient } from 'graphql-request'
const playerEndpoint = 'http://localhost:3000/player'
const client = new GraphQLClient(playerEndpoint)
import queries from './playerQueries.js'

const fetchPlayerData = query => variables => {
  return client.request(query, variables)
    .then(keepPlayerData)
    // .catch(handleError)
}

const getNames = fetchPlayerData(queries.list)

const getProfile = fetchPlayerData(queries.profile)

const getMeasures = fetchPlayerData(queries.measures)

export default {
  getNames,
  getProfile,
  getMeasures
}



const toJSON = res => (res.json())
const keepPlayerData = data => (data.player)
const handleError = err => console.log('not working, do something', err)

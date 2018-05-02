import { GraphQLClient } from 'graphql-request'
const playerEndpoint = 'http://localhost:3000/player'
const client = new GraphQLClient(playerEndpoint)
import queries from './playerQueries.js'

const getNames = (variables) => {
  return client.request(queries.list, variables)
    .then(keepPlayerData)
    .catch(handleError)
}

export default {
  getNames
}

const toJSON = res => (res.json())
const keepPlayerData = data => (data.player)
const handleError = err => console.log('not working, do something', err)

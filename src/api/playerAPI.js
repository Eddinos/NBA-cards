import { GraphQLClient } from 'graphql-request'
const playerEndpoint = 'http://localhost:3000/player'
const client = new GraphQLClient(playerEndpoint)

const query = `query ($jersey: String!, $fullName: String!) {
  player(jersey: $jersey, fullName: $fullName) {
    fullName
  }
}`

const defaultVariables = {
  jersey: '',
  fullName: ''
}

const getNames = (variables = defaultVariables) => {
  variables = Object.assign(defaultVariables, variables)
  return client.request(query, variables)
    .then(keepPlayerData)
    .catch(handleError)
}

export default {
  getNames
}

const toJSON = res => (res.json())
const keepPlayerData = data => (data.player)
const handleError = err => console.log('not working, do something', err)

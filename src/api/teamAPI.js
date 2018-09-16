import { GraphQLClient } from 'graphql-request'
const teamEndpoint = 'http://localhost:3000/team'
const client = new GraphQLClient(teamEndpoint)
import queries from './teamQueries.js'

const fetchTeamData = query => variables => {
  return client.request(query, variables)
    .then(keepTeamData)
}

const getNames = fetchTeamData(queries.names);

const getProfile = fetchTeamData(queries.profile)

export default {
  getNames,
  getProfile
}

const toJSON = res => (res.json())
const keepTeamData = res => (res.team)
const handleError = err => console.log('not working, do something', err)

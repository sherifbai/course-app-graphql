const { buildSchema } = require('graphql')

module.exports = buildSchema(`

    type RootQuery {

    }

    type RootMutation {
        
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`)

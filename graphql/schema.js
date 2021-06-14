const { buildSchema } = require('graphql')

module.exports = buildSchema(`

    type Cart {
        _id: ID!
        courseId: String!
        quantity: Int!
    }

    type User {
        _id: ID!
        email: String!
        password: String!
        cart: [Cart!]!
    }

    type AuthData {
        userId: String!
        email: String!
    }

    input UserInputData {
        email: String!
        password: String!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`)

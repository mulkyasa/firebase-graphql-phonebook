var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInteger = require('graphql').GraphQLInteger;

// User Type
exports.userType = new GraphQLObjectType({
  name: 'users',
  fields: function () {
    return {
      userName: {
        type: new GraphQLNonNull(GraphQLID)
      },
      Name: {
        type: GraphQLString
      },
      Number: {
        type: GraphQLString
      }
    }
  }
});
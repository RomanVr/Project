import {
  GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLList,
} from 'graphql';
import Users from '../models/user';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    middleName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLString },
    gender: { type: GraphQLString },
    city: { type: GraphQLString },
    login: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Users.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return Users.find({});
      },
    },
  },
});

export default new GraphQLSchema({
  query: Query,
});

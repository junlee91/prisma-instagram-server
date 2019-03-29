import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();

      return {
        user: userProfile,
        posts
      };
    }
  },
  User: {
    // "parent" tells which resolver has called this custom resolver
    fullName: (parent, __, { request }) => {
      return `${parent.firstName} ${parent.lastName}`;
    }
  }
};

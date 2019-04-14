import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, firstName = '', lastName = '', bio = '' } = args;
      const exists = await prisma.$exists.user({ username });

      if (exists) {
        throw Error('This username is already taken');
      }

      // if fails, it'll return false automatically
      await prisma.createUser({ username, email, firstName, lastName, bio });

      return true;
    }
  }
};

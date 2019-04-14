import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, firstName = '', lastName = '', bio = '' } = args;

      // if fails, it'll return false automatically
      await prisma.createUser({ username, email, firstName, lastName, bio });

      return true;
    }
  }
};

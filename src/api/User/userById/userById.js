import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    userById: async (_, args) => {
      const { id } = args;
      return prisma.user({ id });
    }
  }
};

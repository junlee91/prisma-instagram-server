import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeRoom: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      const canSeeRoom = prisma.$exists.room({
        participants_some: {
          id: user.id
        }
      });

      if (!canSeeRoom) {
        throw Error('You are not in the room');
      }
      return prisma.room({ id });
    }
  }
};

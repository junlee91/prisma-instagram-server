import { prisma } from '../../../../generated/prisma-client';

export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args) => {
        const { roomId } = args;
        return prisma.$subscribe
          .message({
            AND: [
              { mutation_in: 'CREATED' },
              {
                node: {
                  room: { id: roomId }
                }
              }
            ]
          })
          .node(); // get the node (Message)
        /**
         * type MessageSubscriptionPayload {
         *  mutation: MutationType!
         *  node: Message -------------> we need to get this node!
         *  updatedFields: [String!]
         *  previousValues: MessagePreviousValues
         * }
         */
      },
      resolve: payload => payload
    }
  }
};

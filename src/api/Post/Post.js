import { prisma } from '../../../generated/prisma-client';

export default {
  Post: {
    isLiked: async (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [{ user: { id: user.id } }, { post: { id } }]
      });
    },
    commentCount: parent => prisma
      .commentsConnection({ where: { post: { id: parent.id } } })
      .aggregate()
      .count(),
    likeCount: parent => prisma
      .likesConnection({ where: { post: { id: parent.id } } })
      .aggregate()
      .count(),
    files: parent => prisma
      .post({ id: parent.id })
      .files(),
    comments: parent => prisma
      .post({ id: parent.id })
      .comments(),
    user: parent => prisma
      .post({ id: parent.id })
      .user(),
  }
};

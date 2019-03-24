import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../utils';

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });

      if (user.loginSecret === secret) {
        // remove secret text once confirmed
        await prisma.updateUser({ where: { id: user.id }, data: { loginSecret: '' } });
        return generateToken(user.id);
      }

      throw Error('Wront email/secret combination');
    }
  }
};

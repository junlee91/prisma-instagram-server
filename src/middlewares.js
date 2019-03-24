export const isAuthenticated = request => {
  if (!request.user) {
    throw Error('You need to login to perform this action');
  }
};

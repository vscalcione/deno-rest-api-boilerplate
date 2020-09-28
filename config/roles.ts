export const roles = ['user', 'admin'];
export const roleRights = new Map();

roleRights.set(role[0], [ 'getMe' ]);

roleRights.set(role[1], [
  'getMe',
  'getUsers',
  'manageUsers',
]);

export enum routes {
  landing = '/',
  task = '/task',
  user = '/user',
  roles = '/roles',
}

export const taskRoutes = {
  table: `${routes.task}/table`,
  create: `${routes.task}/create`,
  update: `${routes.task}/update`
};

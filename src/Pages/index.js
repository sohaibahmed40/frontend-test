import { lazy } from 'react';

const Home = lazy(async () => {
  return await import('./Home');
});

const Dashboard = lazy(async () => {
  return await import('./Dashboard');
});

const Settings = lazy(async () => {
  return await import('./Settings');
});

const PageNotFound = lazy(async () => {
  return await import('./PageNotFound');
});

export { Home, PageNotFound, Dashboard, Settings };

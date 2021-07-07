import { lazy } from 'react';
import { constants } from '../constants';

import Feed from 'pages/Feed';

const { PROFILE, FEED } = constants.route;
const Profile = lazy(() => import('pages/Profile'));

const routes = [
  {
    path: PROFILE,
    name: 'Profile',
    component: Profile,
    exact: true,
    isPrivate: true,
  },
  {
    path: FEED,
    name: 'Feed',
    component: Feed,
    exact: true,
    isPrivate: false,
  },
];

export default routes;

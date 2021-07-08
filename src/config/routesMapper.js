import { lazy } from 'react';
import { constants } from '../constants';

import Feed from 'pages/Feed';

const { PROFILE, FEED, PROFILE_GENERAL, PROFILE_API } = constants.route;

const Profile = lazy(() => import('pages/Profile'));
const GeneralProfle = lazy(() => import('components/Account/General'));
const GeneralApi = lazy(() => import('components/Account/Api'));

const routes = [
  {
    path: PROFILE,
    name: 'Profile',
    component: Profile,
    isPrivate: true,
    routes: [
      { path: PROFILE_GENERAL, component: GeneralProfle, isPrivate: true },
      {
        path: PROFILE_API,
        component: GeneralApi,
        isPrivate: true,
      },
    ],
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
